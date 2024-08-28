import Account from "./Account";
import Cart from "./Cart";

function UserPanel() {
	return (
		<div className="flex gap-6 w-[220px] ">
			<Account />
			<Cart />
		</div>
	);
}

export default UserPanel;
