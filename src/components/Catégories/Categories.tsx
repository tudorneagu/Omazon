import { ICategory } from "../../@types/index.types";
import Category from "./CategoryCard";
interface CategoriesProps {
	category: ICategory;
	categories: ICategory[];
}

function Categories({ categories = [] }: CategoriesProps) {
	return (
		<section className="flex  flex-col gap-6 ">
			<h1 className="heading-m">Categories à l'honneur</h1>
			<div className="flex flex-wrap  gap-6  ">
				{categories.length > 0 ? (
					categories.map((category) => (
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
