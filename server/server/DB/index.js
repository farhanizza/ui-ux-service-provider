const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
	if (isConnected) {
		console.log('Using existing MongoDB connection');
		return;
	}

	try {
		const db = await mongoose.connect(
			'mongodb://localhost:27017/uiUxServiceDB',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);
		isConnected = db.connections[0].readyState === 1;
		console.log('Connected to MongoDB');
	} catch (err) {
		console.error('MongoDB connection error:', err);
		process.exit(1);
	}
};

module.exports = connectDB;
