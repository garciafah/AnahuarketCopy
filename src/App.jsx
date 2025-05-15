import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/assets/styles/index.css"
import Login from "./pages/LogIn";
import Registro from "./pages/Registro";
import Main from "./pages/Main";


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/registro" element={<Registro/>}/> 
    <Route path="/main" element={<Main/>}/> 
  </Routes>
  </BrowserRouter>
  )
}

export default App
