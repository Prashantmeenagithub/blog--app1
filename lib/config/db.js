import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://meenaprashant:meena123@cluster0.zkd328z.mongodb.net/blog-app');
    console.log("DB Connected");
}