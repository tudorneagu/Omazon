import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Users = {
	getAll: async (req, res) => {
		const users = await prisma.users.findMany();
		res.json(users);
	},
};

export default Users;
