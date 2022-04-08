const { create,  getCustomer,  getAllCustomers, washController } = require("../controllers/customer")

const router = require("express").Router()



router.post("/create", create)
router.get("/:id" , getCustomer)
router.get("/", getAllCustomers)
router.post("/wash", washController)






module.exports = router