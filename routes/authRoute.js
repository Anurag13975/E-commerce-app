import express from 'express';
import { registerController } from '../controllers/authController.js';

const router = express.Router();

// routing
// REGISTER || method=POST
router.post('/register', registerController);

export default router;
