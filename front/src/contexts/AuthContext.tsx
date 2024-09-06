import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
const AuthContext = createContext();

function AuthProvider({ children }: { children: React.ReactNode }) {
	const [loginForm, setLoginForm] = useState(true);
	const [loged, setLoged] = useState(false);
	const [authData, setAuthData] = useState(null);
	const [error, setError] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const response = await authService.checkAuth();

				if (response) {
					const storedAuthData = localStorage.getItem("authData");
					if (storedAuthData) setAuthData(JSON.parse(storedAuthData));

					setLoged(true);
					console.log(authData);
				}
			} catch (error) {
				console.log("Authentication check failed:", error);
				setAuthData(null);
				setLoged(false);
				localStorage.removeItem("authData");
			}
		};
		checkAuth();
	}, []);

	const loginUser = async (email, password) => {
		setError(null);
		try {
			const userData = await authService.login(email, password);
			console.log("User data received:", userData);
			setAuthData(userData);
			console.log(userData);
			localStorage.setItem("authData", JSON.stringify(userData));

			setLoginForm(false);
			setLoged(true);
			localStorage;
			navigate("/");
		} catch (error) {
			setError("Email or password incorrect. Please try again.");
		}
	};

	const logoutUser = async () => {
		setError(null);
		try {
			await authService.logout();
			setAuthData(null);
			localStorage.removeItem("userData");
			setLoged(false);
			navigate("/");
		} catch (error) {
			setError("Logout failed. Please try again.");
		}
	};

	return (
		<AuthContext.Provider
			value={{
				authData,
				loginForm,
				loginUser,
				logoutUser,
				loged,
				error,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthProvider, AuthContext };
