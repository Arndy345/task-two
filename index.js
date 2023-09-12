const express = require("express");
const user = require("./routes/user");
const app = express();
const port = process.env.PORT || 3000;
const connect = require("./db/connect");
const {
	notFound,
	errorHandler,
} = require("./middleware/errHandler");

//middlewares
app.use(express.static("./public"));
app.use(express.json());
//routes
app.use("/api", user);

app.use(notFound);
app.use(errorHandler);
const start = async () => {
	try {
		await connect();
		app.listen(port, () => {
			console.log("App is listening at", port);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
