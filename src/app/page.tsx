import About from "./components/about/About";
import HomePage from "./components/homePage/HomePage";
import NavBar from "./components/navBar/NavBar";
import LatestCollections from "./latestCollections/LatestCollections";
import OneAndOnly from "./components/oneAndOnly/OneAndOnly";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <About />
      <LatestCollections />
      <OneAndOnly />
    </div>
  );
}
