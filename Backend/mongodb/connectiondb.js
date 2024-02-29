import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({path: '../.env'});

const connectdb = async() => {
    const clientkey = process.env['clientKey'];

    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(clientkey, () => {console.log("Connected to database!")},{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (Error) {
        console.log(`Error: ${Error.message}`);
        process.exit(1);
    }
}

export default connectdb;
