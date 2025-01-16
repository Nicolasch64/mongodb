import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	id: Number,
	name: String,
	email: String,
	age: Number,
	adress: String,
	telephone: Number,
});

const User = mongoose.model("User", userSchema);

export default User;
