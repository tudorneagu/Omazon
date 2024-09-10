import express from "express";
import users from "../controllers/userController.js";
import categories from "../controllers/categoriesController.js";
import products from "../controllers/productController.js";
import tags from "../controllers/tagController.js";
import cart from "../controllers/cartController.js";
import controllerWrapper from "../middlewares/controllerWrapper.js";

const router = express.Router();

router.route("/tags").get(controllerWrapper(tags.getAll));
router.route("/categories").get(controllerWrapper(categories.getAll));
router.route("/products").get(controllerWrapper(products.getAll));
router
	.route("/userProducts/:id")
	.get(controllerWrapper(products.getAllUserProducts));

router.route("/register").post(controllerWrapper(users.registerUser));
router.route("/login").post(controllerWrapper(users.loginUser));
router.route("/logout").post(controllerWrapper(users.logoutUser));
router.route("/check-auth").get(controllerWrapper(users.checkAuth));

router.route("/product/add").post(controllerWrapper(products.addUserProduct));
router
	.route("/userProducts/:userId/:productId")
	.delete(controllerWrapper(products.deleteUserProduct));
router
	.route("/product/update/:id")
	.patch(controllerWrapper(products.updateUserProduct));

router.route("/user/cart/:id").get(controllerWrapper(cart.userCart));

export default router;
