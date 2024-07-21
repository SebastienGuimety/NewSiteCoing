import NavBar from "./components/Nav/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Boutique } from "./pages/Boutique";
import  ProductDetail  from "./pages/products/ProductDetail";
import ScrollToTop from './components/Nav/ScrollToTop';  // Assurez-vous que le chemin est correct
import { Provider } from 'react-redux';
import { store } from './redux/store';
import FullPanier from "./pages/Panier/FullPanier";
import PaymentPage from "./pages/Panier/PaymentPage";

function App() {
  return (
    <>
      
        <BrowserRouter>
          <Provider store={store}>
            <NavBar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/spiritueux" element={<Boutique/>}/>
              <Route path="/fullpanier" element={<FullPanier/>}/>
              <Route path="/paiement" element={<PaymentPage/>}/>
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </Provider>
        </BrowserRouter>
    </>
  );
}

export default App;
