import Categories from "../components/Catégories/Categories";
import NewProducts from "../components/Nouveautés/NewProducts";
import Products from "../components/Products/Products";
import AcountDetails from "../components/ui/Modals/AcountDetails";

function Home() {
	return (
		<div className="flex flex-col gap-[72px] py-[48px] px-6">
			<AcountDetails />
			<Categories />
			<NewProducts />
			<Products />
		</div>
	);
}

export default Home;
