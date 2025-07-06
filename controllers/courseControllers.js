const Course = require('../models/course');
const Category = require('../models/category');
exports.createCourse = async (req, res) => {
	try {
		const course = await Course.create(req.body);
		res.status(201).json({
			status: 'Succes',
			course,
		});
	} catch (err) {
		console.log(err);
		res.status(400).json({
			status: 'fail',
			err,
		});
	}
};

exports.getAllCourses = async (req, res) => {
	try {
		const categorySlug = req.query.categories;
		const category = await Category.findOne({slug : categorySlug})

		let filter = {};
		if(categorySlug){
			filter = {category : category.id}; 
		}

		const allCourses = await Course.find(filter).sort({ datefield: -1 });
		const allCategories = await Category.find({});
		res.status(200).render('courses', {
			allCourses,
			allCategories,
			page_name: 'courses',
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
			err,
		});
	}
};

exports.getCourse = async (req, res) => {
	try {
		const course = await Course.findOne({ slug: req.params.slug });
		res.status(200).render('course', {
			course,
			page_name: 'courses',
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
			err,
		});
	}
};
