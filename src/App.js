import NavBar from "./components/Nav/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Boutique } from "./pages/Boutique";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/spiritueux" element={<Boutique/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
