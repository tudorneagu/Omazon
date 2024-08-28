function FormatPrice(price: number) {
	const [euros, cents] = price.toFixed(2).split("."); // Splitting price into euros and cents
	return (
		<div className="flex ">
			<p className="text-[30px] leading-[30px]">{euros}</p>
			<span className="text-xs">.{cents} €</span>
		</div>
	);
}

export default FormatPrice;
