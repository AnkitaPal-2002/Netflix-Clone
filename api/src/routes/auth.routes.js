import express from 'express';
import {login, signup, logout, adminRegister} from '../controllers/auth.controllers.js';

const router = express.Router();

// Define API endpoints here
router.post('/login', login);

router.post('/signup', signup);

router.post('/logout', logout);

router.post('/admin/register', adminRegister);

export default router;