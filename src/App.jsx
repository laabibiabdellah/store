import Nav from "./COMPONENTS/1_Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Show from "./COMPONENTS/2_SHOW/Show";
import Search from "./COMPONENTS/3_SEARCH/Search";

export default function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Show />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}
