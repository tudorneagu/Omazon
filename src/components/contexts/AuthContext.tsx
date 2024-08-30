import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
	const [loginForm, setLoginForm] = useState(false);
	return (
		<AuthContext.Provider
			value={{ loginForm: loginForm, setLoginForm: setLoginForm }}
		>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthProvider, AuthContext };
