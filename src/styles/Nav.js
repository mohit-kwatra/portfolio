import { Navbar } from "@nextui-org/react"
import styled from "styled-components"

export const Nav = styled(Navbar)`
  max-width: 100%;
  position: absolute;
  top: 0;
  background: none;

  & > .nextui-navbar-container {
    background-color: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin-left: 20%;
    margin-right: 20%;
  }

  @media all and (max-width: 649px) {
    & > .nextui-navbar-container {
      margin-left: 5%;
      margin-right: 5%;
      padding: 0 24px;
    }
  }
`
