import axios from "axios";

const APP_API_URL = "http://localhost:3000";
const axiosInstance = axios.create({ baseURL: APP_API_URL });

// je veux faire une demande API pour recuperer les produits de l'utilisateur
// je veux pouvoir rajouter un produit
// je veux pouvoir supprimer un produit
// je  veux pouvoir modifier un produit

const cartService = {
	addUserProductService: async () => {
		const response = await axiosInstance.post("/newproduct", {
			withCredentials: true,
		});
		return response.data;
	},
};
export default cartService;
