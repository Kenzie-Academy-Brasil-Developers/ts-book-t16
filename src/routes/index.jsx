import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Info } from "../pages/Info";
import { Preview } from "../components/Preview";
import { Login } from "../pages/Login";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />}>
          <Route path=":id" element={<Preview />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/info/:id" element={<Info />} />
      </Route>

      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
};
