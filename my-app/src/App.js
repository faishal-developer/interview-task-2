import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AuthProvider from "./Pages/Hooks/AuthProvider";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import OneService from "./Pages/OneService/OneService";
import Footer from "./Pages/shared/Footer/Footer";
import Header from "./Pages/shared/Header/Header";


function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:id" element={<OneService />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
