import mongoose from "mongoose"

export const connection = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
    }catch(err){
        throw new Error("Connection failed!");
    }   
}