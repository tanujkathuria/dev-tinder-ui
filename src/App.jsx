import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<div>profiles page </div>} />
          <Route path="/connections" element={<div>connections page </div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
