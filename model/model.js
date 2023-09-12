const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		required: [true, "name is required"],
		trim: true,
		maxlength: [
			20,
			"name cannot be more than 20",
		],
	},
});

module.exports = mongoose.model(
	"User",
	UserSchema
);
