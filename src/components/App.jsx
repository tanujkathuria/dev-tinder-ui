import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Body from "./Body";
import Footer from "./Footer";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Profile from "./Profile";
import Connections from "./connections";
import Requests from "./Requests";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Navbar />
          <Routes>
            <Route path="/" element={<Body />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
