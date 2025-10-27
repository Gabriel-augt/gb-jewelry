import About from "./components/about/About";
import HomePage from "./components/homePage/HomePage";
import NavBar from "./components/navBar/NavBar";
import LatestCollections from "./latestCollections/LatestCollections";
import OneAndOnly from "./components/oneAndOnly/OneAndOnly";
import Shop from "./components/shop/Shop";
import FindUs from "./components/findUs/FindUs";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <About />
      <LatestCollections />
      <OneAndOnly />
      <Shop />
      <FindUs />
    </div>
  );
}
