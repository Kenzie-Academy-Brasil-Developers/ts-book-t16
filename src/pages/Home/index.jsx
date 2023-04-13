import { Outlet } from "react-router-dom";

import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { BookContext } from "../../providers/BookProvider";

export const Home = () => {
  const { books } = useContext(BookContext);

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
