import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useSearchParams } from "react-router-dom";

import { api } from "../../services/api";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { AuthContext } from "../../providers/AuthProvider";

export const Home = () => {
  const [books, setBooks] = useState([]);
  const { user, loading } = useContext(AuthContext);
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

  if(loading) {
    return <div>Carregando...</div>
  }

  if(!user) {
    return <Navigate to='/' />
  }

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

// prop drilling

// <A  teste='b' />

// const A = ({teste}) => {
//   return(
//     <B teste={teste} /> 
//   )
// }

// const B = ({teste}) => {
//   return(
//     <C teste={teste} /> 
//   )
// }

