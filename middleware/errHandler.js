const {
	CustomError,
} = require("../errors/customError");

const notFound = (req, res) =>
	res.status(404).send("Route does not exist");
const errorHandler = (err, req, res, next) => {
	if (err instanceof CustomError) {
		return res
			.status(err.statusCode)
			.json({ error: err.message });
	} else if (
		err.message.startsWith(
			"Cast to ObjectId failed"
		)
	) {
		res.status(400);
		return res.send("Invalid Blog ID");
	}
	return res
		.status(500)
		.json({ msg: err.message });
};
module.exports = { notFound, errorHandler };
