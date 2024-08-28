import ProductCard from "../Products/ProductCard";

function NewProducts({ products = [] }) {
	return (
		<div className="flex flex-col gap-6">
			<h1 className="heading-m">Nouveautés</h1>
			<div className="flex gap-6 flex-wrap ">{products.length > 0}</div>
		</div>
	);
}

export default NewProducts;
