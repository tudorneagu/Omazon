import { createContext, useState, type ReactNode } from "react";

const AddProductContext = createContext();

function AddProductProvider({ children }: { children: ReactNode }) {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	return (
		<AddProductContext.Provider
			value={{ onClose: closeModal, onOpen: openModal, isModalOpen }}
		>
			{children}
		</AddProductContext.Provider>
	);
}

export { AddProductContext, AddProductProvider };
