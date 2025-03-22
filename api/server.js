import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import authRoutes from './src/routes/auth.routes.js';
import { ENV_VARS } from './src/config/envVars.js';
import { connectDB } from './src/config/db.config.js';

connectDB();  // Connect to MongoDB database

const app = express();
const PORT = ENV_VARS.PORT;


app.use(express.json()); // will allow us to parse req.body

app.get('/',(req, res)=>{
    res.send('Server is ready');
});

app.use('/api/v1/auth', authRoutes);

app.listen(PORT,()=>{
    console.log('Server is running on port',PORT);
})

//console.log("MONGO_URI : ",process.env.MONGO_URI);


