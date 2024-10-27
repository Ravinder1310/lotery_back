import User from "../models/userModel.js"
import dotenv from "dotenv";

dotenv.config();


export const getAllUsers = async (req,res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error)
  }
}


export const validateUser = async (req,res) => {
  try {
    const {mobile} = req.params;
    console.log(mobile);
    

    const user = await User.findOne({mobile});

    if(!user){
     return res.status(201).send("User not found")
    }

    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    
    res.status(500).send(error)
  }
}

export const addUserController = async (req, res) => {
  try {
    console.log("=============================>",req.body);
    
    const { name, mobile } =
      req.body;
    const {photo} = req.files

    // validation
    if (!name) {
      return res.status(400).send({ error: "Name is required" });
    }
    if (!mobile) {
      return res.status(400).send({ error: "Mobile is required" });
    }
    if (!photo) {
      return res.status(400).send({ error: "Photo is required" });
    }
    // create product
    const newUser = new User({
      name,
      mobile,
      photo: photo[0].path
    });

    // save product to database
    await newUser.save();

    // send response
    res.status(201).send({
      success: true,
      message: "User created successfully",
      newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: "Error creating user",
    });
  }
};