CREATE TABLE `pokmeon_types` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`type` varchar(256),
	`url` varchar(256),
	`pokemon_id` int);
