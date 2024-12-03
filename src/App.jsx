import { Features } from "./sections/Features";
import Header from "./sections/Header";
import { Hero } from "./sections/Hero";

function App() {
  return (
    <main>
      <div className="overflow-hidden">
        <Header />
        <Hero />
        <Features />
      </div>
    </main>
  );
}

export default App;
