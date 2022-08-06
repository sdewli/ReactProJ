import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav";
import TopBar from "./Components/TopBar";
import Search from "./Components/Search";
import Details from "./Details";
function App() {
  return (
    <>
      <TopBar />

      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/resource/:id" element={<Details/>} />
      </Routes>
    </>
  );
}

export default App;
