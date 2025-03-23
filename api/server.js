import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';


dotenv.config();

import authRoutes from './src/routes/auth.routes.js';
import { ENV_VARS } from './src/config/envVars.js';
import { connectDB } from './src/config/db.config.js';



connectDB();  // Connect to MongoDB database

const app = express();
app.set('view engine', 'hbs');
const PORT = ENV_VARS.PORT;


app.use(express.json()); // will allow us to parse req.body

app.get('/',(req, res)=>{
    res.send('Server is ready');
});

app.use('/api/v1/auth', authRoutes);

import { User } from './src/models/user.model.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';
app.use(session({
    secret: 'abcd1234',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongoUrl: ENV_VARS.MONGO_URI}),
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

// import passport from 'passport';
// import { Strategy as LocalStrategy } from 'passport-local';

// app.use(passport.initialize());
// app.use(passport.session());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));


app.listen(PORT,()=>{
    console.log('Server is running on port',PORT);
})




