import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Section from "./components/Section";
import Servicos from "./components/Servicos";
import Industrial from "./components/Industrial";
import Florestal from "./components/Florestal";
import Urbanos from "./components/Urbanos";
import IncendioA from "./components/IncendioA";
import IncendioB from "./components/IncendioB";
import "./App.css";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Section />
      <Servicos />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;