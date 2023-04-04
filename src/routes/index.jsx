import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Info } from "../pages/Info";
import { Preview } from "../components/Preview";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path=":id" element={<Preview />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/info/:id" element={<Info />} />

      <Route path="/" element={<Navigate to='/home' />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
};
