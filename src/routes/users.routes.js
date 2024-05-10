import express from 'express';
import * as userController from '../controllers/users.controller.js';

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/vaccinated-slot', userController.createVaccineSlots);

export default router;
