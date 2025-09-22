const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        mongoose.connect(process.env.BD_SECRET).then(() => {
            console.log("MongoDB Database connected");
        })
    } catch (err) { console.log("DB Connection Error:", err) }
}

module.exports = connectDb;
