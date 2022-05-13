import styled from 'styled-components';
import { StyledButton } from './button';

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledButton>Rooms</StyledButton>
      <StyledButton>Flat Mates</StyledButton>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: lightgray;
  z-index: 0;
`;
