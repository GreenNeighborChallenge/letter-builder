CREATE TABLE "state_office" (
	"id" serial NOT NULL,
	"state_id" int NOT NULL,
	"SSEO_name" varchar(255),
	"SSEO_email" varchar(255),
	CONSTRAINT "state_office_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (1, 1, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (2, 2, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (3, 3, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (4, 4, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (5, 5, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (6, 6, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (7, 7, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (8, 8, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (9, 9, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (10, 10, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (11, 11, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (12, 12, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (13, 13, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (14, 14, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (15, 15, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (16, 16, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (17, 17, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (18, 18, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (19, 19, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (20, 20, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (21, 21, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (22, 22, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (23, 23, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (24, 24, 'Office of Enterprise Sustainability', 'Anne.Hunt@state.mn.us');
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (25, 25, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (26, 26, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (27, 27, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (28, 28, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (29, 29, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (30, 30, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (31, 31, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (32, 32, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (33, 33, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (34, 34, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (35, 35, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (36, 36, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (37, 37, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (38, 38, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (39, 39, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (40, 40, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (41, 41, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (42, 42, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (43, 43, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (44, 44, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (45, 45, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (46, 46, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (47, 47, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (48, 48, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (49, 49, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (50, 50, NULL, NULL);
INSERT INTO state_office (id, state_id, "SSEO_name", "SSEO_email") VALUES (51, 51, NULL, NULL);

ALTER TABLE state_office ADD CONSTRAINT state_office_fk0 FOREIGN KEY (state_id) REFERENCES "state"(id);