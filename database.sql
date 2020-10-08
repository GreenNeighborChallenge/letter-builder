
-- Run these SQL commands to create your DATABASE: 

CREATE DATABASE "green_neighbor"

CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "policy_info" (
	"id" serial NOT NULL,
	"state_id" int NOT NULL,
	"policy_grade" varchar(255) NOT NULL,
	"climate_plan" varchar(255) NOT NULL,
	"portfolio_standard" varchar(255) NOT NULL,
	"pace" varchar(255) NOT NULL,
	"clean_vehicle" varchar(255),
	"green_pricing" varchar(255),
	"home_solar" varchar(255),
	"community_solar" varchar(255),
	"community_choice" varchar(255),
	"energy_standard" varchar(255),
	"utility_board" varchar(255),
	"resident_count" int,
	"resident_mwh" int,
	CONSTRAINT "policy_info_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "policy_language" (
	"id" serial NOT NULL,
	"policy" varchar(255) NOT NULL,
	"short_info" TEXT NOT NULL,
	"long_info" TEXT NOT NULL,
	"petition_info" TEXT NOT NULL,
	CONSTRAINT "policy_language_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "state" (
	"id" serial NOT NULL,
	"state" varchar(255) NOT NULL,
	"puc" varchar(255) NOT NULL,
	"DoC" varchar(255) NOT NULL,
	CONSTRAINT "state_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "state_office" (
	"id" serial NOT NULL,
	"state_id" int NOT NULL,
	"SSEO_name" varchar(255) NOT NULL,
	"SSEO_email" varchar(255) NOT NULL,
	CONSTRAINT "state_office_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
ALTER TABLE "policy_info" ADD CONSTRAINT "policy_info_fk0" FOREIGN KEY ("state_id") REFERENCES "state"("id");
ALTER TABLE "state_office" ADD CONSTRAINT "state_office_fk0" FOREIGN KEY ("state_id") REFERENCES "state"("id");