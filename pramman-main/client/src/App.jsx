import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Body from "./components/Body";
import ImageSection from "./components/ImageSection";
import Information from "./components/Information";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Body />
      <ImageSection />
      <Information />

      <Feature />
      <ContactSection />
      <Footer />

      <Link to={"/auth/login"}></Link>
      <Link to={"/auth/register"}></Link>
    </>
  );
};

export default App;
