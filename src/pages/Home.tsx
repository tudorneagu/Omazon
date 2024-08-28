import Categories from "../components/Catégories/Categories";
import NewProducts from "../components/Nouveautés/NewProducts";
import Products from "../components/Products/Products";

import products from "../data/products.json";
import tags from "../data/tags.json";

function Home({ categories }) {
	return (
		<div className="flex flex-col gap-[72px] py-[48px] px-6">
			<Categories categories={categories} />
			<NewProducts products={products} />
			<Products products={products} />
		</div>
	);
}

export default Home;
