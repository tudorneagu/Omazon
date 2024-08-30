import Logo from "../Header/Logo";
import FooterButton from "../ui/FooterButton";
function FooterCta() {
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

				<FooterButton />
			</div>
			<div className="w-screen flex items-center justify-center h-20  border-t-brand-grey border-t">
				<Logo />
			</div>
		</div>
	);
}

export default FooterCta;
