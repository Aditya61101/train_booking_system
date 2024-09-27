import express from "express";
import dotenv from "dotenv";
import compression from "compression";
import cors from "cors";
import rateLimit from 'express-rate-limit';

const app = express();
const port = process.env.PORT || 5000;
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use(limiter);
app.use(express.json());
app.use(compression({
        level: 6,
}));
app.use(cors());

//routes
app.get("/", (_, res) => {
    res.send("Welcome to the API");
});
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/booking", require("./routes/booking"));

app.listen(port, () => `Server running on port ${port} 🔥`);