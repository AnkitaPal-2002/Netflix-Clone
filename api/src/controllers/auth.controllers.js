import { generateTokenAndSetCookie } from "../utils/generateTokens.js";
import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export async function login(req, res){
    res.send("Login Route");
}

export async function signup(req, res){
    try{
        const {email, password, username} = req.body;

        if(!email || !password || !username){
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            })

        }

        const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(!strictEmailRegex.test(email)){
            return res.status(400).json({
                success: false,
                message: "Invalid email format"
            })
        }

        if(password.length<8){
            return res.status(400).json({
                success: false,
                message: "Password must be at least 8 characters long"
            })
        }

        const existingUserBYEmail = await User.findOne({email: email})

        if(existingUserBYEmail){
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            })
        }

        const existingUserByUsername = await User.findOne({username: username})

        if(existingUserByUsername){
            return res.status(400).json({
                success: false,
                message: "Username already exists"
            })
        }

        // Hash the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

        const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

        const newUser = new User({
            email: email,
            password: hashedPassword,
            username: username,
            image: image
        })

        //postman test

      
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            return res.status(200).json({
                success: true,
                message: "User registered successfully",
                user: newUser
            })

        

        
        



    }catch(e){
        console.error(e);
        res.status(500).send("Server Error");
    }
}

export async function logout(req, res){
    try{
        res.clearCookie("jwt-netflix");
        return res.status(200).json({
            success: true,
            message: "Logged out successfully"
        })

    }catch(e){
        console.log("Error in logout controller", e.message);
        return res.status(500).json({
            success: false,
            message: "Server Error"
        })
        
    }
}