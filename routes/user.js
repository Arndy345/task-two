const router = require("express").Router();
const {
	getUser,
	createUser,
	deleteUser,
	updateUser,
	getAllUsers,
} = require("../controllers/user");

router.route("/").post(createUser);

router.route("/").get(getAllUsers);

router
	.route("/:id")
	.get(getUser)
	.patch(updateUser)
	.delete(deleteUser);

module.exports = router;
