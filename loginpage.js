const express = require("express")
const mongoose = require("mongoose")
const app = express();

app.use(express.json());
mongoose.connect("mongodb+srv://sruthinrayella:alV0hXUKm5KcjNVP@cluster0.e9p0old.mongodb.net/");

const User = mongoose.model('Details',{
    username: String,
    password: String,
    email: String
});
app.post("/loginuser",function(req,res){
const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    
    const user = new User({
        username:username,
        password:password,
        email:email
    })
    user.save();
    res.json({
        msg : "done"
    })
});



app.listen(3000);