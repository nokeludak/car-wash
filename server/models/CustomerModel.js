const mongoose = require("mongoose")


const CustomerSchema = new mongoose.Schema(
    {
        username: {type: String, required: true, unique:true},
        name: {type: String, required: true},
        lastName: {type: String, required: true},
        car: {type: String, required: true},
        
        

    },
    { timestamps: true }
)

module.exports = mongoose.model("Customer", CustomerSchema);