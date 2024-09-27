import express from "express";
import { authenticateAdmin, authenticateUser } from "../middleware";
import { addTrain, checkAvailability } from "../controllers/train";

const router = express.Router();

router.post('/add-train', authenticateAdmin, addTrain);
router.get('/availability', authenticateUser, checkAvailability);