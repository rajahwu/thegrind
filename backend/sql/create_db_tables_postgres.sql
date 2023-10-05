-- SQL dump generated using DBML (dbml-lang.org)
-- Database: PostgreSQL
-- Generated at: 2023-10-05T02:06:50.479Z

CREATE TABLE "users" (
  "id" uuid PRIMARY KEY,
  "username" varchar UNIQUE NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "created_at" datetime DEFAULT (now()),
  "updated_at" datetime DEFAULT (now())
);

CREATE TABLE "user_profiles" (
  "id" uuid PRIMARY KEY,
  "user_id" uuid,
  "avatar" varchar,
  "name" varchar,
  "phone" varchar,
  "address_id" uuid,
  "social" varchar,
  "created_at" datetime DEFAULT (U.created_at),
  "updated_at" datetime DEFAULT (U.created_at)
);

CREATE TABLE "address" (
  "id" uuid PRIMARY KEY,
  "street" varchar,
  "steet" varchar,
  "city" varchar,
  "zipcode" varchar,
  "geo" varchar,
  "created_at" datetime,
  "updated_at" datetime
);

CREATE TABLE "events" (
  "id" uuid PRIMARY KEY,
  "user_id" uuid,
  "title" varchar,
  "start" datetime,
  "end" datetime,
  "created_at" datetime,
  "updated_at" datetime
);

CREATE TABLE "tasks" (
  "id" uudi PRIMARY KEY,
  "user_id" uuid,
  "title" varchar,
  "isComplete" bool
);

COMMENT ON COLUMN "user_profiles"."social" IS 'social media string';

COMMENT ON COLUMN "address"."geo" IS '\"lat\" / \"lng\"';

ALTER TABLE "events" ADD FOREIGN KEY ("id") REFERENCES "users" ("id");

ALTER TABLE "tasks" ADD FOREIGN KEY ("id") REFERENCES "users" ("id");

ALTER TABLE "user_profiles" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "events" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "tasks" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
