import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Post from "./pages/Post/Post";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/posts/:id" element={<Post></Post>}></Route>
        <Route path="/about-us" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
