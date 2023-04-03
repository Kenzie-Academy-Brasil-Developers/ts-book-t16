import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Info } from "../pages/Info";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/info/:id" element={<Info />} />
    </Routes>
  );
};
