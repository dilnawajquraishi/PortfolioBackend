const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

const database = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // No options needed
        // await mongoose.connect("mongodb://0.0.0.0:27017/cvv")
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to database:", error.message);
    }
};

module.exports = database;







// const mongoose = require('mongoose');
// require('dotenv').config()

// const connectToDb = async()=>{
//     // mongoose.connect('mongodb://0.0.0.0:27017/blogApplication')
//    await mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('connected to mongodb successfully!'))
//   .catch(()=>console.log("error in connecting mongodb"))
// }

// module.exports = connectToDb;



// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config(); // Load environment variables from .env file

// const database = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI); // No options needed
//         // await mongoose.connect('mongodb://127.0.0.1:27017/result'); // No options needed

//         console.log("Database connected successfully");
//     } catch (error) {
//         // console.error("Error connecting to database:", error.message);
//         console.log("error inreating mongdb")
//         // process.exit(1); // Exit process with failure
//     }
// };

// module.exports = database;



