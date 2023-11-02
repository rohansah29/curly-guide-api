const mongoose=require("mongoose");
require("dotenv").config()

const connection=mongoose.connect("mongodb+srv://00rohansah00kr:rohan%22rj07@cluster0.ydojkd9.mongodb.net/blogapp?retryWrites=true&w=majority")


module.exports={
    connection
}
