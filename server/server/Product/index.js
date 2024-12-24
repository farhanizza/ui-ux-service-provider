const { default: mongoose } = require('mongoose');
const Product = require('../../models/Products');

const addProduct = async (req, res) => {
	const { templateName, description, linkDesign } = req.body;

	const product = new Product({
		templateName: templateName,
		description: description,
		linkDesign: linkDesign,
	});

	await product
		.save()
		.then(() =>
			res.status(201).json({
				message: 'Product added successfully',
			})
		)
		.catch((error) => {
			res.status(500).json({
				message: 'Error adding product',
			});
		});
};

const getAllProduct = async (req, res) => {
	try {
		const product = await Product.find();
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({
			message: 'Error fetching products',
		});
	}
};

const getProduct = async (req, res) => {
	try {
		const { id } = req.params;

		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(400).json({ message: 'Invalid ID format' });
		}

		const product = await Product.findById(id);

		if (!product) {
			return res.status(404).json({ message: 'Product  not found' });
		}

		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({
			message: 'Error fetching products',
		});
	}
};

module.exports = {
	addProduct,
	getAllProduct,
	getProduct,
};
