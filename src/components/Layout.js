import styled from 'styled-components';

const LayoutContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 5%;

  color: white;
`;

function Layout({ children }) {
  return (
    <LayoutContainer>
      {children}
    </LayoutContainer>
  )
}

export default Layout;