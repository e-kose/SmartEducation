const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
	try {
		const user = await User.create(req.body);
		res.status(201).json({
			status: 'success',
			user,
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			err,
		});
	}
};

exports.loginUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(404).send('Kullanıcı bulunamadı');
		}

		const same = await bcrypt.compare(password, user.password);

		if (!same) {
			return res.status(401).send('Şifre yanlış');
		}

		// User session
		res.status(200).send('Logged In');
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			error: err.message,
		});
	}
};
