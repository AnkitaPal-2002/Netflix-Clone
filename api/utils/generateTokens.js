import jwt from 'jsonwebtoken';
import { ENV_VARS } from '../src/config/envVars.js';

export const generateTokenAndSetCookie = (userId, res) =>{
    const token = jwt.sign({userId}, ENV_VARS.JWT_SECRET, { expiresIn: "7d"});

    res.cookie("jwt-netflix", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in MS
        httpOnly: true, // prevents XSS attacks cross-site scripting attacks, make it not be accessed by JS
        sameSite:"strict", // CSRF attacks cross-site request forgery attacks
        secure: ENV_VARS.NODE_ENV !== "development" // cookie will only be set in https in production

    });

    return token;
}

