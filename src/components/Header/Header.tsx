import Logo from "./Logo";
import SearchBar from "./SearchBar/SearchBar";
import UserPanel from "./UserPanel";

function Header() {
	return (
		<header className=" sticky top-0 bg-main-higher py-5 px-6 flex items-center gap-9 w-screen z-50">
			<Logo />
			<SearchBar />
			<UserPanel />
		</header>
	);
}

export default Header;
