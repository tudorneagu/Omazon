import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users = {
	registerUser: async (req, res) => {
		const { firstname, lastname, email, password, account_type } = req.body;

		if (!email) {
			return res.status(400).json({ error: "Email is required" });
		}

		try {
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
					account_type,
				},
			});
			res.status(201).json({ message: "User registered successfully" });
		} catch (error) {
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
		const { firstname, lastname, id, account_type } = user;
		req.session.user = { id: user.id };
		res.status(200).json({
			user: { firstname, lastname, email, id, account_type },
		});
	},

	checkAuth: (req, res) => {
		if (req.session && req.session.user) {
			res.status(200).json({ user: req.session.user });
		} else {
			res.status(401).json({ message: "Not authenticated" });
		}
	},

	logoutUser: async (req, res) => {
		req.session.destroy((err) => {
			if (err) {
				return res.status(500).json({ error: "Failed to logout" });
			}
			res.clearCookie("connect.sid");
			return res.status(200).json({ message: "Logout succesful" });
		});
	},
};

export default users;
