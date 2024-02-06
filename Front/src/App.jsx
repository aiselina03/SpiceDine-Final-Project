import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Shop from "./pages/Shop";
import ShopDetail from "./pages/ShopDetail";
import Basket from "./pages/Basket";
import Wishlist from "./pages/Wishlist";
import Appointments from "./pages/Appointment";
import ErrorPage from "./pages/ErrorPage";
import LoginRegister from "./pages/Login&Register";
import ChefPage from "./pages/ChefPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopDetail/:id" element={<ShopDetail />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/chef" element={<ChefPage/>} />
          <Route path="/appointment" element={<Appointments />} />
          <Route path="*" element={<ErrorPage/>} />
          <Route path="/loginRegister" element={<LoginRegister/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
