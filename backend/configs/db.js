import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connected Done")
    } catch (error) {
        console.log("DB error coming")
    }
}
export default connectDb



