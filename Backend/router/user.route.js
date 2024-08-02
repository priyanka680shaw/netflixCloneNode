const express = require("express");

const router = express.Router()
const userController = require("../controller/user.controller")
router.post("/register" , userController.userRegisterController)
router.post("/login" , userController.userloginController)
router.get("/logout" , userController.userLogoutController)

module.exports = router;