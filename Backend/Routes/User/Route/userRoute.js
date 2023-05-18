import express from "express";
import asyncHandler from "express-async-handler";
import userData from "../userData.js";
import Users from "../../../models/user.js";

const userRouter = express.Router();

userRouter.post('/login', asyncHandler(async (req,res) => {
    const {email, password} = req.body
    const user = await Users.findOne({email})

    if(user && (await user.matchPassword(password)))
    {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            admin: user.admin
        });
        console.log("<Route User>: "+ email +" logged in!")
    } else {
        res.status(400)
        throw new Error("Failed Login");
    }
}))

userRouter.post('/register', asyncHandler(async(req, res) => {
    const {name, email, password} = req.body
    const existAcc = await Users.findOne({email})

    if (existAcc){
        res.status(400)
        throw new Error("Existing Account")
    }

    const Account = await Users.create({
        name,
        email,
        password
    })

    if (Account){
        res.json({
            _id: Account._id,
            name: Account.name,
            email: Account.email,
            admin: Account.admin,
            createdAt: Account.createdAt
        });
        console.log("<Route User>: "+ email +" as created a new Account")
    } else {
        res.status(401)
        throw new Error("Invalid Account Info")
    }

}))

userRouter.post("/add", asyncHandler(async (req, res) => {
    await Users.remove({})
    const postUser = await Users.insertMany(userData)
    res.send({ postUser })
    console.log(postUser)
})
)

userRouter.get("/profile/:id", asyncHandler(async (req, res) => {
    const user = await Users.findById(req.params.id)
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            language: user.language,
            desc: user.desc,
            profpic: user.profpic,
            admin: user.admin
        })
        console.log(`<Route Users>: Get User`)
    } else {
        res.status(404);
        throw new Error("User not found");
    }
}))


export default userRouter;