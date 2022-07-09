import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import About from "./pages/About";
import Home from "./pages/Home";
import Post from "./pages/Post";



function App() {
  return (
    <div>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/post/:id" element={<Post/>}/>
      </Routes>
    </div>
  );
}

export default App;
