import express from "express";
import users from "../controllers/userController.js";
import Categories from "../controllers/categoriesController.js";
import Products from "../controllers/productController.js";
import Tags from "../controllers/tagController.js";
import controllerWrapper from "../middlewares/controllerWrapper.js";

const router = express.Router();

router.route("/categories").get(controllerWrapper(Categories.getAll));
router.route("/products").get(controllerWrapper(Products.getAll));
router.route("/tags").get(controllerWrapper(Tags.getAll));

router.route("/register").post(controllerWrapper(users.registerUser));
router.route("/login").post(controllerWrapper(users.loginUser));
router.route("/logout").post(controllerWrapper(users.logoutUser));
router.route("/check-auth").get(controllerWrapper(users.checkAuth));

export default router;
