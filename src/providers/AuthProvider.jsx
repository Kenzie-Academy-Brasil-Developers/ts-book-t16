import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { api } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem("@ts-book:token");

        if (!token) {
          return;
        }

        const { sub } = jwtDecode(token);

        api.defaults.headers.common.authorization = `Bearer ${token}`;

        const response = await api.get(`users/${sub}`);

        setUser(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const signIn = async (data) => {
    const response = await api.post("/login", data);

    const { user: userResponse, accessToken } = response.data;

    api.defaults.headers.common.authorization = `Bearer ${accessToken}`;

    localStorage.setItem("@ts-book:token", accessToken);

    const toNavigate = location.state?.pathname || '/home';

    setUser(userResponse);
    navigate(toNavigate);
  };

  return (
    <AuthContext.Provider value={{ signIn, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
