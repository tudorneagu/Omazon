import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductProvider } from "./contexts/ProductContext.tsx";
import { AddProductProvider } from "./contexts/AddProductContext";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root") as HTMLElement).render(
	<>
		<BrowserRouter>
			<ProductProvider>
				<AuthProvider>
					<AddProductProvider>
						<CartProvider>
							<App />
						</CartProvider>
					</AddProductProvider>
				</AuthProvider>
			</ProductProvider>
		</BrowserRouter>
	</>,
);
