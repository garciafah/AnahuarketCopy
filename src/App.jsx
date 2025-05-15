import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/assets/styles/index.css"
import Login from "./pages/LogIn";
import Registro from "./pages/Registro";
import Main from "./pages/Main";
import Perfil from "./pages/Perfil"
import ProductoAjeno from "./pages/ProductoAjeno";
import AgregarProducto from "./pages/AgregarProducto";
import EditarPerfil from "./pages/EditarPerfil";
import ProductoPropio from "./pages/ProductoPropio";
import EditarProducto from "./pages/EditarProducto";

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/registro" element={<Registro/>}/> 
    <Route path="/main" element={<Main/>}/> 
    <Route path="/perfil" element={<Perfil/>}/> 
    <Route path="/producto" element={<ProductoPropio/>}/> 
    <Route path="/producto-ajeno" element={<ProductoAjeno/>}/> 
    <Route path="/agregar-producto" element={<AgregarProducto/>}/> 
    <Route path="/editar-producto" element={<EditarProducto/>}/> 
    <Route path="/editar-perfil" element={<EditarPerfil/>}/> 
    
  </Routes>
  </BrowserRouter>
  )
}

export default App
