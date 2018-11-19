from libnmap.parser import NmapParser
from pentestdbconn import PenTestDBConn

import argparse
import datetime
import os

# parser = argparse.ArgumentParser()
# parser.add_argument('-p', '--path', help='the path to the folder that we are monitoring')
# args = parser.parse_args()

ptdb = PenTestDBConn()

# path = args.path
# TODO: switch this to parameter
path = 'C:\\Users\\sarah\\Desktop\\output'
try:
    files = os.listdir(path)
except FileNotFoundError as e:
    print('Path does not exist: {0}'.format(path))

os.chdir(path)

for file in files:
    if file == 'archive':
        continue

    nmap_report = NmapParser.parse_fromfile(file)

    for scanned_host in nmap_report.hosts:
        address = scanned_host.address  # ip address
        mac = scanned_host.mac          # mac address
        if scanned_host.os_fingerprinted:
            host_os = scanned_host.os.osmatches[0].name
        else:
            host_os = None

        # TODO: check if host already exists and we just need to update it
        host_id = ptdb.insert_host_record(address, mac, host_os)

        ports = scanned_host.get_ports()
        for port in ports:
            port_num = port[0]
            protocol = port[1]
            port_id = ptdb.insert_port_record(port_num, protocol)

            service = scanned_host.get_service(port_num, protocol)
            name = service.service
            product = service.service_dict['product'] if 'product' in service.service_dict else ''
            version = service.service_dict['version'] if 'version' in service.service_dict else ''
            service_id = ptdb.insert_service_record(name, product, version)

            status = service.state

            record_id = ptdb.insert_host_port_details_record(host_id, port_id, service_id, status)

    # begin archiving this file
    if not os.path.exists('archive'):
        os.makedirs('archive')
    ts = datetime.datetime.now().strftime('%Y%m%d%H%M')
    os.rename(file, 'archive/{0}_{1}'.format(ts, file))
