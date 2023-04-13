import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { BookProvider } from "../../providers/BookProvider";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!user) {
    return <Navigate to="/" state={location} />; // envia para o login
  }

  return (
    <BookProvider>
      <Outlet />
    </BookProvider>
  );
};
