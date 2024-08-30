function Cart() {
	return (
		<button type="button" className="flex items-end relative">
			<p className="absolute top-0 left-[18px] text-brand-primary"> 0</p>
			<img
				className="w-[38px] h-[34px]"
				src="/assets/icons/cart.svg"
				alt="cart icon"
			/>
			<p className="text-main-lowest">Panier</p>
		</button>
	);
}

export default Cart;
