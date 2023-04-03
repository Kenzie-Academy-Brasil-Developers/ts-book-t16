import { RoutesMain } from "./routes";
import { Global } from "./styles/GlobalStyle";

export const App = () => {
  return (
    <>
      <Global />
      <RoutesMain />
    </>
  );
};


// Rota => o caminho da sua página => /home, /register, /feed