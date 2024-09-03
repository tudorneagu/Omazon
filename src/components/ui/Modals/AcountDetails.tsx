import { Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
import { useContext } from "react";

function LoginForm() {
	const { emailRef } = useContext(AuthContext);
	return (
		<div className="  bg-white drop-shadow-md rounded-sm border border-main-lower max-w-screen-sm p-6  flex flex-col items-center py-6">
			<div className=" absolute z-10 -top-2 right-[200px] bg-white rotate-45 h-4 w-4 " />
			<div className=" flex items-center justify-between w-full p-3 rounded-lg bg-info-lower">
				<div className="flex gap-2">
					<div className="w-12 h-12 rounded-full flex  items-end justify-center overflow-hidden bg-info-medium">
						<img
							className="z-10 w-11 h-11 fill-white "
							src="./assets/icons/user.svg"
							alt="user profile thumbnail"
						/>
					</div>
					<div>
						<h4 className="text-m-medium text-main-highest">Dave Lopper</h4>
						<p className="text-s-regular text-info-low">Titulaire du compte</p>
					</div>
				</div>
				<Link className="flex gap-2 items-center text-s-regular text-info-medium">
					<p>Gérer les profils</p>
					<img
						className="h-2 stroke-info-medium"
						src="./assets/icons/chevron-right.svg"
					/>
				</Link>
			</div>
			<Link
				to="/register"
				className="mt-4 text-s-regular text-main-high active:text-info-higher  active:font-semibold hover:text-button-active-background"
			>
				Deconnexion
			</Link>
		</div>
	);
}

export default LoginForm;
