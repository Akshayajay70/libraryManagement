import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config()
const connectDb = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        if(mongoUri) {
            await mongoose.connect(mongoUri);
            console.log('Connected to MongoDB');
        } else {
            console.log("DB Connection url not found")
        }

    } catch (error: any) {
        console.log('MongoDB connection error:', error);
        process.exit(1);
    }
}

export default connectDb;