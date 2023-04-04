import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { api } from "../../services/api";
import { Card } from "../../components/Card";

export const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const response = await api.get("/books");

      setBooks(response.data);
    }

    getBooks();
  }, []);

  return (
    <main>
      <section>
        <h1>Teste</h1>

        <Outlet />

        <ul>
          {books.map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </ul>
      </section>
    </main>
  );
};
