import mongoose from "mongoose";
import bycrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    name: {
        type:String,
        require:true
    },

    password: {
        type:String,
        require:true
    },

    email: {
        type:String,
        require:true,
        unique:true
    },

    profpic: {
        type:String,
        default: "https://images-ext-1.discordapp.net/external/tV7RamonlsYO33VIfxrh6wwPK26gR3nOPA9aXBN-PPo/https/static-cdn.jtvnw.net/ttv-boxart/66082-144x192.jpg"
    },

    desc: {
        type:String,
        default: "This user hasn't wrote anything yet..."
    },

    admin: {
        type:Boolean,
        default: false
    },

    languages: [
        {
            type:String,
            default: "Portuguese",
            language: {
                type: mongoose.Schema.Types.ObjectId,
                ref:"Languages"
            }
        }
    ]
})

userSchema.methods.matchPassword = async function(pass){
    return await bycrypt.compare(pass, this.password);
}

userSchema.pre("save", async function(next){
    if (!this.isModified("password")) next();
    const salt = await bycrypt.genSalt(10);
    this.password = await bycrypt.hash(this.password, salt);
})


const Users = mongoose.model("Users", userSchema);
export default Users;