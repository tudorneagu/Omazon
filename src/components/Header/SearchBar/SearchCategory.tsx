import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Link, useNavigate } from "react-router-dom";
function SearchCategory() {
	const { categories } = useContext(ProductContext);
	const navigate = useNavigate();
	const handleCategoryClick = () => {
		navigate(`/category/${category.title}/products`);
	};

	return (
		<select className="appearance-none w-auto bg-main-lower text-s-regular text-brand-grey px-3 rounded-l-lg">
			<option selected disabled>
				Toutes nos catégories
			</option>

			{categories.map((category) => (
				<option key={category.id} value={category.id}>
					<Link
						to={`/category/${category.title}/products`}
						onChange={handleCategoryClick}
					>
						{category.title}
					</Link>
				</option>
			))}
		</select>
	);
}

export default SearchCategory;
