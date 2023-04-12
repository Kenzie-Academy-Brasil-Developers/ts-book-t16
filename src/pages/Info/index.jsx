import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

export const Info = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBook() {
      try {
        const response = await api.get(`/books/${id}`);
  
        console.log(response.data)
  
        setBook(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getBook();
  }, []);

  if(loading) {
    return <p>Buscando livro...</p>
  }

  if(!book) {
    return <p>Livro não foi encontrado</p>
  }

  return (
    <main>
      <section>
        <h1>Info</h1>

        <img src={book.cover} alt={book.name} />
      </section>
    </main>
  );
};
