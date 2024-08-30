import { Link } from "react-router-dom";
function Logo() {
	return (
		<Link to={"/"}>
			<img
				className="w-[105px], h-[32px] "
				src="/assets/logos/omazon.svg"
				alt="logo omazon"
			/>
		</Link>
	);
}

export default Logo;
