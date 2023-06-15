CREATE TABLE `pokemon` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256),
	`base_experience` int,
	`weight` int);
