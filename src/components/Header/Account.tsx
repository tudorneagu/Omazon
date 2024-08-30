import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Account() {
	const { loginForm, setLoginForm, focusEmailInput } = useContext(AuthContext);
	const handleInteraction = () => {
		setLoginForm(!loginForm);
		focusEmailInput();
	};

	return (
		<div className="flex flex-col">
			<button
				type="button"
				className="text-main-lowest menu-s cursor-pointer"
				onClick={handleInteraction}
				onKeyDown={(e) => {
					console.log("Key down event:", e.key);
					if (e.key === "Enter") {
						handleInteraction();
					}
					if (e.key === "Escape") {
						setLoginForm(!loginForm);
					}
				}}
			>
				Bonjour, identifiez vous
			</button>
			<div className="flex items-center">
				<p className="text-main-low menu-m pr-1">Compte et listes</p>
				<img className="w-2 h-2" src="./assets/icons/down.svg" alt="" />
			</div>
		</div>
	);
}

export default Account;
