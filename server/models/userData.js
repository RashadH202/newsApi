const mongoose = require("mongoose")

//This is the format your data interacts with mongoose Database.

const userDataSchema = new mongoose.Schema({
    newsAuthor: {
        type: String,
        required: true,
    },
    newsTitle: {
        type: String,
        required: true,
    },
    newsDesc: {
        type: String,
        required: true,
    },
    newsUrl: {
        type: String,
        required: true,
    },
    newsImg: {
        type: String,
        required: true,
    },
    newsPubdate: {
        type: String,
        required: true,
    },
    newsContent: {
        type: String,
        required: true,
    }
})

const Data = mongoose.model("Data", userDataSchema )
module.exports = Data