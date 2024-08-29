import express from "express";
import Users from "../controllers/userController.js";
import Categories from "../controllers/categoriesController.js";
import Products from "../controllers/productController.js";
import Tags from "../controllers/tagController.js";
import controllerWrapper from "../middlewares/controllerWrapper.js";

const router = express.Router();

router.route("/users").get(controllerWrapper(Users.getAll));
router.route("/categories").get(controllerWrapper(Categories.getAll));
router.route("/products").get(controllerWrapper(Products.getAll));
router.route("/tags").get(controllerWrapper(Tags.getAll));

export default router;
