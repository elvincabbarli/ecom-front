import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Layouts/Footer/Footer";
import Header from "./components/Layouts/Header/Header";
import Policy from "./components/Layouts/Policy/Policy";
import AuthPage from "./pages/AuthPage";
import BlogDetails from "./pages/BlogDetails";
import BlogPage from "./pages/BlogPage";
import CardPage from "./pages/CardPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Home from "./pages/Home";
import ShopPage from "./pages/ShopPage";
import { Route, Routes } from 'react-router-dom'
import SearchModal from "./components/Modals/SearchModal/SearchModal";
import { useEffect, useState } from "react";
import DialogModal from "./components/Modals/DialogModal/DialogModal";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isSearchOpened, setIsSearchOpened] = useState(false)
  const [isModalOpened, setIsModalOpened] = useState(false)
  
  useEffect(() => {
    const dialogStatus = localStorage.getItem('dialog') ? JSON.parse(localStorage.getItem('dialog')) : localStorage.setItem('dialog' , JSON.stringify(isModalOpened))

    setInterval(() => {
      setIsModalOpened(dialogStatus)
    }, 2000);
  } , [isModalOpened])

  return (
    <>
      <Header setIsSearchOpened={setIsSearchOpened} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/cart" element={<CardPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
      <SearchModal isSearchOpened={isSearchOpened} setIsSearchOpened={setIsSearchOpened} />
      <DialogModal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
      <Policy />
      <Footer />
    </>
  );
}

export default App;
