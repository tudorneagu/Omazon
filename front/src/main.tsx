import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductProvider } from "./contexts/ProductContext.tsx";
import { ModalProvider } from "./contexts/ModalContext.tsx";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root") as HTMLElement).render(
	<>
		<BrowserRouter>
			<ProductProvider>
				<AuthProvider>
					<ModalProvider>
						<CartProvider>
							<App />
						</CartProvider>
					</ModalProvider>
				</AuthProvider>
			</ProductProvider>
		</BrowserRouter>
	</>,
);
