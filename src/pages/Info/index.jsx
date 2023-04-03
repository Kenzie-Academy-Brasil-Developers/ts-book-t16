import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

export const Info = () => {
  const { id } = useParams();

  const [book, setBook] = useState([]);

  useEffect(() => {
    async function getBook() {
      const response = await api.get(`/books/${id}`);

      console.log(response.data)

      setBook(response.data);
    }

    getBook();
  }, []);


  return (
    <main>
      <section>
        <h1>Info</h1>
      </section>
    </main>
  );
};
