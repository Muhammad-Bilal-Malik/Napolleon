import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import { Routes, Route } from "react-router-dom";
import Trendings from "./Components/Trendings";
import NewsAndArticles from "./Components/NewsAndArticles";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar /> <Hero />
              <Trendings />
              <NewsAndArticles />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
