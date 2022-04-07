const { create,  getCustomer,  getAllCustomers } = require("../controllers/customer")

const router = require("express").Router()



router.post("/create", create)
router.get("/:id" , getCustomer)
router.get("/", getAllCustomers)





module.exports = router