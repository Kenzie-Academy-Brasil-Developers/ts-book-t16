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


{/* 
<A value={2}>
  <B value={3}>
    <C/>
  </B>
</A> 
*/}

// C consegue acessar 2 e 3
// B consegue acessa numero 2
// A não consegue acessar numero 3