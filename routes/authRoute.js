import express  from 'express';
import {registerController,loginController,testController} from '../controllers/authController.js';
//router object
const router=express.Router();

//routing
//Register||Method POST
router.post('/register',registerController);
//login || Method Post 
router.post('/login',loginController);

// test route 
router.get('/test',testController);
export default router;