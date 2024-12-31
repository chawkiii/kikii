import React from "react";
import Nav from "../components/nav";
import Header from "../components/header";
import Footer from "../components/footer";
import Contact from "../components/contact";

function Home() {
  return (
    <>
      <div className="page_container">
        <Nav />
        <Header />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Home;
