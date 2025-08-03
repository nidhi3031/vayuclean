import { BrowserRouter, Route, Routes } from "react-router-dom";

import ReactLenis, { useLenis } from "lenis/react";

import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <>
      <ReactLenis root>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route index element={<Home />} />
            
          </Routes>
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
