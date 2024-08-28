import ProductCard from "./ProductCard";

function Products() {
	return (
		<div className="flex flex-col gap-6">
			<h1 className="heading-m">Tous nos produits</h1>
			<div className="flex gap-6 flex-wrap ">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
	);
}

export default Products;
