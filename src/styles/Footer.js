import styled from "styled-components"

export const StyledFooter = styled.footer`
  width: 100%;
  height: 220px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(5px);
    z-index: 1;
  }
`
