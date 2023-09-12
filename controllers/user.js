const User = require("../model/model.js");
const asyncWrapper = require("../middleware/asyncWrapper");
const {
	createCustomError,
} = require("../errors/customError");

const getAllUsers = asyncWrapper(
	async (req, res) => {
		const users = await User.find({});
		res.status(200).json({ users });
	}
);
const createUser = asyncWrapper(
	async (req, res) => {
		const user = await User.create(req.body);
		res
			.status(201)
			.json({ id: user._id, name: user.name });
	}
);

const getUser = asyncWrapper(
	async (req, res, next) => {
		const { id: userID } = req.params;
		const user = await User.findOne({
			_id: userID,
		});
		if (!user) {
			return next(
				createCustomError(
					`No user with id of ${userID}`,
					404
				)
			);
		}
		res
			.status(200)
			.json({ id: user._id, name: user.name });
	}
);
const updateUser = async (req, res, next) => {
	try {
		const { id: userID } = req.params;
		const user = await User.findOneAndUpdate(
			{ _id: userID },
			req.body,
			{ new: true, runValidators: true }
		);
		if (!user) {
			return next(
				createCustomError(
					`No User with id of ${userID}`,
					404
				)
			);
		}

		res.status(200).json({ name: user.name });
		return;
	} catch (err) {
		next(err);
	}
};

const deleteUser = asyncWrapper(
	async (req, res, next) => {
		const { id: userID } = req.params;
		const user = await User.findOneAndDelete({
			_id: userID,
		});
		if (!user) {
			return next(
				createCustomError(
					`No user with id : ${userID}`,
					404
				)
			);
		}
		res.status(200).json({
			message: "User deleted",
			name: user.name,
		});
	}
);
module.exports = {
	getAllUsers,
	getUser,
	createUser,
	deleteUser,
	updateUser,
};
