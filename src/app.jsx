import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import LoginPage from "./routes/login-page/login-page";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;