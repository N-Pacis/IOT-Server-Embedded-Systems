import express from 'express'
import { postData } from '../controllers/data.controller.js';
const router = express.Router()

router.post("/data/upload", postData)

export default router;