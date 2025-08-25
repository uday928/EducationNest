import { clerkClient } from "@clerk/express";

// Middleware {protect educator route}

export const protectEducator=async(req,res,next)=>{
    try {
        const userId=req.auth.userId
        // Here we have userId
        const response=await clerkClient.users.getUser(userId)
        // In this response will get user
        // now check user public metadata if it contains role: educator or not
        if(response.publicMetadata.role!=="educator"){
            return res.json({success: false,message:"Unauthorized access"})
        }
        next()
    } catch (error) {
        res.json({success: false,message:error.message})
    }
}