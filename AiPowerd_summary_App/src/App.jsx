import Demo from "./components/Demo";
import Hero from "./components/Hero";

import "./App.css";
import Footer from "./components/Footer";
import Price from "./components/Price";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <Demo />
        <Price></Price>
        <Footer />
      </div>
    </main>
  );
};

export default App;
