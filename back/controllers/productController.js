import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Products = {
	getAll: async (req, res) => {
		const products = await prisma.products.findMany({
			include: {
				tags: true,
				categories: true,
			},
		});
		res.json(products);
	},
};

export default Products;
