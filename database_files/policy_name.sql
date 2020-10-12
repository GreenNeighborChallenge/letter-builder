CREATE TABLE policy_name (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "policy_name_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

INSERT INTO policy_name (id, name) VALUES (1, 'Climate Action Plan');
INSERT INTO policy_name (id, name) VALUES (2, 'Renewable Portfolio Standard');
INSERT INTO policy_name (id, name) VALUES (3, 'Property Assessed Clean Energy (PACE)');
INSERT INTO policy_name (id, name) VALUES (4, 'Clean Vehicle Policy');
INSERT INTO policy_name (id, name) VALUES (5, 'Green Pricing Mandate');
INSERT INTO policy_name (id, name) VALUES (6, 'Home Solar Rights');
INSERT INTO policy_name (id, name) VALUES (7, 'Community Solar');
INSERT INTO policy_name (id, name) VALUES (8, 'Community Choice Aggregation (CCA)');
INSERT INTO policy_name (id, name) VALUES (9, 'Energy Efficiency Standards');
INSERT INTO policy_name (id, name) VALUES (10, 'Citizens Utility Board');