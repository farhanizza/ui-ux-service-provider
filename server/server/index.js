const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authController = require('./Auth/index');
const productController = require('./Product/index');
const connectDB = require('./DB/index');
connectDB();

dotenv.config();

const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/api/signin', authController.login);
app.post('/api/signup', authController.signup);
app.get('/api/getAllUser', authController.getAllUser);
app.get('/api/getUser/:id', authController.getUser);

app.post('/api/addProduct', productController.addProduct);
app.get('/api/getAllProduct', productController.getAllProduct);
app.get('/api/getProduct/:id', productController.getProduct);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
