import Categories from "../components/Catégories/Categories";
import NewProducts from "../components/Nouveautés/NewProducts";
import Products from "../components/Products/Products";
import type { ICategory, IProduct } from "../@types/index.types";
import products from "../data/products.json";

interface HomeProps {
	categories: ICategory[];
}

function Home({ categories }: HomeProps) {
	return (
		<div className="flex flex-col gap-[72px] py-[48px] px-6">
			<Categories categories={categories} />
			<NewProducts products={products as IProduct[]} />
			<Products products={products as IProduct[]} />
		</div>
	);
}

export default Home;
