import type { ReactNode } from "react";

interface FooterButtonProps {
	children: ReactNode;
}

function ButtonRounded({ children }: FooterButtonProps) {
	return (
		<button
			type="button"
			className=" text-s-regular bg-button-default-background border border-button-default-border rounded-3xl  hover:bg-button-hover-background hover:border-button-hover-border active:bg-button-active-background active:border-button-active-border text-main-highest py-1 px-4 w-full"
		>
			{children}
		</button>
	);
}

export default ButtonRounded;
