import Tag from "../Tags";
import type { IProduct } from "../../@types/index.types";
import { Link, useNavigate } from "react-router-dom";

interface CartProductProps {
	product: IProduct;
	showTag?: boolean;
}

function CartProduct({ product, showTag = true }: CartProductProps) {
	const navigate = useNavigate();

	const handleProductsClick = () => {
		navigate(`/product/${product.title}`);
	};
	return (
		<div className="overflow-hidden flex py-4 pl-4 gap-4 border-b border-main-low">
			<input type="checkbox" />
			<Link to={`/product/${product.title}`} onClick={handleProductsClick}>
				<div className="h-[220px] w-[220px] flex flex-shrink justify-center items-center bg-black/5">
					<img
						className="h-[110px] w-auto object-contain -z-10"
						src={`/assets/products/${product?.image}`}
						alt={product?.title || "product"}
					/>
				</div>
			</Link>
			<section className="">
				<header className="">
					<Link to={`/product/${product.title}`} onClick={handleProductsClick}>
						<h3 className="line-clamp-2 text-ellipsis">
							{product?.title || "Produit sans nom"}
						</h3>
					</Link>
					<div className="flex text-s-regular overflow-hidden">
						{showTag && product.tag ? <Tag tag={product.tag} /> : ""}

						<p>dans la Categorie </p>
						<p className="text-info-high pl-4">{product.category.title}</p>
					</div>
					{product.inStock ? (
						<p className="text-green-600 text-s-regular">En Stock</p>
					) : (
						<p className="text-danger-medium text-s-regular">
							En rupture de stock
						</p>
					)}
				</header>
				<main className="text-s-regular">
					<input type="checkbox" name="gift-product" />
					<label htmlFor="gift-product">Ceci sera un cadeau</label>
					<p>En savoir plus</p>
				</main>
				<footer className="flex text-s-regular text-info-medium">
					<select className="mr-4">
						{Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
							<option key={number} value={number}>
								{number}
							</option>
						))}
					</select>
					<p className="border-l border-main-low pl-4 ml-4">Supprimer</p>
					<p className="border-l border-main-low pl-4 ml-4">Mettre de côté</p>
					<p className="border-l border-main-low pl-4 ml-4">
						Voir plus de produits similaires
					</p>
					<p className="border-l border-main-low pl-4 ml-4">Partager</p>
				</footer>
			</section>
			<section className="min-w-fit ml-auto">
				<p>{product.price.toFixed(2)} €</p>
			</section>
		</div>
	);
}

export default CartProduct;
