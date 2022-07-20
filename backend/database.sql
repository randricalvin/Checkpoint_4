SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

-- Database: `Checkpoint4`


CREATE DATABASE IF NOT EXISTS `checkpoint4`;


CREATE TABLE IF NOT EXISTS `team` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB;

INSERT INTO `team` (`id`, `name`, `quantity`) VALUES
(1, 'Frontend', 5);


CREATE TABLE IF NOT EXISTS `dev` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `specialty` varchar(255) NOT NULL
) ENGINE=InnoDB;

INSERT INTO `dev` (`id`, `firstname`, `lastname`, `specialty`) VALUES
(1, 'John', 'Doe', 'Java'),
(2, 'Jane', 'Doe', 'PHP');


CREATE TABLE IF NOT EXISTS `team_dev` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `team_id` int(11) NOT NULL,
  `dev_id` int(11) NOT NULL,
  FOREIGN KEY (`team_id`) REFERENCES `team` (`id`),
  FOREIGN KEY (`dev_id`) REFERENCES `dev` (`id`)
) ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `project` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `site_link` varchar(255) NULL,
  `github_link` varchar(255) NULL,
  `team_id` int(11) NOT NULL,
  FOREIGN KEY (team_id) REFERENCES team(id)
) ENGINE=InnoDB;