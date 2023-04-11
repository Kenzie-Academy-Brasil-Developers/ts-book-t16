import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { api } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem("@ts-book:token");

        if (!token) {
          return;
        }

        const { sub } = jwtDecode(token);

        const response = await api.get(`users/${sub}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

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

    localStorage.setItem("@ts-book:token", accessToken);

    setUser(userResponse);

    navigate("/home");
  };

  return (
    <AuthContext.Provider value={{ signIn, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
