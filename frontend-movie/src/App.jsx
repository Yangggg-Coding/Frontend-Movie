import "./App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
export default function App() {
  return (
    <>
      <div>
        <NavBar />
        <main className="main-content"> </main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<Favorites />}></Route>
        </Routes>{" "}
      </div>
    </>
  );
}
