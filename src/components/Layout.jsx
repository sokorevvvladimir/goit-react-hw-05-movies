import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 40px;
  }

  &.active {
    color: #ffffff;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    transform: scaleX(0);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const Header = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #b5bdf0;
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 40px;
  font-size: 18px;
  font-weight: 600;
  box-shadow: rgb(171, 169, 188) 0px 20px 30px -10px;
`;

const Footer = styled.footer`
  text-align: center;
  font-weight: 600;
`;

const Content = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  flex-grow: 1;
`;

const Layout = () => {
  return (
    <Content>
      <StyledDiv>
        <Header>
          <nav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </nav>
        </Header>
        <main>
          <Outlet />
        </main>
      </StyledDiv>
      <Footer>2022 &#169;</Footer>
    </Content>
  );
};

export default Layout;
