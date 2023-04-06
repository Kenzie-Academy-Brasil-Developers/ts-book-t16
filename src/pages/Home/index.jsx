import { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { api } from "../../services/api";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    async function getBooks() {
      const response = await api.get("/books", {
        params: {
          name_like: searchParams.get('search') || ''
        }
      });

      setBooks(response.data);
    }

    getBooks();
  }, [searchParams.get('search')]);

  return (
    <main>
      <section>
        <Header />

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
