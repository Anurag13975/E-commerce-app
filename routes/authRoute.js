import express from 'express';
import {
  loginController,
  registerController,
  testController,
} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// routing
// REGISTER || method=POST
router.post('/register', registerController);

// LOGIN || method=POST
router.post('/login', loginController);

// test routes
router.get('/test', requireSignIn, isAdmin, testController);

export default router;
