import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductoAjeno from "./pages/ProductoAjeno";
import Login from "./pages/LogIn";


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/" element={<Login/>}/>
    
    <Route path="/producto-ajeno" element ={<ProductoAjeno/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
