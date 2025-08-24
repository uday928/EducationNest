import mongoose  from "mongoose";

// connect project with mongoDB

const connectDB=async()=>{
    mongoose.connection.on('connected',()=>{
        console.log("Database connected")
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/LMS_Website`)
}

export default connectDB;