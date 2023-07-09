import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Header } from "./Components/Header";
import { Home } from "./Pages/Home";
import Menu from "./Pages/Menu";
import {ProductDetail} from "./Pages/ProductDetail";
import NotFound from "./Pages/NotFound";
import { Login } from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
export const Routers = () => {
  return (
  <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/Menu/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
  </div>
  );
};
