import mongoose from "mongoose";

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

    languages: [
        {
            name:{type:String, require:true, unique:true},
            language: {
                type: mongoose.Schema.Types.ObjectId,
                require:true,
                ref:"Languages"
            }
        }
    ]

})