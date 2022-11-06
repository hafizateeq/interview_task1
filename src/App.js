import "./App.css";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Blog />}/>
        <Route path="/single-blog/:id" element={<SingleBlog />} />
      </Routes>
    </div>
  );
}

export default App;
