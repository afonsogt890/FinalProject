import express from "express";
import asyncHandler from "express-async-handler";
import userData from "../userData.js";
import Users from "../../../models/user.js";

const userRouter = express.Router();


userRouter.post('/login', asyncHandler(async (req,res) => {
    const {email, password} = req.body
    const user = await Users.findOne({email})

    //TO DO: ADD PASSWORD
    if(user)
    {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
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