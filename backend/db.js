const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://AKM0261:B5sEI0L9eKrAdsLc@cluster0.mhsjmyw.mongodb.net/")
const todoSchema = mongoose.Schema({
    title : String ,
    description : String,
    completed : Boolean
})
const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo
}