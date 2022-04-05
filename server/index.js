const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config()
const customerRoute = require("./routes/customer.route")
const cors = require("cors")


const app = express();

app.use(cors())

app.use(express.json())
app.use("/customer", customerRoute)


mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("DB is connected"))
.catch((err) => {
    console.log(err)
})



app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})
