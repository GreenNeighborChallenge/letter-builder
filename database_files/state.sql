
CREATE TABLE "state" (
	"id" serial NOT NULL,
	"state_abv" varchar(255) NOT NULL,
	"state_name" varchar(255) NOT NULL,
	"state_grade" varchar(255),
	"gov_email" varchar(255),
	"puc" varchar(255),
	"doc" varchar(255),
	"resident_count" int,
	"resident_mwh" int,
	CONSTRAINT "state_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (1, 'AK', 'Alabama', 'D', 'governor@gov.state.ak.us', 'rca.mail@alaska.gov', NULL, 277706, 1919293);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (2, 'AL', 'Alaska', 'F', NULL, 'john.free@psc.alabama.gov', NULL, 2211497, 32847886);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (3, 'AR', 'Arizona', 'D', 'info@governor.arkansas.gov', 'consumerissues@arkansas.org', NULL, 1374238, 19087597);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (4, 'AZ', 'Arkansas', 'C', 'azgov@azgov.com', NULL, NULL, 2867418, 34476376);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (5, 'CA', 'California', 'A', 'governor@governor.ca.gov', NULL, NULL, 14110761, 89059042);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (6, 'CO', 'Colorado', 'A', 'Governor.polis@state.co.us', NULL, NULL, 2321459, 19086993);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (7, 'CT', 'Connecticut', 'A', 'Governor.Rell@po.state.ct.us', NULL, NULL, 1512363, 12843176);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (8, 'DC', 'Washington DC', 'A', NULL, NULL, NULL, 265924, 2284987);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (9, 'DE', 'Delaware', 'B', 'jcarney@state.de.us', NULL, NULL, 434126, 5041549);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (10, 'FL', 'Florida', 'C', 'Ron.DeSantis@myflorida.com', NULL, NULL, 9403116, 125300441);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (11, 'GA', 'Georgia', 'D', 'georgia.governor@gov.state.ga.us', NULL, NULL, 4318851, 59224428);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (12, 'HI', 'Hawaii', 'B', 'gov@gov.state.hi.us', NULL, NULL, 450721, 2710605);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (13, 'IA', 'Idaho', 'C', NULL, NULL, NULL, 1341456, 14400940);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (14, 'ID', 'Illinois', 'D', NULL, NULL, NULL, 726975, 8178074);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (15, 'IL', 'Indiana', 'B', 'governor@state.il.us', NULL, NULL, 5274278, 47036972);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (16, 'IN', 'Iowa', 'C', 'EHolcomg@state.n.us', NULL, NULL, 2800195, 33779557);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (17, 'KS', 'Kansas', 'F', 'Constituent@governor.wpo.state.ks.us', NULL, NULL, 1219892, 13741099);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (18, 'KY', 'Kentucky', 'F', 'governor@mail.state.ky.us', NULL, NULL, 1966517, 27532177);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (19, 'LA', 'Louisiana', 'F', 'lagov@linknet.net', NULL, NULL, 2059502, 31720591);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (20, 'MA', 'Maine', 'A', 'GOffice@state.ma.us', NULL, NULL, 2621532, 18811049);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (21, 'MD', 'Maryland', 'A', NULL, NULL, NULL, 2362136, 27894485);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (22, 'ME', 'Massachusetts', 'C', 'governor@state.me.us', NULL, NULL, 723682, 4896533);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (23, 'MI', 'Michigan', 'F', NULL, NULL, NULL, 4331640, 34887079);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (24, 'MN', 'Minnesota', 'A', 'tim.walz@state.mn.us', 'consumer.puc@state.mn.us', 'consumer.protection@state.mn.us', 2376211, 22432917);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (25, 'MO', 'Mississippi', 'C', 'mogov@mail.mo.gov', NULL, NULL, 2733986, 36716412);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (26, 'MS', 'Missouri', 'F', NULL, NULL, NULL, 1281915, 19229336);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (27, 'MT', 'Montana', 'C', NULL, NULL, NULL, 502129, 5080988);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (28, 'NC', 'Nebraska', 'C', 'governor.office@governor.ncmail.net', NULL, NULL, 4498644, 61009429);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (29, 'ND', 'Nevada', 'F', 'governor@state.nd.us', NULL, NULL, 374816, 4989431);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (30, 'NE', 'New Hampshire', 'D', 'jodee@mail.state.ne.us', NULL, NULL, 821507, 10096659);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (31, 'NH', 'New Jersey', 'A', NULL, NULL, NULL, 625750, 4576746);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (32, 'NJ', 'New Mexico', 'A', NULL, NULL, NULL, 3600957, 29305540);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (33, 'NM', 'New York', 'B', 'gov@gov.state.nm.us', NULL, NULL, 880508, 6744639);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (34, 'NV', 'North Carolina', 'B', 'governor@govmail.state.nv.us', NULL, NULL, 1197178, 13386525);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (35, 'NY', 'North Dakota', 'A', 'gov.cuomo@chamber.state.ny.us', NULL, NULL, 7101931, 51033008);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (36, 'OH', 'Ohio', 'C', NULL, NULL, NULL, 4467198, 49268444);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (37, 'OK', 'Oklahoma', 'F', NULL, NULL, NULL, 1713922, 23541227);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (38, 'OR', 'Oregon', 'B', NULL, NULL, NULL, 1748595, 18862728);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (39, 'PA', 'Pennsylvania', 'C', 'governor@state.pa.us', NULL, NULL, 5322708, 54829560);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (40, 'RI', 'Rhode Island', 'A', 'rigov@gov.state.ri.us', NULL, NULL, 437618, 3041032);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (41, 'SC', 'South Carolina', 'C', 'governor@govoepp.state.sc.us', NULL, NULL, 2286994, 31732512);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (42, 'SD', 'South Dakota', 'F', 'sdgov@gov.state.sd.us', NULL, NULL, 391339, 4894563);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (43, 'TN', 'Tennessee', 'F', 'bill.lee@state.tn.us', NULL, NULL, 2882992, 44381957);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (44, 'TX', 'Texas', 'C', 'governor@state.tx.us', NULL, NULL, 11074754, 156206367);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (45, 'UT', 'Utah', 'D', 'governor@utah.gov', NULL, NULL, 1062623, 9448637);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (46, 'VA', 'Vermont', 'D', NULL, NULL, NULL, 3426471, 47886897);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (47, 'VT', 'Virginia', 'B', 'pshumlin@state.vt.us', NULL, NULL, 307509, 2051388);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (48, 'WA', 'Washington', 'C', 'Governor.Gregoire@Governor.wa.gov', NULL, NULL, 3056825, 35072781);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (49, 'WI', 'Wisconsin', 'C', 'wisgov@mail.state.wi.us', NULL, NULL, 2668462, 22157659);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (50, 'WV', 'West Virginia', 'D', 'governor@state.wv.us', NULL, NULL, 850158, 11587335);
INSERT INTO "state" (id, state_abv, state_name, state_grade, gov_email, puc, doc, resident_count, resident_mwh) VALUES (51, 'WY', 'Wyoming', 'D', 'Governor@missc.state.wy.us', NULL, NULL, 261192, 2637424);