import express from 'express';
import { test2 } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test2);

export default router;
