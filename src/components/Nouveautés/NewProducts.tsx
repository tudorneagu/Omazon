import ProductCard from "../Products/ProductCard";

function NewProducts() {
	return (
		<div className="flex flex-col gap-6">
			<h1 className="heading-m">Nouveautés</h1>
			<div className="flex gap-6 flex-wrap ">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
	);
}

export default NewProducts;
