const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};
const connectDB = async () => {
	await mongoose
		.connect(
			process.env.MONGO_URI,
			options
		)

		.then((conn) => {
			console.log(
				`Connected to Mongo! Database name: ${conn.connections[0].name}`
			);
		})
		.catch((err) =>
			console.error(
				"Error connecting to mongo",
				err
			)
		);
};

module.exports = connectDB;
