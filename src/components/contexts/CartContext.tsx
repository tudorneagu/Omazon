import { createContext, useState } from "react";
import type { IProduct } from "../../@types/index.types";
const CartContext = createContext();

function CartProvider({ children }: { children: React.ReactNode }) {
	const [cart, setCart] = useState<IProduct[]>([]);
	console.log(cart);

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

	return (
		<CartContext.Provider value={{ cart: cart, handleAdd: handleAdd }}>
			{children}
		</CartContext.Provider>
	);
}

export { CartProvider, CartContext };
