import mongoose, { mongo } from "mongoose";

const gamesSchema = mongoose.Schema({
    name: {
        type:String,
        require:true
    },

    image: {
        type:String,
        default: "https://images-ext-1.discordapp.net/external/tV7RamonlsYO33VIfxrh6wwPK26gR3nOPA9aXBN-PPo/https/static-cdn.jtvnw.net/ttv-boxart/66082-144x192.jpg"
    },

    desc: {
        type:String,
        default: "This games has no description for now..."
    }
},{timestamps:true});

const Games = mongoose.model("Games", gamesSchema);

export default Games;