import { AddProductContext } from "../../contexts/AddProductContext";
import Logo from "../Header/Logo";
import Button from "../ui/Buttons/Button";
import { useContext } from "react";

function FooterCta() {
	const { onOpen } = useContext(AddProductContext);
	return (
		<div className="flex flex-col justify-center items-center bg-main-high ">
			<div className="flex flex-col justify-center items-center gap-6 text-main-lowest py-12">
				<h2 className="heading-m">
					{" "}
					Vous aussi, gagnez de l’argent avec Omazon !
				</h2>
				<p className="text-center text-m-regular font-normal">
					Transformez vos passions en revenus.
					<br /> Rejoignez notre communauté de vendeurs dès aujourd'hui !
				</p>

				<Button onClick={onOpen}>
					<p className="text-main-low">Devenez vendeur sur Omazon</p>
				</Button>
			</div>
			<div className="w-screen flex items-center justify-center h-20  border-t-brand-grey border-t">
				<Logo />
			</div>
		</div>
	);
}

export default FooterCta;
