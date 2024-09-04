import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

import CartPage from "./pages/CartPage";
import AddProduct from "./components/ui/Modals/AddProduct";
import { useContext } from "react";
import { AddProductContext } from "./contexts/AddProductContext";

function App() {
	const { isModalOpen } = useContext(AddProductContext);
	return (
		<BrowserRouter>
			<Header />
			<main className="flex justify-around">
				{isModalOpen && <AddProduct />}
				<div className="max-w-[1600px] w-full">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/category/:categoryTitle/products"
							element={<CategoryPage />}
						/>
						<Route path="/product/:productTitle" element={<ProductPage />} />
						<Route path="/cart" element={<CartPage />} />
					</Routes>
				</div>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
