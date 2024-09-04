import { createContext, useEffect, useState } from "react";
import type { IProduct } from "../@types/index.types";

const CartContext = createContext();

function CartProvider({ children }: { children: React.ReactNode }) {
	const [cart, setCart] = useState<IProduct[]>(
		JSON.parse(localStorage.getItem("cart") || "[]"),
	);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);
	const updateQuantityProduct = (id: number, quantity: number) => {
		setCart((prevCart) =>
			prevCart.map((item) => (item.id === id ? { ...item, quantity } : item)),
		);
	};

	useEffect(() => {
		if (cart.length > 0) {
			document.title = `Omazon - panier : ${cart.length} produits`;
		} else document.title = "Omazon ";
	}, [cart]);

	const handleAdd = (product: IProduct) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((item) => item.id === product.id);
			if (existingItem) {
				return prevCart.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item,
				);
			}
			return [...prevCart, { ...product, quantity: 1 }];
		});
	};

	const handleRemove = (product: IProduct) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((item) => item.id === product.id);
			if (existingItem) {
				if (existingItem.quantity === 1) {
					return prevCart.filter((item) => item.id !== product.id);
				}
				return prevCart.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity - 1 }
						: item,
				);
			}
			return prevCart;
		});
	};

	return (
		<CartContext.Provider
			value={{
				cart: cart,
				updateQuantityProduct: updateQuantityProduct,
				handleAdd: handleAdd,
				handleRemove: handleRemove,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export { CartProvider, CartContext };
