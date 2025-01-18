import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./userRouter.js";
import User from "./modeles/User.js"; // Assure-toi que le chemin et l'extension sont corrects

dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());
app.use("/user", userRoutes);

const mongoUri =
	process.env.MONGO_URI || "mongodb://localhost:27017/nicolaschapelle";

mongoose
	.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Connexion à MongoDB réussie");
	})
	.catch((err) => {
		console.error("Erreur de connexion à MongoDB:", err);
	});

const testUser = new User({
	id: 1,
	name: "johnny",
	email: "johnny@yahoo.fr",
	age: 55,
	adress: "11 rue de la lourde",
	telephone: 3565448,
});

testUser
	.save()
	.then(() => {
		console.log("Utilisateur ajouté avec succès!");
	})
	.catch((err) => {
		console.error("Erreur lors de l'ajout de l'utilisateur:", err);
	});

app.listen(port, () => {
	console.log(`Server up on http://localhost:${port}`);
});
