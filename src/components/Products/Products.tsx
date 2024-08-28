import ProductCard from "./ProductCard";

function Products({ products = [] }) {
	console.log(products);
	return (
		<div className="flex flex-col gap-6">
			<h1 className="heading-m">Tous nos produits</h1>
			<div className="flex gap-6 flex-wrap ">
				{products.length > 0 ? (
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))
				) : (
					<p>No products are available</p>
				)}
			</div>
		</div>
	);
}

export default Products;
