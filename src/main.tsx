import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductProvider } from "./components/contexts/ProductContext";

createRoot(document.getElementById("root") as HTMLElement).render(
	<>
		<ProductProvider>
			<App />
		</ProductProvider>
	</>,
);
