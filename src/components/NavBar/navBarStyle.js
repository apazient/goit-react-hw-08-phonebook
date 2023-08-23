import styled from 'styled-components';
export const Nav = styled.nav`
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(200, 45, 253, 1) 100%
  );
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
  position: fixed;
  height: 70px;
  width: 100%;
  padding: 20px 20px;
  &:a {
    color: black;
    font-size: 700;
  }
`;

export const NavItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
`;
