import Faq from "./sections/Faq";
import { Features } from "./sections/Features";
import Header from "./sections/Header";
import { Hero } from "./sections/Hero";
import Pricing from "./sections/Pricing";

function App() {
  return (
    <main>
      <div className="overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Pricing />
        <Faq />
      </div>
    </main>
  );
}

export default App;
