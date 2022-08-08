import "./App.css";
import {  Routes, Route ,useParams} from "react-router-dom";
import Nav from "./Components/Nav";
import TopBar from "./Components/TopBar";
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
