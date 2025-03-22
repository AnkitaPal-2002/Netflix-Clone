import mongoose from "mongoose";

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

}, {timestamps: true});

export const User = mongoose.model("User", userSchema);