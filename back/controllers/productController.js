import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = {
	getAll: async (req, res) => {
		const products = await prisma.products.findMany({
			include: {
				tags: true,
				categories: true,
			},
		});
		res.json(products);
	},

	getAllUserProducts: async (req, res) => {
		const results = await prisma.products.findMany({
			where: { user_id: Number.parseInt(req.params.id) },
		});
		res.json(results);
	},
	addUserProduct: async (req, res) => {
		const {
			title,
			price,
			image,
			description,
			inStock,
			category_id,
			tag_id,
			user_id,
		} = req.body;

		if (!user_id) {
			return res.status(400).json({ error: "User ID is required" });
		}

		const newProduct = await prisma.products.create({
			data: {
				title,
				price,
				image,
				description,
				instock: inStock === "true",
				categories: {
					connect: { id: Number.parseInt(category_id) },
				},
				tags: {
					connect: { id: Number.parseInt(tag_id) },
				},
			},
		});

		await prisma.user_products.create({
			data: {
				user_id: Number.parseInt(user_id),
				product_id: newProduct.id,
				created_at: new Date(),
			},
		});

		res.status(201).json(newProduct);
	},

	deleteUserProduct: async (req, res) => {
		const target = await prisma.products.delete({
			where: { id: Number.parseInt(req.params.id) },
		});
		res.json("Product has been succefully deleted");
	},
	updateUserProduct: async (req, res) => {
		const updatedProduct = await prisma.products.update({
			where: { id: Number.parseInt(req.params.id) },
			data: {
				title: title,
				price: price,
				image: image,
				description: description,
				instock: inStock === "true",
				categories: {
					connect: { id: Number.parseInt(category_id) },
				},
				tags: {
					connect: { id: Number.parseInt(tag_id) },
				},
			},
		});
		res.json(updatedProduct);
	},
};

export default products;
