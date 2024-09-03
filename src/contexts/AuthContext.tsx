import { createContext, useState, useRef, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider({ children }: { children: React.ReactNode }) {
	const [loginForm, setLoginForm] = useState(false);
	const emailRef = useRef<HTMLInputElement>(null);

	const focusEmailInput = () => {
		if (emailRef.current) {
			emailRef.current.focus();
		}
	};

	useEffect(() => {
		if (loginForm) {
			focusEmailInput();
		}
	}, [loginForm]);

	return (
		<AuthContext.Provider
			value={{
				loginForm: loginForm,
				setLoginForm: setLoginForm,
				focusEmailInput: focusEmailInput,
				emailRef: emailRef,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthProvider, AuthContext };
