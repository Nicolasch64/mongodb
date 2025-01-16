import express from "express";
import User from "./modeles/User.js";

const router = express.Router();

router.post("/", (req, res) => {
	const { name, email, age, adress, telephone } = req.body;

	const newUser = new User({
		name,
		email,
		age,
		adress,
		telephone,
	});

	newUser
		.save()
		.then(() => {
			res.status(201).send("Utilisateur ajouté avec succès!");
		})
		.catch((err) => {
			res.status(400).send("Erreur lors de l'ajout de l'utilisateur: " + err);
		});
});

router.get("/:id", (req, res) => {
	User.findById(req.params.id)
		.then((user) => {
			if (!user) {
				return res.status(404).send("Utilisateur non trouvé");
			}
			res.status(200).json(user);
		})
		.catch((err) => {
			res
				.status(500)
				.send("Erreur lors de la récupération de l'utilisateur: " + err);
		});
});

export default router;
