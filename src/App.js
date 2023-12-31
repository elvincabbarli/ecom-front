import "./App.css";
import Contact from "./components/Contact/Contact";
import Policy from "./components/Layouts/Policy/Policy";
import AuthPage from "./pages/AuthPage";
import BlogDetails from "./pages/BlogDetails";
import BlogPage from "./pages/BlogPage";
import CardPage from "./pages/CardPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Home from "./pages/Home";
import ShopPage from "./pages/ShopPage";
import { Route, Routes } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfilePage from "./pages/ProfilePage";

function App() {
 return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/cart" element={<CardPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Policy />
    </>
  );
}

export default App;
