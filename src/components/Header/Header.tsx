import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserPanel from "./UserPanel";
import products from "../../data/products.json";
function Header({ categories, setSearchQuery, searchQuery }) {
	console.log(searchQuery);
	const findProducts = () =>
		products.filter((product) =>
			product.title?.toLowerCase().includes(searchQuery?.toLowerCase()),
		);

	console.log(findProducts());
	return (
		<header className="bg-main-higher py-5 px-6 flex items-center gap-9 w-screen">
			<Logo />
			<SearchBar
				categories={categories}
				setSearchQuery={setSearchQuery}
				searchQuery={searchQuery}
			/>
			<UserPanel />
		</header>
	);
}

export default Header;
