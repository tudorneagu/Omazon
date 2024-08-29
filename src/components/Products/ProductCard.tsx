import Button from "../AddButton";
import Tag from "../Tags";
import type { IProduct } from "../../@types/index.types";
import FormatPrice from "../utils/FormatPrice";

interface ProductCardProps {
	product: IProduct;
	showTag?: boolean;
}

function ProductCard({ product, showTag = true }: ProductCardProps) {
	return (
		<div className="overflow-hidden relative border w-[330px] h-[518px] border-main-lower flex flex-col">
			{showTag && product.tag !== null ? <Tag tag={product.tag} /> : ""}
			<div className="h-[330px] w-[330px] flex justify-center items-center bg-black/5">
				<img
					className="h-[220px] w-auto object-contain -z-10"
					src={`./assets/products/${product?.image}`}
					alt={product?.title || "product"}
				/>
			</div>
			<div className="flex flex-col flex-grow justify-between p-3">
				<h3 className="line-clamp-3 text-ellipsis">
					{product?.title || "Produit sans nom"}
				</h3>
				<div className="flex flex-col gap-2 mt-auto">
					<div>
						{product?.price ? (
							FormatPrice(product.price)
						) : (
							<p>Le prix n'est pas disponible</p>
						)}
					</div>
					<Button />
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
