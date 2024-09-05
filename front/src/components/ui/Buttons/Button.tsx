import type { ReactNode } from "react";

interface FooterButtonProps {
	children: ReactNode;
}

function Button({ children }: FooterButtonProps) {
	return (
		<button
			type="submit"
			className=" w-full text-s-regular bg-button-default-background border border-button-default-border rounded-lg hover:bg-button-hover-background hover:border-button-hover-border active:bg-button-active-background active:border-button-active-border text-main-highest py-1 px-4 w-fit"
		>
			{children}
		</button>
	);
}

export default Button;
