import mongoose from "mongoose";

//Estabelecer uma conexão ao MongoDB

const connectdb = async() => {
    const clientkey = "mongodb+srv://afonsolanca:LnlkftyYjnRtJH00@project.idumupc.mongodb.net/?retryWrites=true&w=majority"

    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(clientkey, () => {console.log("Connected to database!")},{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (Error) {
        console.log(`Error: ${Error.message}`)
        process.exit(1);
    }
}

export default connectdb;

