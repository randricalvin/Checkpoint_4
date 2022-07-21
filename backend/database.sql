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
(1, 'Frontend', 5),
(2, 'Backend', 8),
(3, 'Design', 3),
(4, 'Devops', 2),
(5, 'QA', 1),
(6, 'UX', 4),
(7, 'PM', 6),
(8, 'Fullstack', 2);



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

INSERT INTO `team_dev` (`id`, `team_id`, `dev_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1),
(4, 2, 2);


CREATE TABLE IF NOT EXISTS `project` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `site_link` varchar(255) NULL,
  `github_link` varchar(255) NULL,
  `team_id` int(11) NULL,
  FOREIGN KEY (team_id) REFERENCES team(id)
) ENGINE=InnoDB;

INSERT INTO `project` (`name`, `description`, `site_link`, `github_link`, `team_id`) VALUES
('Mood', 'Mood is a project for the course "Programming in JS" at the University of Applied Sciences in the city of Stuttgart.', 'https://mood-une-application-de-choix.netlify.app/', 'https://github.com/randricalvin/Projet_2_React_Mood_WCS', 1),
('Error404', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'https://kevinlavigne.github.io/projet1-error404/accueil.html', 'https://github.com/randricalvin/Pojet-1-Error404-WCS', 2);