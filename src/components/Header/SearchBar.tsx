import products from "../../data/products.json";

function SearchBar({ categories, setSearchQuery }) {
	const handleSearchQuery = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<form className="flex-grow flex h-9">
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
			<input
				className="flex-grow px-3 text-m-regular text-main-highest placeholder:text-m-regular"
				type="text"
				placeholder="Recherche Omazon"
				onChange={handleSearchQuery}
			/>
			<button
				type="button"
				className="p-2 bg-brand-primary rounded-r-lg flex justify-center items-center"
			>
				<img
					className="h-5 w-6"
					src="./assets/icons/search.svg"
					alt="search button"
				/>
			</button>
		</form>
	);
}

export default SearchBar;
