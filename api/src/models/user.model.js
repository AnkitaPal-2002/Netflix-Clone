import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    image:{
        type:String,
        default: ""
    },
    searchHistory:{
        type: Array,
        default: []
    },
    isAdmin:{
        type: Boolean,
        default: false // default value is false for regular users
    }

}, {timestamps: true});

userSchema.plugin(passportLocalMongoose); // adds username and password fields to the schema

export const User = mongoose.model("User", userSchema);