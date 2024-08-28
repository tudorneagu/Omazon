function SearchBar({ categories }) {
	return (
		<form className="flex-grow flex h-9">
			console.log (categories)
			<select className="w-auto bg-main-lower text-s-regular text-brand-grey px-3 rounded-l-lg">
				<option defaultValue="" disabled selected>
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
