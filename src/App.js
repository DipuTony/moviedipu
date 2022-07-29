import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleView from "./Pages/SingleView";
import Error from "./Pages/Error";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single/:id" element={<SingleView />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
