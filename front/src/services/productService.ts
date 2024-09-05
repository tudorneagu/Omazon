import axios from "axios";
import type { IProduct } from "../@types/index.types";

const APP_API_URL = "http://localhost:3000";

const axiosInstance = axios.create({ baseURL: APP_API_URL });

export const fetchProducts = async (): Promise<IProduct[]> => {
	try {
		const products = await axiosInstance.get<IProduct[]>("/products");
		return products.data;
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
};
