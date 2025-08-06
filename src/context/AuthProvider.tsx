import { useState, useEffect } from "react";
import { loginUser } from "../utility/services/auth";
import { type LoginPayload, type User } from "../Types";
import { AuthContext } from "./AuthContext";
import { type AuthContextType } from "../Types";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("authToken")
  );
  const [user, setUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("authUser") || "null")
  );
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (payload: LoginPayload) => {
    try {
      setLoading(true);
      setError(null);
      const response = await loginUser(payload);
      const { token, user } = response.data;
      localStorage.setItem("authToken",token);
      localStorage.setItem("authUser", JSON.stringify(user));
      setToken(token);
      setUser(user);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    setToken(null);
    setUser(null);
  };

  // ✅ Auto logout after token expiration (optional simple example)
  useEffect(() => {
    if (!token) return;
    const payload = JSON.parse(atob(token.split(".")[1]));
    const expiration = payload.exp * 1000;
    const timeout = expiration - Date.now();

    if (timeout <= 0) {
      logout();
    } else {
      const timer = setTimeout(logout, timeout);
      return () => clearTimeout(timer);
    }
  }, [token]);

  const value: AuthContextType = {
    token,
    user,
    login,
    logout,
    isLoading,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
