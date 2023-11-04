import mongoose from 'mongoose';
import colors from 'colors';
const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to  mongoose database host ${conn.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(("bruh there are some error in mongoose: "+error).bgRed.white)
        console.log(process.env.MONGO_URL)
    }

}

export default connectDB;