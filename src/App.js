import "./App.css";
import BoostLink from "./layout/boostlink/BoostLink";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import ShortLink from "./layout/shortLink/ShortLink";
import Slide from "./layout/slide/Slide";
import Statics from "./layout/statics/Statics";

function App() {
  return (
    <div className="App">
      <Header/>
      <Slide/>
      <div className="bg-gray">

      <ShortLink/>
      <Statics/>
      </div>
      <BoostLink/>
      <Footer/>
    </div>
  );
}

export default App;
