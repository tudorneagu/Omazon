import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import categories from "./data/categories.json";

function App() {
	const [searchQuery, setSearchQuery] = useState<string | null>("");

	return (
		<div>
			<Header
				categories={categories}
				setSearchQuery={setSearchQuery}
				searchQuery={searchQuery}
			/>
			<main>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home categories={categories} />} />
					</Routes>
				</BrowserRouter>
			</main>
			<Footer />
		</div>
	);
}

export default App;
