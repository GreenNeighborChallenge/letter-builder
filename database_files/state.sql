CREATE TABLE "state" (
	"id" serial NOT NULL,
	"state" varchar(255),
	"gov_email" varchar(255),
	"puc" varchar(255),
	"DoC" varchar(255),
	CONSTRAINT "state_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('AK', 'governor@gov.state.ak.us', 'rca.mail@alaska.gov', NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('AL', NULL, 'john.free@psc.alabama.gov', NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('AR', 'info@governor.arkansas.gov', 'consumerissues@arkansas.org', NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('AZ', 'azgov@azgov.com', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('CA', 'governor@governor.ca.gov', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('CO', 'Governor.polis@state.co.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('CT', 'Governor.Rell@po.state.ct.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('DC', NULL, NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('DE', 'jcarney@state.de.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('FL', 'Ron.DeSantis@myflorida.com', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('GA', 'georgia.governor@gov.state.ga.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('HI', 'gov@gov.state.hi.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('IA', NULL, NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('ID', NULL, NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('IL', 'governor@state.il.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('IN', 'EHolcomg@state.n.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('KS', 'Constituent@governor.wpo.state.ks.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('KY', 'governor@mail.state.ky.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('LA', 'lagov@linknet.net', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('MA', 'GOffice@state.ma.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('MD', NULL, NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('ME', 'governor@state.me.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('MI', NULL, NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('MN', 'tim.walz@state.mn.us', 'consumer.puc@state.mn.us', 'consumer.protection@state.mn.us');
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('MO', 'mogov@mail.mo.gov', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('MS', NULL, NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('MT', NULL, NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('NC', 'governor.office@governor.ncmail.net', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('ND', 'governor@state.nd.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('NE', 'jodee@mail.state.ne.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('NH', NULL, NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('NJ', NULL, NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('NM', 'gov@gov.state.nm.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('NV', 'governor@govmail.state.nv.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('NY', 'gov.cuomo@chamber.state.ny.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('OH', NULL, NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('OK', NULL, NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('OR', NULL, NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('PA', 'governor@state.pa.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('RI', 'rigov@gov.state.ri.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('SC', 'governor@govoepp.state.sc.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('SD', 'sdgov@gov.state.sd.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('TN', 'bill.lee@state.tn.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('TX', 'governor@state.tx.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('UT', 'governor@utah.gov', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('VA', NULL, NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('VT', 'pshumlin@state.vt.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('WA', 'Governor.Gregoire@Governor.wa.gov', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('WI', 'wisgov@mail.state.wi.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('WV', 'governor@state.wv.us', NULL, NULL);
INSERT INTO public.state ("state", gov_email, puc, "DoC") VALUES ('WY', 'Governor@missc.state.wy.us', NULL, NULL);