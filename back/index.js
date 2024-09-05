import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/router.js";
import session from "express-session";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: { secure: false },
	}),
);

app.use("/", router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
