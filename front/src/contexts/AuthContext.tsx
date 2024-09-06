import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
const AuthContext = createContext();

function AuthProvider({ children }: { children: React.ReactNode }) {
	const [loginForm, setLoginForm] = useState(false);
	const [loged, setLoged] = useState(false);
	const [authData, setAuthData] = useState(null);
	const [error, setError] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const response = await authService.checkAuth();
				setAuthData(response.user);
				setLoged(true);
			} catch (error) {
				console.log("didnt work");
				setAuthData(null);
				setLoged(false);
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
			setLoginForm(false);
			setLoged(true);
			localStorage;
			navigate("/cart");
		} catch (error) {
			setError("Email or password incorrect. Please try again.");
		}
	};

	const logoutUser = async () => {
		try {
			await authService.logout();
			setAuthData(null);
			setLoged(true);
			navigate("/home");
		} catch (error) {
			setError("Logout failed. Please try again.");
		}
	};

	return (
		<AuthContext.Provider
			value={{
				loginForm,
				setLoginForm,

				authData,
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
