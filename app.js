const express = require('express');

const app = express();

const pageRouter = require("./routers/pageRoute");

//Template Engine
app.set('view engine', 'ejs');

//MiddleWare
app.use(express.static('public'));

//Routes
app.use("/", pageRouter);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`App Started on port ${PORT}`);
});
