import { BrowserRouter, Route, Routes } from "react-router-dom";
import Giftcard from "./pages/Dashboard/GiftCards";
import Crypto from "./pages/Dashboard/Crypto";
import Customers from "./pages/Dashboard/Cusomers";
import ScrollToTop from "./components/ScrollManager";
import "antd/dist/antd.css";
import Login from "./pages/Auth/login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/" element={<Giftcard />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
