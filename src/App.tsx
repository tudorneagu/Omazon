import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import { ProductProvider } from "./components/contexts/ProductContext";

function App() {
	return (
		<ProductProvider>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</ProductProvider>
	);
}

export default App;
