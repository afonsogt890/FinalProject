import mongoose from "mongoose";

const languagesSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    }
},{timestamps:true});

languagesSchema.set('toObject',{   
    transform: function (doc, ret) {  
       ret.id = ret._id       
       delete ret.__v   
    }
})

const Languages = mongoose.model("Languages", languagesSchema);

export default Languages;