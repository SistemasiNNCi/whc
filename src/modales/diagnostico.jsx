import { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Fondo = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ContenedorModal = styled.div`
  background: #ffffff;
  padding: 24px;
  border-radius: 14px;
  width: min(560px, 92%);
  position: relative;
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
`;

const BotonCerrar = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: #0b1b33;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  padding: 6px 10px;
`;

const Titulo = styled.h2`
  margin: 0 0 16px;
  font-size: 22px;
  font-weight: 800;
  color: #0b1b33;
`;

const Paso = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Entrada = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d3d7e0;
  border-radius: 8px;
  outline: none;
  &:focus { border-color: #0b1b33; }
`;

const BotonPrincipal = styled.button`
  margin-top: 20px;
  background: #e69a57;
  color: #fff;
  font-weight: 800;
  border: none;
  padding: 12px 14px;
  border-radius: 10px;
  cursor: pointer;
`;

export default function ModalDiagnostico({ onClose }) {
  const [paso, setPaso] = useState(1);

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handler);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler); //con esto se cierra con escape
      document.body.style.overflow = prev; //con esto bloqueo el scroll
    };
  }, [onClose]);

  return (
    <Fondo onClick={onClose} role="dialog">
      <ContenedorModal onClick={(e) => e.stopPropagation()}>
        <BotonCerrar onClick={onClose} aria-label="Cerrar">✕</BotonCerrar>
        <Titulo>Diagnostica tu inversión</Titulo>

        {paso === 1 && (
          <Paso>
            <Entrada placeholder="Nombre o seudónimo" />
            <Entrada placeholder="Correo electrónico" />
            <BotonPrincipal onClick={() => setPaso(2)}>Siguiente</BotonPrincipal>
          </Paso>
        )}

        {paso === 2 && (
          <Paso>
            <p>AQUI IRAN LOS PARAMETROS</p>
            <BotonPrincipal onClick={onClose}>Finalizar</BotonPrincipal>
          </Paso>
        )}
      </ContenedorModal>
    </Fondo>
  );
}
