const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authController = require('./Auth/index');

dotenv.config();

const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/api/signin', authController.login);
app.post('/api/signup', authController.signup);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
