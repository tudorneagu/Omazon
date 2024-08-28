import Button from "../AddButton";
function ProductCard() {
	return (
		<div className="border w-[330px] h-[518px] border-main-lower flex flex-col justify-center">
			<div className="h-[330px] flex justify-center items-center bg-black/5">
				<img
					className="h-[296px] object-cover -z-10"
					src="./assets/products/bbq-kit.webp"
					alt="bbq-kit"
				/>
			</div>

			<div className="flex flex-col gap-2 p-3">
				<h3>
					{" "}
					LUXÉOL - Sérum Barbe Pousse - Densité & Epaisseur - Aide À La Pousse
					De La Barbe & Amélioration Du Poils - Fabriqué En Europe - 60ml
				</h3>
				<p>32.49 euro</p>
				<Button />
			</div>
		</div>
	);
}

export default ProductCard;
