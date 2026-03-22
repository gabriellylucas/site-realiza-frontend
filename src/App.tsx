import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Section from "./components/Section";
import Servicos from "./components/Servicos";
import Industrial from "./components/Industrial";

import "./App.css";
import Florestal from "./components/Florestal";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;