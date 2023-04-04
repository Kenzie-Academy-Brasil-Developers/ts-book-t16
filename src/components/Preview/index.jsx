import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";

export const Preview = () => {
    const { id } = useParams();

    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log('Teste', book)
  
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
    }, [id]);
  
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

          <Link to={`/info/${book.id}`}>Mais info</Link>
        </section>
      </main>
    );
};

// inicialização -> 
    // id -> 1
    // book -> null
    // loading -> true
// montagem -> return da aplicação -> Buscando livro
// montado -> useEffect


// inicialização -> 
    // id -> 1
    // book -> { ... }
    // loading -> false
// montagem -> return da aplicação -> Buscando livro
// montado -> useEffect


// function teste() {
//     return 'teste';

//     const teste = 2;
// }