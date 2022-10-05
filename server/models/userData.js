const mongoose = require("mongoose")

//This is the format your data interacts with mongoose Database.

const userDataSchema = new mongoose.Schema({
    dataName: {
        type: String,
        required: true,
    },
    dataDesc: {
        type: String,
        required: true,
    }
})

const Data = mongoose.model("Data", userDataSchema )
module.exports = Data