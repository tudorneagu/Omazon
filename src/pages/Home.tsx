import Categories from "../components/Catégories/Categories";
import NewProducts from "../components/Nouveautés/NewProducts";
import AllProducts from "../components/Products/AllProducts";
import CartPage from "./CartPage";

function Home() {
	return (
		<div className="flex flex-col gap-[72px] py-[48px] px-6">
			<CartPage />
			<Categories />
			<NewProducts />
			<AllProducts />
		</div>
	);
}

export default Home;
