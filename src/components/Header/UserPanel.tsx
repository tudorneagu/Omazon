import LoginForm from "../ui/Modals/LoginForm";
import Account from "./Account";
import Cart from "./Cart";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function UserPanel() {
	const { loginForm } = useContext(AuthContext);
	return (
		<div className="relative flex gap-6 w-[220px]">
			<Account />
			{loginForm && <LoginForm />}
			<Cart />
		</div>
	);
}

export default UserPanel;
