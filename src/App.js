import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "@nextui-org/react"

import Header from "./components/Header"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import ProjectDisplay from "./pages/ProjectDisplay"
import Footer from "./components/Footer"
import { GradientBackground } from "./styles/GradientBackground"


function App() {
  return (
    <BrowserRouter>
      <Container xl css={{ p: 0 }}>
        <GradientBackground />

        <div style={{ position: "relative", maxWidth: "100%", height: "auto" }}>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDisplay />} />
          </Routes>

          <Footer />
        </div>
      </Container>
    </BrowserRouter>
  )
}

export default App
