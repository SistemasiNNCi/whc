import { useState } from "react";
import DiagnosticoModal from "./pages/formularios/diagnostico/diagnostico";
import GananciaModal from "./pages/formularios/ganancia/ganancia";

function App() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      <h1>Formularios para WHC</h1>
      <button onClick={() => setOpen("diagnostico")}>Diagnostico</button>
      <button onClick={() => setOpen("ganancia")}>Calcula Tu Ganancia</button>

      {open === "diagnostico" && (
        <DiagnosticoModal onClose={() => setOpen(null)} />
      )}
      {open === "ganancia" && (
        <GananciaModal onClose={() => setOpen(null)} />
      )}
    </div>
  );
}

export default App;
