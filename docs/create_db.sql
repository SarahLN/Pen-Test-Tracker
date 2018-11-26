CREATE DATABASE `pentestdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;

CREATE TABLE `host` (
  `host_id` int(11) NOT NULL AUTO_INCREMENT,
  `ip_addr` varchar(15) DEFAULT NULL,
  `mac` varchar(17) DEFAULT NULL,
  `os` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`host_id`),
  UNIQUE KEY `hostname_UNIQUE` (`ip_addr`,`mac`,`os`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `port` (
  `port_id` int(11) NOT NULL AUTO_INCREMENT,
  `port_num` int(11) NOT NULL,
  `protocol` varchar(10) NOT NULL,
  PRIMARY KEY (`port_id`),
  UNIQUE KEY `protocol_UNIQUE` (`protocol`,`port_num`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `service` (
  `service_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `product` varchar(150) DEFAULT NULL,
  `version` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`service_id`),
  UNIQUE KEY `version_UNIQUE` (`name`,`product`,`version`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `host_port_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `host_id` int(11) NOT NULL,
  `port_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `service_id_UNIQUE` (`host_id`,`port_id`,`service_id`),
  KEY `host_details_host_id_idx` (`host_id`),
  KEY `host_details_port_id_idx` (`port_id`),
  KEY `host_details_service_id_idx` (`service_id`),
  CONSTRAINT `host_details_host_id` FOREIGN KEY (`host_id`) REFERENCES `host` (`host_id`),
  CONSTRAINT `host_details_port_id` FOREIGN KEY (`port_id`) REFERENCES `port` (`port_id`),
  CONSTRAINT `host_details_service_id` FOREIGN KEY (`service_id`) REFERENCES `service` (`service_id`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_result_grid`()
BEGIN
	SELECT 
		d.id, h.host_id, h.ip_addr, p.port_num, p.protocol, s.name, s.product, s.version
	FROM
		pentestdb.host AS h
			LEFT JOIN
		pentestdb.host_port_details AS d ON (d.host_id = h.host_id)
			LEFT JOIN
		pentestdb.port as p ON (d.port_id = p.port_id)
			LEFT JOIN
		pentestdb.service as s ON (d.service_id = s.service_id);
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_host_port_details_record`(IN in_host_id int, IN in_port_id int, IN in_service_id int, in_status varchar(45))
BEGIN
	INSERT IGNORE INTO pentestdb.host_port_details (host_id, port_id, service_id, status) VALUES (in_host_id, in_port_id, in_service_id, in_status);
    
    SELECT id  FROM pentestdb.host_port_details
    WHERE host_id = in_host_id AND port_id = in_port_id AND service_id = in_service_id AND status = in_status;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_host_record`(IN in_ip_addr varchar(15), IN in_mac varchar(17), IN in_os varchar(250))
BEGIN
	INSERT IGNORE INTO host (ip_addr, mac, os) values (in_ip_addr, in_mac, in_os);
    
    SELECT host_id from pentestdb.host
    WHERE ip_addr = in_ip_addr AND
          mac = in_mac AND
          os = in_os;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_port_record`(IN in_port_num int(11), IN in_protocol varchar(10))
BEGIN
	INSERT IGNORE INTO pentestdb.port (port_num, protocol) VALUES (in_port_num, in_protocol);
    
    SELECT port_id FROM pentestdb.port
    WHERE port_num = in_port_num AND protocol = in_protocol;

END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_service_record`(IN in_name varchar(250), IN in_product varchar(150), IN in_version varchar(150))
BEGIN
	INSERT IGNORE INTO pentestdb.service (name, product, version) VALUES (in_name, in_product, in_version);
    
    SELECT service_id  FROM pentestdb.service
    WHERE name = in_name AND product = in_product AND version = in_version;

END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `select_host_record_by_any_field`(IN in_search_term varchar(250))
BEGIN
	SELECT *
    FROM pentestdb.host
    WHERE ip_addr LIKE CONCAT('%', in_search_term, '%')
       OR mac LIKE CONCAT('%', in_search_term, '%')
       OR os LIKE CONCAT('%', in_search_term, '%');
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `select_host_record_by_host_id`(IN in_host_id int(11))
BEGIN
	SELECT *
    FROM pentestdb.host
    WHERE host_id = in_host_id;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `select_host_record_by_hostname`(IN in_hostname varchar(150))
BEGIN
	SELECT *
    FROM pentestdb.host
    WHERE hostname LIKE CONCAT('%', in_hostname, '%');
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `select_host_record_by_ip`(IN in_ip_addr varchar(15))
BEGIN
	SELECT *
    FROM pentestdb.host
    WHERE ip_addr LIKE CONCAT('%', in_ip_addr, '%');
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `select_host_record_by_mac`(IN in_mac varchar(15))
BEGIN
	SELECT *
    FROM pentestdb.host
    WHERE mac LIKE CONCAT('%', in_mac, '%');
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `select_host_record_by_os`(IN in_os varchar(15))
BEGIN
	SELECT *
    FROM pentestdb.host
    WHERE os LIKE CONCAT('%', in_os, '%');
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `select_port_record`(IN in_port_num int(11), IN in_protocol varchar(10))
BEGIN
	SELECT * FROM pentestdb.port
    WHERE port_num = in_port_num AND protocol = in_protocol;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `select_port_record_by_id`(IN in_port_id int(11))
BEGIN
	SELECT * FROM pentestdb.port
    WHERE port_id = in_port_id;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `select_port_record_by_num`(IN in_port_num int(11))
BEGIN
	SELECT * FROM pentestdb.port
    WHERE port_num = in_port_num;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `select_port_record_by_protcol`(IN in_protocol int(11))
BEGIN
	SELECT * FROM pentestdb.port
    WHERE protocol = in_protocol;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `select_service_record_by_any_field`(IN in_search_term varchar(250))
BEGIN
	SELECT *
    FROM pentestdb.service
    WHERE name LIKE CONCAT('%', in_search_term, '%')
       OR product LIKE CONCAT('%', in_search_term, '%')
       OR version LIKE CONCAT('%', in_search_term, '%');
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `select_service_record_by_name`(IN in_name varchar(250))
BEGIN
	SELECT *
    FROM pentestdb.service
    WHERE name LIKE CONCAT('%', in_name, '%');
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `select_service_record_by_product`(IN in_product varchar(150))
BEGIN
	SELECT *
    FROM pentestdb.service
    WHERE product LIKE CONCAT('%', in_product, '%');
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `select_service_record_by_version`(IN in_version varchar(150))
BEGIN
	SELECT *
    FROM pentestdb.service
    WHERE version LIKE CONCAT('%', in_version, '%');
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_host_record`(IN in_host_id int(11), IN in_ip_addr varchar(15), IN in_mac varchar(17), IN in_os varchar(250))
BEGIN
    DECLARE cur_ip_addr varchar(15) DEFAULT NULL;
    DECLARE cur_mac varchar(17) DEFAULT NULL;
    DECLARE cur_os varchar(250) DEFAULT NULL;
    
    SELECT ip_addr, mac, os 
    INTO cur_ip_addr, cur_mac, cur_os
    FROM pentestdb.host
    WHERE host_id = in_host_id;
    
    IF in_ip_addr != '' AND in_ip_addr IS NOT NULL AND in_ip_addr != cur_ip_addr THEN
		UPDATE pentestdb.host
        SET ip_addr = in_ip_addr
		WHERE host_id = in_host_id;
    END IF;
    
    IF in_mac != '' AND in_mac IS NOT NULL AND in_mac != cur_mac THEN
		UPDATE pentestdb.host
        SET mac = in_mac
		WHERE host_id = in_host_id;
    END IF;
    
    IF in_os != '' AND in_os IS NOT NULL AND in_os != cur_os THEN
		UPDATE pentestdb.host
        SET os = in_os
		WHERE host_id = in_host_id;
    END IF;
    
    SELECT host_id
    FROM pentestdb.host
    WHERE host_id = in_host_id;
	
END$$
DELIMITER ;
