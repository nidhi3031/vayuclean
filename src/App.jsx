import { BrowserRouter, Route, Routes } from "react-router-dom";

import ReactLenis, { useLenis } from "lenis/react";

import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <>
      <ReactLenis root>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ReactLenis>
      <Toaster
        position="bottom-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          duration: 5000,
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "400px",
            width: "300px",
            padding: "8px 10px",
            backgroundColor: "#fff",
            color: "#000",
          },
        }}
      />
    </>
  );
};

export default App;
