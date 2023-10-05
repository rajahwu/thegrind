-- SQL dump generated using DBML (dbml-lang.org)
-- Database: MySQL
-- Generated at: 2023-10-05T02:06:19.964Z

CREATE TABLE `users` (
  `id` uuid PRIMARY KEY,
  `username` varchar(255) UNIQUE NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT (now()),
  `updated_at` datetime DEFAULT (now())
);

CREATE TABLE `user_profiles` (
  `id` uuid PRIMARY KEY,
  `user_id` uuid,
  `avatar` varchar(255),
  `name` varchar(255),
  `phone` varchar(255),
  `address_id` uuid,
  `social` varchar(255) COMMENT 'social media string',
  `created_at` datetime DEFAULT (U.created_at),
  `updated_at` datetime DEFAULT (U.created_at)
);

CREATE TABLE `address` (
  `id` uuid PRIMARY KEY,
  `street` varchar(255),
  `steet` varchar(255),
  `city` varchar(255),
  `zipcode` varchar(255),
  `geo` varchar(255) COMMENT '\"lat\" / \"lng\"',
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `events` (
  `id` uuid PRIMARY KEY,
  `user_id` uuid,
  `title` varchar(255),
  `start` datetime,
  `end` datetime,
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `tasks` (
  `id` uudi PRIMARY KEY,
  `user_id` uuid,
  `title` varchar(255),
  `isComplete` bool
);

ALTER TABLE `events` ADD FOREIGN KEY (`id`) REFERENCES `users` (`id`);

ALTER TABLE `tasks` ADD FOREIGN KEY (`id`) REFERENCES `users` (`id`);

ALTER TABLE `user_profiles` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `events` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `tasks` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
