import express from "express";
import { authenticateUser } from "../middleware";
import { bookTicket, getBooking } from "../controllers/booking";

const router = express.Router();

router.post('/book', authenticateUser, bookTicket);
router.get('/:bookingId', authenticateUser, getBooking);