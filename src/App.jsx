import { useEffect } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { Crisp } from "crisp-sdk-web";

function App() {
  useEffect(() => {
    // Set Crisp website ID dynamically
    // const meta = document.createElement("meta");
    // meta.name = "crisp-site-verification";
    // meta.content = "42db37e0-15c9-48d0-97e7-22af755dcf02";
    // document.head.appendChild(meta);

    Crisp.configure("42db37e0-15c9-48d0-97e7-22af755dcf02");

    // Clean up function
    return () => {
      // Remove meta tag
      // document.head.removeChild(meta);
    };
  }, []);
  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
    </div>
  );
}

export default App;
