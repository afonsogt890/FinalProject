import mongoose from "mongoose";

const languagesSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    }
},{timestamps:true});

const Languages = mongoose.model("Languages", languagesSchema);

export default Languages;