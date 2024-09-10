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
		const results = await prisma.user_products.findMany({
			where: { user_id: Number.parseInt(req.params.id) },
			include: {
				products: {
					include: {
						categories: true,
						tags: true,
					},
				},
			},
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
		const { userId, productId } = req.params;

		try {
			// Step 1: Delete the relationship in the user_products table
			const relationship = await prisma.user_products.deleteMany({
				where: {
					user_id: Number(userId),
					product_id: Number(productId),
				},
			});

			if (relationship.count === 0) {
				return res.status(404).json({ message: "Relationship not found." });
			}

			const deletedProduct = await prisma.products.delete({
				where: {
					id: Number(productId),
				},
			});

			return res.status(200).json({
				message: "Product and relationship removed successfully.",
				deletedProduct,
			});
		} catch (error) {
			console.error("Error deleting user product and relationship:", error);
			return res.status(500).json({ message: "Internal server error." });
		}
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
