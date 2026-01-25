CREATE TABLE `user` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`created` integer NOT NULL
);
