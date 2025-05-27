import Footer from "./Components/Footer";

import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import { Routes, Route } from "react-router-dom";

import Browse from "./Components/Browse";
import Blog from "./Components/Blog";
import ContactUs from "./Components/ContactUs";
import Faq from "./Components/Faq";
import SingleBlog from "./Components/SingleBlog";
import ImageSlice from "./Components/ImageSlice";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/singleblog" element={<SingleBlog />} />
        <Route path="/imageslice" element={<ImageSlice />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
