import styled from "@emotion/styled";

const FondoModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ContenedorModal = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 14px;
  width: min(500px, 90%);
  position: relative;
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
`;

const BotonCerrar = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: #333;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  padding: 5px 10px;
`;

const TituloModal = styled.h2`
  margin: 0 0 16px;
  font-size: 22px;
  font-weight: 800;
  color: #0b1b33;
`;

const TextoModal = styled.p`
  margin: 0;
  font-size: 16px;
  color: #444;
`;

export default function ModalGanancia({ onClose }) {
  return (
    <FondoModal onClick={onClose}>
      <ContenedorModal onClick={(e) => e.stopPropagation()}>
        <BotonCerrar onClick={onClose}>✕</BotonCerrar>
        <TituloModal>Calcula tu ganancia</TituloModal>
        <TextoModal>Aquí ira la calculadora</TextoModal>
      </ContenedorModal>
    </FondoModal>
  );
}
