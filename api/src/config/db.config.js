import mongoose from 'mongoose';
import { ENV_VARS } from './envVars.js';

export const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
        console.log(`MongoDB connected successfully: ${conn.connection.host}`);


    }catch(e){
        console.error("Error: "+e.message);
        process.exit(1); // 1 means there was an error, 0 means success
    }
}
