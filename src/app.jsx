import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import JoinPage from "./routes/joinPage";
import LoginPage from "./routes/loginPage";
import ProfilePage from "./routes/profilePage";
import ProfileEditPage from './routes/profileEditPage';
import CartPage from "./routes/cartPage";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen(isOpen => !isOpen);
  }
  
  /// mission
  // context api / useContext hook 
  // styled component
  
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home 
      onClick={toggleSideBar} 
      isOpen={isOpen} />} />
      <Route path="/join" element={<JoinPage
        onClick={toggleSideBar}
        isOpen={isOpen}
      />} />
      <Route path="/profile" element={<ProfilePage
        onClick={toggleSideBar}
        isOpen={isOpen}
      />} />
      <Route path="/profileEdit" element={<ProfileEditPage
        onClick={toggleSideBar}
        isOpen={isOpen}
      />} />
      <Route path="/cart" element={<CartPage
        onClick={toggleSideBar}
        isOpen={isOpen}
      />} />
      <Route path="/login" element={<LoginPage
      />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
