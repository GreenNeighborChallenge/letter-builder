CREATE TABLE "state_office" (
	"id" serial NOT NULL,
	"state_id" int,
	"SSEO_name" varchar(255),
	"SSEO_email" varchar(255),
	CONSTRAINT "state_office_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (1, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (2, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (3, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (4, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (5, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (6, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (7, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (8, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (9, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (10, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (11, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (12, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (13, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (14, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (15, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (16, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (17, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (18, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (19, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (20, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (21, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (22, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (23, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (24, 'Office of Enterprise Sustainability', 'Anne.Hunt@state.mn.us');
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (25, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (26, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (27, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (28, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (29, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (30, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (31, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (32, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (33, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (34, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (35, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (36, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (37, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (38, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (39, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (40, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (41, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (42, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (43, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (44, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (45, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (46, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (47, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (48, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (49, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (50, NULL, NULL);
INSERT INTO public.state_office (state_id, "SSEO_name", "SSEO_email") VALUES (51, NULL, NULL);

ALTER TABLE state_office ADD CONSTRAINT state_office_fk0 FOREIGN KEY (state_id) REFERENCES public.state(id);