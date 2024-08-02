const mongoose = require('mongoose');
const colors = require('colors');

const connectToDB = async () => {
    try {
        console.log("mongodb");
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully");

    } catch (e) {
        console.log(`MongoDB Server Issue ${e}`.bgRed.white);
    }
}

module.exports = connectToDB;
