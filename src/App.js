import { BrowserRouter, Route, Routes } from "react-router-dom";
import Giftcard from "./pages/Dashboard/GiftCards";
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
            <Route path="/" element={<Giftcard />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
