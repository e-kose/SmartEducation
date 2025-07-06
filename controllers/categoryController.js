const Category = require('../models/category');

exports.createCategory = async (req, res) => {
	try {
		const category = Category.create(req.body);

		res.status(201).json({
			status: 'succes',
			category,
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			err,
		});
	}
};
