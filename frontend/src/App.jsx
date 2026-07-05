import { BrowserRouter, Routes, Route } from "react-router-dom";
import Showcase from "./pages/Showcase";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CreateProduct from "./pages/CreateProduct";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/showcase" element={<Showcase />}/>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;