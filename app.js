import express from "express";
import userRoutes from "./userRouter.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const port = 3001;

app.use(express.json());

app.use("/user", userRoutes);

const mongoUri =
	process.env.MONGO_URI || "mongodb://localhost:27017/nicolaschapelle";

mongoose
	.connect(mongoUri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connexion à MongoDB réussie");
	})
	.catch((err) => {
		console.error("Erreur de connexion à MongoDB:", err);
	});

app.listen(port, () => {
	console.log(`server up on http/localhost:${port}`);
});
