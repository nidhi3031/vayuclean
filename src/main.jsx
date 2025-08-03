import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

//
// import { FaStarOfLife } from "react-icons/fa";

// ref={containerRef}
// const starRef = useRef();
//   const containerRef = useRef();

// <div ref={starRef} className="star">
//   <FaStarOfLife className="text-5xl" />
// </div>;

// gsap.to(starRef.current, {
//   rotation: 720,
//   transformOrigin: "center",
//   ease: "none",
//   scrollTrigger: {
//     trigger: containerRef.current,
//     start: "top top",
//     end: "bottom 0",
//     scrub: true,
//     markers: true,
//   },
// });
