import { Link } from "react-router-dom";
import { Container } from "./styles";

export const Card = ({ book }) => {
  return (
    <Container>
      <Link to={`${book.id}`}>
        <img src={book.cover} alt={book.name} />
        <span>{book.name}</span>
        <span>{book.author}</span>
      </Link>
    </Container>
  );
};

// <a /> -> <a /> //Errado
// <a /> -> <button /> //Errado
// <a /> -> <input /> //Errado
// <a /> -> <video controls /> //Errado

// Home -> Home/2  to='2'
// Home => /2 to='/2'

