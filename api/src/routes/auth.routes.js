import express from 'express';
import {login, signup, logout} from '../controllers/auth.controllers.js';

const router = express.Router();

// Define API endpoints here
router.get('/login', login);

router.get('/signup', signup);

router.get('/logout', logout);

export default router;