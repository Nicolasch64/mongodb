import express from "express";
import userRoutes from "./userRouter.js";
import mongoose from "mongoose";
const app = express();

const port = 3001;

app.use(express.json());

app.use("/user", userRoutes);

mongoose
	.connect("mongodb://localhost:27017/nicolaschapelle", {
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
