import { Routes, Route } from "react-router-dom";

import product1 from "./assets/1.jpg";
import product2 from "./assets/2.jpg";
import product3 from "./assets/3.jpg";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Guide from "./components/Guide";
import Autocosmetics from "./components/Autocosmetics";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Shop from "./pages/Shop";

function App() {
  const products = [
    {
      id: 1,
      image: product1,
      title: "ACTIVE FOAM GREEN",
      price: "8.820,00"
    },
    {
      id: 2,
      image: product2,
      title: "ACTIVE FOAM RED",
      price: "8.820,00"
    },
    {
      id: 3,
      image: product3,
      title: "ACTIVE FOAM BLUE",
      price: "8.820,00"
    }
  ];

  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/product/:id" element={<Product products={products} />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>

      <Guide />

      <Autocosmetics />

      <Footer />
    </>
  );
}

export default App;
