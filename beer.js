const express = require("express")
const mongoose = require("mongoose")

const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://sruthinrayella:alV0hXUKm5KcjNVP@cluster0.e9p0old.mongodb.net/beers");
const strength = mongoose.model('Beers',{
    Beer_Brand:String,
    Style:String,
    ABV:String
})
app.post("/beers",function(req,res){
    const beer = req.body.beer;
    const style = req.body.style;
    const abv = req.body.abv;

    const user = new strength({
        Beer_Brand:beer,
        Style:style,
        ABV:abv
    })
    user.save()
    res.json({
        msg:"done"
    })
})

app.listen(3000);

