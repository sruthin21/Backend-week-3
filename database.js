const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sruthinrayella:alV0hXUKm5KcjNVP@cluster0.e9p0old.mongodb.net/")
const User = mongoose.model('Users',{ 
    name: String,
    email: String,
    password: String
});
const user = new User({
    name: "sruthin",
    email:"sruthin.rayella@gmail.com",
    password:"123456"
});
user.save();