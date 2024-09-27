import express from "express";
import { body } from "express-validator";
import { loginUsers, registerUsers } from "../controllers/auth";


const router = express.Router();

router.post(
    "/register",
    body("username").isString(),
    body("password").isLength({ min: 6 }),
    registerUsers
);

router.post(
    "/login",
    body("username").isString(),
    body("password").isLength({ min: 6 }),
    loginUsers
);
