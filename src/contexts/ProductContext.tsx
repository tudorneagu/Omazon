import { createContext, useState } from "react";
import categories from "../../data/categories.json";
import products from "../../data/products.json";
import tags from "../../data/tags.json";
import type { ICategory, IProduct, ITag } from "../../@types/index.types";

interface ProductContextType {
	categories: ICategory[];
	products: IProduct[];
	tags: ITag[];
	searchQuery: string | null;
	setSearchQuery: (query: string | null) => void;
}

const ProductContext = createContext<ProductContextType>();

function ProductProvider({ children }: { children: React.ReactNode }) {
	const [searchQuery, setSearchQuery] = useState<string | null>("");
	return (
		<ProductContext.Provider
			value={{
				products: products as IProduct[],
				categories: categories as ICategory[],
				tags: tags as ITag[],
				searchQuery: searchQuery,
				setSearchQuery: setSearchQuery,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
}

export { ProductProvider, ProductContext };
