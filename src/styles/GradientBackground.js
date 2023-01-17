import styled from "styled-components"
import bg from '../assets/img/background.jpg'

export const GradientBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(30px);
  }
`
