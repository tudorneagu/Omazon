import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Categories = {
	getAll: async (req, res) => {
		const categories = await prisma.categories.findMany();
		res.json(categories);
	},
};

export default Categories;
