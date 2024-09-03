import Categories from "../components/Catégories/Categories";
import NewProducts from "../components/Nouveautés/NewProducts";
import AllProducts from "../components/Products/AllProducts";
import AddProduct from "../components/ui/Modals/AddProduct";
import { useContext } from "react";
import { AddProductContext } from "../contexts/AddProductContext";

function Home() {
	const { isModalOpen } = useContext(AddProductContext);
	return (
		<div className="flex flex-col gap-[72px] py-[48px] px-6">
			{isModalOpen && <AddProduct />}
			<Categories />
			<NewProducts />
			<AllProducts />
		</div>
	);
}

export default Home;
