import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const cart = {
  userCart: async (req, res) => {
    const results = await prisma.carts.findMany({
      where: { user_id: Number.parseInt(req.params.id) },
      include: { products: true },
    });
    res.json(results);
  },
};

export default cart;
