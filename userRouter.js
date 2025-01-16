import express from "express";
const router = express.Router();

router.get("/", (req, res, next) => {
	res.send("vous etes sur les routes");
});

router.get("/:id", (req, res, next) => {
	res.send("tu chers un user:" + req.params.id);
});

export default router;
