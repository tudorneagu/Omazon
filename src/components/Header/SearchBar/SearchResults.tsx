import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import normalizeString from "../../utils/NormaliseString";

function SearchResults() {
	const { searchQuery, products, setSearchQuery, searchInput } =
		useContext(ProductContext);
	console.log(searchQuery);
	const searchResults = () => {
		const normalizedQuery = normalizeString(searchQuery);
		if (searchQuery) {
			return products?.filter((product) =>
				normalizeString(product.title)?.includes(normalizedQuery),
			);
		}
	};
	function handleClick() {
		setSearchQuery("");
		if (searchInput.current) {
			searchInput.current.value = "";
		}
	}

	return (
		<div className=" absolute border border-main-lightest top-9 z-10 bg-main-lowest h-fit overflow-y-auto p-2 ">
			{searchResults()
				?.slice(0, 6)
				.map((product) => (
					<Link
						to={`/product/${product.title}`}
						className="text-m-regular"
						key={product.id}
						onClick={handleClick}
					>
						{product.title}
					</Link>
				))}
		</div>
	);
}

export default SearchResults;
