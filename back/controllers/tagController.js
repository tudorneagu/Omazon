import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const tags = {
	getAll: async (req, res) => {
		const tags = await prisma.tags.findMany();
		res.json(tags);
	},
};

export default tags;
