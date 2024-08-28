import Category from "./CategoryCard";

function Categories() {
	return (
		<section className="flex flex-col gap-6">
			<h1 className="heading-m">Categories à l'honeur</h1>
			<div className="flex flex-wrap@ gap-6">
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
				<Category />
			</div>
		</section>
	);
}

export default Categories;
