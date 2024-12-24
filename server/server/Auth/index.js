const bcrypt = require('bcrypt');
const User = require('../../models/User');
const mongoose = require('mongoose');

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
		role: 'user',
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

const getAllUser = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: 'Error Fecthing' });
	}
};

const getUser = async (req, res) => {
	try {
		const { id } = req.params;

		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(400).json({ message: 'Invalid ID format' });
		}

		const user = await User.findById(id);

		if (!user) {
			return res.status(404).json({ message: 'User  not found' });
		}

		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: 'Error Fetching' });
	}
};

module.exports = {
	login,
	signup,
	getAllUser,
	getUser,
};
