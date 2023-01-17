import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { NextUIProvider, createTheme } from "@nextui-org/react"

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      background: "#222831",
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <NextUIProvider theme={darkTheme}>
      <App />
    </NextUIProvider>
  </React.StrictMode>
)
