import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import { ProductProvider } from "./components/contexts/ProductContext";
import { AuthProvider } from "./components/contexts/AuthContext";

function App() {
	return (
		<ProductProvider>
			<BrowserRouter>
				<AuthProvider>
					<Header />
					<main>
						<Routes>
							<Route path="/" element={<Home />} />
						</Routes>
					</main>
					<Footer />
				</AuthProvider>
			</BrowserRouter>
		</ProductProvider>
	);
}

export default App;
