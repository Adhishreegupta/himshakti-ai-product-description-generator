import { BrowserRouter, Routes, Route } from "react-router-dom";
import Showcase from "./pages/Showcase";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CreateProduct from "./pages/CreateProduct";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/showcase" element={<Showcase />}/>
        <Route path="/" element={<Home />} />
        <Route path="/create-product" element={<ProtectedRoute><CreateProduct /></ProtectedRoute>}/>
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute> }/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id"element={<ProductDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;