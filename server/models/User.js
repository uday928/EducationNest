import express from 'express'
import mongoose, { mongo } from 'mongoose'

// Structure of DB
const userSchema=new mongoose.Schema(
    {   
    //  name  type          requriment
        _id: {type: String, required: true},
        name:{type: String, required: true},
        email:{type:String, required:true},
        imageUrl:{type: String,required:true},
        enrolledCourses:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course'
            }
        ],
        // enrolled courses is array so []
    }, {timestamps: true});

const User=mongoose.model('User',userSchema)

export default User 