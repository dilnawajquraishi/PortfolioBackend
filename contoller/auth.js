const usermodel=require('../model/user')
const bcryptjs = require('bcryptjs');

// User registration
let userregister = async (req, res) => {
    let { name, email, password, confirmpassword, address, gender } = req.body;
    
    try {
        let finduser = await usermodel.findOne({ email: email });
        if (finduser) {
            return res.status(201).json({ success: false, msg: "User already exists!" });
        }
        
        if (password !== confirmpassword) {
            return res.status(400).json({ success: false, message: "Passwords do not match" });
        }

        const salt = bcryptjs.genSaltSync(10);
        const hashPassword = bcryptjs.hashSync(password, salt);

        let details = await usermodel.create({
            name: name,
            email: email,
            password: hashPassword,
            confirmpassword: hashPassword,
            gender: gender,
            address: address,
            number:number
        });

        return res.status(201).json({ success: true, message: "User created successfully", details });
        
    } catch (error) {
        return res.status(500).json({ success: false, msg: "Error in creating user", error: error.message });
    }
};

// Get all users
let getUser = async (req, res) => {
    try {
        let allUsers = await usermodel.find({});
        res.status(200).json({ success: true, users: allUsers });
    } catch (error) {
        res.status(500).json({ success: false, error: "An error occurred while fetching users." });
    }
};

// Update user
let update = async (req, res) => {
    let _id = req.params._id;
    let { name, email, password, confirmpassword, address, number, gender } = req.body;

    try {
        let findUser = await usermodel.findById({_id:_id});
        if (!findUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if (password !== confirmpassword) {
            return res.status(400).json({ success: false, message: "Passwords do not match" });
        }

        const salt = bcryptjs.genSaltSync(10);
        const hashPassword = bcryptjs.hashSync(password, salt);

        findUser.name = name;
        findUser.email = email;
        findUser.password = hashPassword;
        findUser.confirmpassword = hashPassword;
        findUser.address = address;
        findUser.gender = gender;
        findUser.number = number;

        await findUser.save();

        res.status(200).json({ success: true, message: "Update successful", findUser });
        
    } catch (error) {
        res.status(500).json({ success: false, error: "An error occurred during the update process", message: error.message });
    }
};

module.exports = {
    userregister,
    getUser,
    update
};
