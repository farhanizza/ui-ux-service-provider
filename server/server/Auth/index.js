const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('../../models/User');

mongoose
	.connect('mongodb://localhost:27017/user', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.error('MongoDB connection error:', err));

const login = async (req, res) => {
	const { username, password } = req.body;

	if (!username || !password) {
		return res.status(400).json({
			message: 'Username and Password are required!',
		});
	}

	try {
		const fetchUser = await User.findOne({ username: username });
		if (!fetchUser) {
			return res.status(400).json({
				message: 'Invalid Credentials',
			});
		}

		const isPasswordValid = await bcrypt.compare(password, fetchUser.password);
		if (!isPasswordValid) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		res.status(200).json({ message: 'Signin successful' });
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' });
	}
};

const signup = async (req, res) => {
	const { username, password, email } = req.body;

	const user = new User({
		username: username,
		password: await bcrypt.hash(password, 10),
		email: email,
	});

	await user
		.save()
		.then(() =>
			res.status(201).json({ message: 'User registered successfully' })
		)
		.catch((error) => {
			console.error('Error saving user:', error);
			res.status(500).json({ message: 'Internal server error' });
		});
};

module.exports = {
	login,
	signup,
};
