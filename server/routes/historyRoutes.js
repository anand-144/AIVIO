// routes/historyRoutes.js
import express from 'express';
import { getUserHistory } from '../controllers/historyController.js';
import userAuth from '../middleware/auth.js';

const router = express.Router();

router.get('/user-history', userAuth, getUserHistory);

export default router;
