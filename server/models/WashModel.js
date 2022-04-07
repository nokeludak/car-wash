const mongoose = require("mongoose")


const WashSchema = new mongoose.Schema(
    {
        username: {type: mongoose.Types.ObjectId, ref: "User"},
        washType: {type: String, required: true, unique: true},
        price: {type: Number, required: true},
        discount: {type: Boolean, default: false}
        

        
        

    },
    { timestamps: true }
)

module.exports = mongoose.model("Wash", WashSchema)