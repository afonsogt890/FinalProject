import bycrypt from "bcryptjs";

const userData = [
    {
        name: "MiguelPaixa",
        password: bycrypt.hashSync("adeus321", 10),
        email: "compaixao@gmail.com",
        desc: "Eu curto de jogar LoL e Valorant",
        languages: ["Portuguese","Spanish"]
    },
    {
        name: "Aboraheixa",
        password: bycrypt.hashSync("4618921748", 10),
        email: "aboraheixa@gmail.com",
        desc: "Yo, tenho 20 anos e so quero jogar com PTs",
        languages: ["Spanish","Portuguese"]
    },
    {
        name: "KillerWhale",
        password: bycrypt.hashSync("wahler354", 10),
        email: "bigwhale@gmail.com",
        desc: "HEY!!!! LETS GO PLAY SOME VALO, SHALL WE? CHEERS MY FRIENDS!!!",
        languages: ["English","Portuguese"]
    },
    {
        name: "FrenchToast",
        password: bycrypt.hashSync("baguette123", 10),
        email: "ouibaguette@gmail.com",
        desc: "Oui, je sui francé, lol!!!",
        languages: ["French","Portuguese"],
        admin: true
    },

];

export default userData;