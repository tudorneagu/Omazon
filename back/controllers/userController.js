import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Users = {
	getAll: async (req, res) => {
		const users = await prisma.users.findMany();
		res.json(users);
	},

	registerUser: async (req, res) => {
		try {
			const { firstname, lastname, email, password } = req.body;
			const existingUser = await prisma.users.findUnique({ where: { email } });
			if (existingUser) {
				return res.status(400).json({ error: "User already exists" });
			}

			const hashedPassword = await bcrypt.hash(password, 10);
			const newUser = await prisma.users.create({
				data: {
					firstname,
					lastname,
					email,
					password: hashedPassword,
				},
			});
			res.json(newUser);
			res.status(201).json({ message: "User registered successfully" });
		} catch (error) {
			// Catch any errors within the controller and ensure it bubbles up to the wrapper
			throw new Error(`Error registering user: ${error.message}`);
		}
	},

	loginUser: async (req, res) => {
		const { email, password } = req.body;
		const user = await prisma.users.findUnique({ where: { email } });
		if (!user) {
			return res.status(400).json({ error: "Invalid username or password" });
		}
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		req.session.user = { id: user.id, useremail: user.email };
		res.status(200).json({ message: "Login successful", user });
	},

	checkAuth: (req, res) => {
		if (req.session && req.session.user) {
			res.status(200).json({ user: req.session.user });
		} else {
			res.status(401).json({ message: "Not authenticated" });
		}
	},
};

export default Users;
