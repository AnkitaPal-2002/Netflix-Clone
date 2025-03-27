import express from 'express';
import {login, signup, logout, } from '../controllers/User/auth.controllers.js';
import { adminRegister, adminLogin, adminLogout } from '../controllers/Admin/auth.controllers.js';

const router = express.Router();

// Define API endpoints here
router.post('/login', login);

router.post('/signup', signup);

router.post('/logout', logout);

router.get('/authCheck', protectRoute, authCheck);

router.post('/admin/register', adminRegister);

router.post('/admin/login', adminLogin);

router.post('/admin/logout', adminLogout);





export default router;