import styled from "styled-components"

export const FooterLink = styled.a`
  width: 70px;
  height: 70px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  margin: 20px;
  overflow: hidden;
  transition: 200ms;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    filter: blue(0px);
    transition: 400ms;
    transform: skewX(45deg) translateX(calc(70px + 50%));
  }

  &:hover {
    transform: translateY(-20px);
    &:before {
      transform: skewX(45deg) translateX(calc(-70px - 50%));
    }
  }

  @media all and (max-width: 649px) {
    margin: 10px;
    width: 50px;
    height: 50px;
  }
`
