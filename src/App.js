import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Dashboard";
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
            <Route path="/" element={<HomePage />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
