import ProductCard from "./ProductCard";
import type { IProduct } from "../../@types/index.types";

interface ProductsProps {
	products: IProduct[];
}

function Products({ products = [] }: ProductsProps) {
	return (
		<div className="flex flex-col gap-6">
			<h1 className="heading-m">Tous nos produits</h1>
			<div className="flex gap-6 flex-wrap">
				{products.length > 0 ? (
					products.map((product) => (
						<ProductCard key={product.id} product={product} showTag={true} />
					))
				) : (
					<p>No products are available</p>
				)}
			</div>
		</div>
	);
}

export default Products;
