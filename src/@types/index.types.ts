export interface ICategory {
	id: number;
	title: string;
	slug: string;
	image: string;
}

export interface ITag {
	id: number;
	type: string;
	text: string;
}

export interface IProduct {
	id: number;
	title: string;
	price: number;
	image: string;
	quantity: number;
	category: ICategory;
	tag: ITag | null;
	description: string;
	inStock: boolean;
}

export interface ICart {
	product: IProduct[];
}
