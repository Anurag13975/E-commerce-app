import express from 'express';
import { loginController, registerController } from '../controllers/authController.js';

const router = express.Router();

// routing
// REGISTER || method=POST
router.post('/register', registerController);

// LOGIN || method=POST
router.post('/login', loginController);

export default router;
