import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import { Routes, Route } from "react-router-dom";
import Trendings from "./Components/Trendings";
import NewsAndArticles from "./Components/NewsAndArticles";
import Browse from "./Components/Browse";
import Blog from "./Components/Blog";
import ContactUs from "./Components/ContactUs";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />

              <Hero />
              <Trendings />
              <NewsAndArticles />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
