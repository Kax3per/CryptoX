import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import AppShowcase from "./components/AppShowcase";
import AppDescription from "./components/AppDescription";
import EndSections from "./components/EndSection";

function App() {
  return (
   <div className="w-full overflow-x-hidden flex flex-col gap-20 md:gap-0">

      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Partners />
      <AppDescription />
      <AppShowcase />
      
<EndSections />
     
    </div>
  );
}

export default App;