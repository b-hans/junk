import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

const container = document.getElementById('app')
const root = createRoot(container)
const app = document.getElementById('app')
root.render(<BrowserRouter><App /></BrowserRouter>)