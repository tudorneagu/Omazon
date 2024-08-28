import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserPanel from "./UserPanel";

function Header() {
	return (
		<header className="bg-main-higher py-5 px-6 flex items-center gap-9 w-screen">
			<Logo />
			<SearchBar />
			<UserPanel />
		</header>
	);
}

export default Header;
