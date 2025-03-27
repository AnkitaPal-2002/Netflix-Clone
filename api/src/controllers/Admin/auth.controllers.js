import { generateTokenAndSetCookie } from "../../utils/generateTokens.js";
import { User } from "../../models/user.model.js";
import bcryptjs from "bcryptjs";

export async function adminRegister(req, res){
    try{
        const {username, email, password} = req.body;
        if(!username ||!email ||!password){
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

        const secretCode = req.body.secretcode;
        if(secretCode != 'abcd1234'){
            return res.status(403).json({
                success: false,
                message: "Invalid Secret Code"
            })
        }

        const existingAdmin = await User.findOne({email: email});

        if(existingAdmin){
            return res.status(400).json({
                success: false,
                message: "Admin already exists",
                email: email
            })
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const admin = new User({
            username,
            email,
            password: hashedPassword,
            isAdmin: true
        });

        generateTokenAndSetCookie(admin._id, res);

        await admin.save();
        return res.status(200).json({
            success: true,
            message: "Admin registered successfully",
            user: admin
        })





    }catch(e){
        console.error(e);
        res.status(500).send("Server Error");
    }
    
}

export async function adminLogin(req, res){
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            })
        }

        const existingAdmin = await User.findOne({email: email});

        if(!existingAdmin){
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        const isMatch = await bcryptjs.compare(password, existingAdmin.password);
        if(!isMatch){
            return res.status(401).json({
                success: false,
                message: "Incorrect password"
            })
        }

        if(!existingAdmin.isAdmin){
            return res.status(403).json({
                success: false,
                message: "You are not an admin"
            })
        }

        

        generateTokenAndSetCookie(existingAdmin._id, res);
        return res.status(200).json({
            success: true,
            message: "Admin logged in successfully",
            user: existingAdmin
        })



    }catch(e){
        console.error(e);
        return res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}

export async function adminLogout(req, res){
    try{
        res.clearCookie('jwt-netflix');
        return res.status(200).json({
            success: true,
            message: "Admin logged out successfully"
        })
    }catch(e){
        console.error(e);
        return res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}