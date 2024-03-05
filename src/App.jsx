// import { useEffect } from "react";
import { useEffect, useMemo, useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { Crisp } from "crisp-sdk-web";

function App() {
  const [loading, setLoading] = useState(true);
  const configureCrisp = useMemo(() => {
    return () => Crisp.configure("42db37e0-15c9-48d0-97e7-22af755dcf02");
  }, []);
  useEffect(() => {
    configureCrisp();
  }, [configureCrisp]);
  /////////////
  useEffect(
    function () {
      if (loading === true) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
      setTimeout(function () {
        setLoading(false);
      }, 2000);
    },
    [loading]
  );
  return (
    <div className="container">
      {loading && (
        <div className="loader-wrapper">
          <div className="loader"></div>
          <span className="amr-loader"> Code With Amr</span>
        </div>
      )}
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
