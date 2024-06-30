import NavBar from "./components/Nav/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Boutique } from "./pages/Boutique";
import  ProductDetail  from "./pages/products/ProductDetail";
import ScrollToTop from './components/Nav/ScrollToTop';  // Assurez-vous que le chemin est correct

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/spiritueux" element={<Boutique/>}/>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
