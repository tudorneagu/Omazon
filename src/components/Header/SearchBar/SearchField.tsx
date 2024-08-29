function SearchField() {
	const handleSearchQuery = (e) => {
		setSearchQuery(e.target.value);
	};
	return (
		<div>
			<input
				className="flex-grow px-3 text-m-regular text-main-highest placeholder:text-m-regular"
				type="text"
				placeholder="Recherche Omazon"
				onChange={handleSearchQuery}
			/>
		</div>
	);
}

export default SearchField;
