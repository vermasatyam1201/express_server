const express = require("express");
const mongoose = require("mongoose");
const app =express();
const userRouter=require("./routes/userRouter")
const carapp=require("./routes/CarApp")
const dotenv=require("dotenv")
const cors=require("cors")
dotenv.config({path:"./env/.env"})
app.use(express.json())
app.use(cors())

app.use("/users",userRouter);
app.use("/app",carapp)

app.get("/",(req,res)=>{
    res.send("Car API")
})

const PORT=process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen (PORT, ()=>{
        console.log("Connected");
        console.log("Server started on port no."+PORT);
    });
})
.catch((error) => {
    console.log(error);
})

