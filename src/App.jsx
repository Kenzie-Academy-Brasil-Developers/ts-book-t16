import { AuthProvider } from "./providers/AuthProvider";
import { RoutesMain } from "./routes";
import { Global } from "./styles/GlobalStyle";

export const App = () => {
  return (
    <>
      <Global />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
};

// Rota => o caminho da sua página => /home, /register, /feed