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
    return () => Crisp.configure("82562783-af57-47dd-8b20-30f7dc6ffe01");
  }, []);
  useEffect(() => {
    configureCrisp();
  }, [configureCrisp]);
  /////////////
  useEffect(() => {
    if (loading) {
      document.body.classList.add("no-scroll");
      const timeout = setTimeout(() => setLoading(false), 1600);
      return () => clearTimeout(timeout);
    } else {
      // document.body.classList.add("loading-animation-body");
      document.body.classList.remove("no-scroll");
    }
  }, [loading]);
  useEffect(function () {
    document.body.addEventListener("animationstart", function () {
      document.body.classList.add("loading-animation-body");
    });
  }, []);
  return (
    <div className="container">
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
          <span className="amr-loader"> Code With Amr</span>
        </div>
      ) : (
        <>
          <Header />
          <Hero />
          <div className="divider" />
          <Main />
          <div className="divider" />
          <Contact />
          <div className="divider" />
          <Footer />{" "}
        </>
      )}
    </div>
  );
}

export default App;
