import { BrowserRouter, Route, Routes } from "react-router-dom";

import ReactLenis, { useLenis } from "lenis/react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // <-- Required CSS
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import ContactUs from "./Pages/ContactUs";
import ComingSoon from "./Pages/ComingSoon";
import CategoryList from "./Pages/CategoryList";
import CategoryProducts from "./Pages/CategoryProducts";

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
            <Route path="/categories" element={<CategoryList />} />
            <Route
              path="/category/:categorySlug"
              element={<CategoryProducts />}
            />
            <Route
              path="/category/:categorySlug/:slug"
              element={<ProductDetail />}
            />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ReactLenis>
      <ToastContainer
        position="bottom-center"
        autoClose={3000} // Auto close after 3s
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
};

export default App;
