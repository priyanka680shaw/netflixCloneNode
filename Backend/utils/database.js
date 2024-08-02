const mongooess = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({
    path  : "../.env"
})
const dataBaseConnection = () => {
    mongooess.connect(process.MONGO_URI)
    .then(() => {
        console.log("Mongo ddb connection Successfully !")
    })
    .catch((err) => {
        console.log("error", err)
    })
}
module.exports =  dataBaseConnection;