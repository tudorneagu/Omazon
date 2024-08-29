import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Products = {
	getAll: async (req, res) => {
		const products = await prisma.products.findMany();
		res.json(products);
	},
};

export default Products;
