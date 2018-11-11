import sys
import xml.etree.ElementTree as ET

tree = ET.parse('ver_scan3.xml')
root = tree.getroot()

host = root[4]

for element in host:
    if element.tag == 'address':
        # parse out the address
        if element.attrib['addrtype'] == 'mac':
            mac_addr = element.attrib['addr']
        elif element.attrib['addrtype'] == 'ipv4':
            ip_addr = element.attrib['addr']
    elif element.tag == 'hostnames':
        # parse out the hostname


print('Hello from Python!')
sys.stdout.flush()
