import Home from "./components/Home";
import Links from "./components/Links";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Links />
    </>
  );
}

//   import { BrowserRouter, Route, Routes } from "react-router-dom";
//   import Home from "./pages/Home";
// return (
//   <BrowserRouter>
//     <div className="site-wrap d-flex flex-col min-h-screen">
//       <Navbar />
//       <div className="outlet flex-1"></div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </div>
//   </BrowserRouter>
// );
