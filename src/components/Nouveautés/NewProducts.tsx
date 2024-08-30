import ProductCard from "../Products/ProductCard";

import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

function NewProducts() {
	const { products } = useContext(ProductContext);
	return (
		<div className="flex flex-col gap-6">
			<h1 className="heading-m">Nouveautés</h1>
			<div className="flex gap-6 flex-wrap ">
				{products.length > 0 ? (
					products
						.filter((product) => product.tag?.type === "new")
						.map((product) => (
							<div key={product.id}>
								<ProductCard product={product} showTag={false} />
							</div>
						))
				) : (
					<p>Pas de nouveautés disponibles</p>
				)}
			</div>
		</div>
	);
}

export default NewProducts;
