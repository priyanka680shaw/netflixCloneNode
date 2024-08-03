const userModel = require("../model/user.model")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

//login

const userloginController = async (req, res) => {
    try {
        console.log("login", req.body)
        //if email or password is missing
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(401).json({
                status: false,
                message: "Invalid Data"
            })
        }
        //if email is invalid
        const user = await userModel.findOne({ email })
        if (!email) {
            return res.status(401).json({
                status: false,
                message: "Invalid Email or Password !"
            })
        }
        //if password invalid 
        const isMatch = await bcryptjs.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({
                status: false,
                message: " Invalid Email or Password !"
            })
        }
        //if both email and password matches so create a tokenn for the user
        //creating jwt token for valid user

        // Secret key
        const secretKey = 'piku040399';

        // Payload
        const payload = {
            name:  user.fullName,
            address : user.address
        };

        // Generate token
        //const token = jwt.sign(payload, secretKey, { algorithm: 'HS256', expiresIn: '1d' });
        const token = jwt.sign(payload , secretKey , {expiresIn : '1d'} )

        //console.log('Generated Token:', token);
        // return res.status(200).json({
        //     message  :"User Varified !",
        //     status : true
        // })

        return res.status(200).cookie("token" , token , {httpOnly  :true}).json({
            succcess: true,
            messege: `Welcome to the Netflix ${user.fullName}`,
            user  : user
        })

    }
    catch (err) {
        console.log("Error", err)
    }
}

//LogOut

const userLogoutController = (req , res)=>{
    console.log("useLog out")
    return res.status(200).cookie("token " , " " , {expiresIn : new Date(Date.now()) , httpOnly:true}).json({
        status  :true,
        message : "Logout Successfully !"
    })
}


//registreation
const userRegisterController = async (req, res) => {
    try {
        console.log(req.body)
        const { fullName, address, email, password } = req.body;
        //if any user data is  missing
        if (!fullName || !email || !address || !password) {
            return res.status(401).json({
                success: false,
                messege: "Invalid Data !"
            })
        }
        //is user exist or not 
        const userCheack = await userModel.findOne({ email })
        if (userCheack) {
            return res.status(401).json({
                success: false,
                messege: "Already exist user with  this email!"
            })
        }
        //Hasing Alogorithm
        const userPassword = await bcryptjs.hash(password, 16)
        console.log("userPassword", userPassword)
        //user create in DB
        const userCreated = await userModel.create({
            fullName,
            address,
            email,
            password: userPassword
        })
        return res.status(200).json({
            succcess: true,
            messege: "usre Account created Successfully !"
        })
       
    }
    catch (err) {
        console.log("error", err)
    }

}

const userController = {
    userRegisterController , userloginController , userLogoutController

}
module.exports = userController;