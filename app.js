const express = require('express');

const mongoose = require('mongoose');

const app = express();

const pageRouter = require('./routers/pageRoute');

const courseRouter = require('./routers/courseRoute');

const categoryRouter = require('./routers/categoryRoute');

const userRouter = require('./routers/userRoute');
mongoose
	.connect('mongodb://127.0.0.1:27017/smartedu-db')
	.then(() => {
		console.log('MongoDB connected ✅');
	})
	.catch((err) => {
		console.error('MongoDB connection error ❌:', err);
	});

//Template Engine
app.set('view engine', 'ejs');

//MiddleWare
app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Routes
app.use('/', pageRouter);
app.use('/courses', courseRouter);
app.use('/categories', categoryRouter);
app.use('/users', userRouter);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`App Started on port ${PORT}`);
});
