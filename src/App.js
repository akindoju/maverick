import "./App.scss";
import Preview from "./components/Preview/Preview";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

function App() {
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_ID);
  }, []);

  return (
    <div>
      <Hero />
      <Preview />
      <About />
      <Services />
      <Reviews />
      {/* <LatestCreations /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
