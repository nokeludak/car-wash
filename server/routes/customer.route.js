const { create,  getCustomer,  getAllCustomers, washController } = require("../controllers/customer")

const router = require("express").Router()



router.post("/create", create)
router.get("/:id" , getCustomer)
router.get("/", getAllCustomers)
router.post("/wash/:id", washController)




module.exports = router