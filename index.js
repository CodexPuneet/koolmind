const express= require("express");
const { connection } = require("./Configs/db");
const { employeeRouter } = require("./Routes/employee.routes");

const app= express();

const cors= require("cors");

app.use(cors({
    origin : "*"
}))

app.use(express.json());

require("dotenv").config();

app.get("/", (req, res)=>{
    res.send("Welcome to Koolmind");
})

app.use("/", employeeRouter);




app.listen(process.env.PORT, async()=>{
    try{
        await connection
        console.log("Connected to database")
    }
    catch(err){
        console.log(err)
        console.log("Error while connecting to DB")
    }
    console.log(`Running on port ${process.env.PORT}`)
});