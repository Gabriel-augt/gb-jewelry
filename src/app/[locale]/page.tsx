import About from "../components/about/About";
import HomePage from "../components/homePage/HomePage";
import NavBar from "../components/navBar/NavBar";
import NavBarMobile from "../components/navBar/NavBarMobile";
import LatestCollections from "../components/latestCollections/LatestCollections";
import OneAndOnly from "../components/oneAndOnly/OneAndOnly";
import Shop from "../components/shop/Shop";
import FindUs from "../components/findUs/FindUs";
import SubscribeEmail from "../components/subscribeEmail/SubscribeEmail";
import Footer from "../components/footer/Footer";
import Switchers from "../components/switcher/Switchers";

export default function Home() {
  return (
    <div>
      <NavBar />
      <NavBarMobile />
      <Switchers />
      <HomePage />
      <About />
      <LatestCollections />
      <OneAndOnly />
      <Shop />
      <FindUs />
      <SubscribeEmail />
      <Footer />
    </div>
  );
}
