import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./pages/Layout"
import Galleriapage from "./pages/Galleriapage"
import Startslideshow from "./pages/Startslideshow"

function App() {
  

  return (
    <main>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Galleriapage/>} />
          <Route path="/Startslideshow/:id/:name" element={<Startslideshow />} />
          

          </Route>
        
      </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App
