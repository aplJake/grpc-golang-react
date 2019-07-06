CREATE DATABASE `to_do_db`;
USE `to_do_db`;

CREATE TABLE `to_do` (
    `to_do_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(200) DEFAULT NULL,
    `description` VARCHAR(200) DEFAULT NULL,
    `reminder` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`to_do_id`)
) ENGINE=InnoDB;