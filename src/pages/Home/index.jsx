import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

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

        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <Link to={`/info/${book.id}`}>{book.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};
