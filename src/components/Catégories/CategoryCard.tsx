function Category() {
	return (
		<div className="w-[212px] h-[264px] flex flex-col items-center justify-between border-">
			<div className="bg-black/5 w-[212px] h-[212px] flex justify-center items-center rounded-full">
				<img
					className=" h-[120px] -z-10"
					src="./assets/categories/animalerie.webp"
					alt="animalerie"
				/>
			</div>
			<h2 className="heading-s color-main-highest">Informatique</h2>
		</div>
	);
}

export default Category;
