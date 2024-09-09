import { ModalContext } from "../../../contexts/ModalContext";
import type { ModalContextType } from "../../../@types/index.types";

function PopUp({ children }) {
	const { closeModal } = useContext(ModalContext) as ModalContextType;

	return (
		<div className="fixed inset-0 z-50 " onClick={() => closeModal("popup")}>
			<div>{children}</div>
		</div>
	);
}

export default PopUp;
