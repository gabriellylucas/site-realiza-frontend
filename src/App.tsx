import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Section from "./components/Section";
import ProdutoAcao from "./components/ProdutoAcao";
import Industrial from "./components/Industrial";
import Florestal from "./components/Florestal";
import Urbanos from "./components/Urbanos";
import IncendioA from "./components/IncendioA";
import IncendioB from "./components/IncendioB";
import IncendioD from "./components/IncendioD";
import Login from "./pages/Login";
import "./App.css";
import Cadastro from "./pages/Cadastro";


function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Section />
      <ProdutoAcao />
      
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industrial" element={<Industrial />} />
        <Route path="/florestal" element={<Florestal />} />
        <Route path="/urbanos" element={<Urbanos/>} />
        <Route path="/incendioa" element={<IncendioA />} />
        <Route path="/incendiob" element={<IncendioB />} />
        <Route path="/incendiod" element={<IncendioD />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;