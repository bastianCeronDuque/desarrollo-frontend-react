// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Form from "./components/Form.jsx";
import Hero from "./components/Hero.jsx";
import Mansory from "./components/Mansory.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Mansory />
      <Form />
      <Footer />
    </>
  );
}

export default App;
