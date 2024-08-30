import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

function SearchCategory() {
	const { categories } = useContext(ProductContext);
	return (
		<select className="appearance-none w-auto bg-main-lower text-s-regular text-brand-grey px-3 rounded-l-lg">
			<option selected disabled>
				Toutes nos catégories
			</option>
			{categories.map((category) => (
				<option key={category.id} value={category.id}>
					{category.title}
				</option>
			))}
		</select>
	);
}

export default SearchCategory;
