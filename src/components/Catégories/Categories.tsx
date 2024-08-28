import Category from "./CategoryCard";

function Categories({ categories = [] }) {
	return (
		<section className="flex flex-col gap-6">
			<h1 className="heading-m">Categories à l'honneur</h1>
			<div className="flex flex-wrap justify-between gap-5 ">
				{categories.length > 0 ? (
					categories.map((category) => (
						<Category key={category.id} category={category} />
					))
				) : (
					<p>No categories available.</p>
				)}
			</div>
		</section>
	);
}

export default Categories;
