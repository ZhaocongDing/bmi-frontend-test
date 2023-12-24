import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Artist from "./pages/Artist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist" element={<Artist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
