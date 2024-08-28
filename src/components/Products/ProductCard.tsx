import Button from "../AddButton";
function ProductCard({ product }) {
	console.log(product);
	return (
		<div className="border w-[330px] h-[518px] border-main-lower flex flex-col ">
			<div className="h-[330px] flex justify-center items-center bg-black/5">
				<img
					className="h-[296px] object-cover -z-10"
					src={`./assets/products/${product?.image}`}
					alt={product?.title || "product"}
				/>
			</div>
			<div className="flex flex-col  gap-2 p-3 h-full">
				<h3 className="line-clamp-3 text-ellipsis">
					{product?.title || "Produit sans nom"}
				</h3>
				<p>
					{product?.price
						? `$${product.price}`
						: "Le prix n'est pas disponible"}
				</p>
				<Button />
			</div>
		</div>
	);
}

export default ProductCard;
