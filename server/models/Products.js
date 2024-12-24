const { default: mongoose } = require('mongoose');

const productSchema = new mongoose.Schema({
	templateName: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	linkDesign: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
