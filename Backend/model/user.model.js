const mongooess = require("mongoose")

const userSchema = new mongooess.Schema({

    fullName: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
},
{
    timestamps: true
}
)

 const userModel = mongooess.model("UserRegistered" , userSchema)
 module.exports = userModel