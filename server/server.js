
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const adminRouter = require('./routes/admin.router');
const zipRouter = require('./routes/zip.router');

const statesRouter = require('./routes/states.router');
const policyRouter = require('./routes/policy.router');
const repsRouter = require('./routes/reps.router');

const statePoliciesRouter = require ('./routes/statePolicies.router')

const officesRouter = require('./routes/offices.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/zip', zipRouter)
app.use('/api/states', statesRouter);
app.use('/api/policy', policyRouter);
app.use('/api/reps', repsRouter);
app.use('/api/admin', adminRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
