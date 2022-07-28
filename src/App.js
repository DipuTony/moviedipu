import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleView from "./Pages/SingleView";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single" element={<SingleView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
