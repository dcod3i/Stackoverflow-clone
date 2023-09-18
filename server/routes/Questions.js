import express from "express";

import { AskQuestion } from '../controllers/Questions.js'
import { getAllquestions } from '../controllers/Questions.js'
import auth from "../models/auth.js";

const router = express.Router()

router.post('/Ask', AskQuestion)
router.get('/get', getAllquestions)

export default router;