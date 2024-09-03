import { createContext, useState, useRef } from "react";
import categories from "../data/categories.json";
import products from "../data/products.json";
import tags from "../data/tags.json";
import type { ICategory, IProduct, ITag } from "../@types/index.types";

export interface Category {
	id: number;
	title: string;
}

export interface ProductContextType {
	categories: Category[];

	products: IProduct[];
	tags: ITag[];
	searchQuery: string | null;
	setSearchQuery: (query: string | null) => void;
	searchInput: React.RefObject<HTMLInputElement>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

function ProductProvider({ children }: { children: React.ReactNode }) {
	const [searchQuery, setSearchQuery] = useState<string | null>("");
	const searchInput = useRef(null);

	return (
		<ProductContext.Provider
			value={{
				products: products as IProduct[],
				categories: categories as ICategory[],
				tags: tags as ITag[],
				searchQuery: searchQuery,
				setSearchQuery: setSearchQuery,
				searchInput: searchInput,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
}

export { ProductProvider, ProductContext };
