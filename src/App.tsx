import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

import { AuthProvider } from "./contexts/AuthContext";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import { CartProvider } from "./contexts/CartContext";
import CartPage from "./pages/CartPage";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<CartProvider>
					<Header />
					<main className="flex justify-around">
						<div className="max-w-[1600px] w-full">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route
									path="/category/:categoryTitle/products"
									element={<CategoryPage />}
								/>
								<Route
									path="/product/:productTitle"
									element={<ProductPage />}
								/>
								<Route path="/cart" element={<CartPage />} />
							</Routes>
						</div>
					</main>
					<Footer />
				</CartProvider>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
