import express from 'express';
import multer from 'multer';
import User from '../models/userModel.js';
import { addUserController, validateUser } from '../controllers/userController.js';

const router = express.Router();

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  
  const upload = multer({ 
        storage: storage,
        limits: {
          fileSize: 1024 * 1024 * 5, // 5MB
          parameterLimit: 10000,
          fields: [
            { name: "photo", maxCount: 1 }
          ]
        }
      });

// GET all users
router.get('/get', async (req, res) => {
    const users = await User.find();
    console.log("users", users);
    res.send(users);
});

// POST a new user with photo upload
router.post(
    "/add",
    upload.fields([
      { name: "photo", maxCount: 1 }
    ]),
    addUserController 
  );


router.get("/validate/:mobile",validateUser)

export default router; // Use ES module export
