import About from "./components/about/About";
import HomePage from "./components/homePage/HomePage";
import NavBar from "./components/navBar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <About />
    </div>
  );
}
