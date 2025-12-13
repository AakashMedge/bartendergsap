import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"
import { SplitText } from "gsap-trial/SplitText";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);
  
const App = () => {
  return (
    <main>
    <Navbar/>
    <Hero/>
    </main>
  )
}

export default App
