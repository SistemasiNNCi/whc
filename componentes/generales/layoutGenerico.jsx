import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

const Barra = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 64px;
  background: var(--colorPrincipal);
  display: flex;
  align-items: center;
  box-shadow: 0 8px 20px rgba(2, 20, 42, .12);
`;

const ContenidoBarra = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  height: auto;
  width: 150px;
  display: block;
`;

const Main = styled.main`
  padding: 16px;
`;

export default function LayoutGenerico({ children }) {
  return (
    <>
      <Barra>
        <ContenidoBarra>
          <Logo src="/media/WHC_LogoPNG.png" alt="WHC" />
        </ContenidoBarra>
      </Barra>
      {children ? <Main>{children}</Main> : <Main><Outlet /></Main>}
    </>
  );
}
