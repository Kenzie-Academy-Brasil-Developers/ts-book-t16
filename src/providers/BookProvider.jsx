import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../services/api";
import { AuthContext } from "./AuthProvider";

export const BookContext = createContext({});

export const BookProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getBooks() {
      const response = await api.get("/books", {
        params: {
          name_like: searchParams.get("search") || "",
        },
      });

      setBooks(response.data);
    }

    getBooks();
  }, [searchParams.get("search")]);

  const handleRegister = async (data) => {
    try {
      const response = await api.post("/books", { ...data, userId: user.id });

      setBooks([...books, response.data]);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BookContext.Provider value={{ books, handleRegister }}>
      {children}
    </BookContext.Provider>
  );
};
