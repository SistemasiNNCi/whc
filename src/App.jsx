import { useState } from "react";
import Diagnostico from "./pages/formularios/diagnostico/diagnostico.jsx";
import Ganancia from "./pages/formularios/ganancia/ganancia.jsx";
import Home from "./pages/home/index.jsx";
import Conocerte from "./pages/formularios/conocerte/conocerte.jsx";

import { Route, Routes, Navigate } from "react-router-dom";
import "./index.css"
import LayoutGenerico from "../componentes/generales/layoutGenerico.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<LayoutGenerico />}>
        <Route path="/" element={<Home />} />

        <Route path="/formularios/diagnostico" element={<Diagnostico />} />
        <Route path="/formularios/ganancia" element={<Ganancia />} />
        <Route path="/formularios/conocerte" element={<Conocerte />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
} 
