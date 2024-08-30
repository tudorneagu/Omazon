import Category from "./CategoryCard";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import type { ICategory } from "../../@types/index.types";

function Categories() {
	const { categories } = useContext(ProductContext);
	return (
		<section className="flex  flex-col gap-6 ">
			<h1 className="heading-m">Categories à l'honneur</h1>
			<div className="flex flex-wrap  gap-6  ">
				{categories.length > 0 ? (
					categories.map((category: ICategory) => (
						<Category key={category.id} category={category} />
					))
				) : (
					<p>No categories available.</p>
				)}
			</div>
		</section>
	);
}

export default Categories;
