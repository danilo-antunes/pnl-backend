CREATE TABLE `pnl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `color` varchar(45) NOT NULL,
  `icon` varchar(45) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `value` decimal(20,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 ;
