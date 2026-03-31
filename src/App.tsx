import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import BeyondCode from './components/BeyondCode';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <Header />
        <About />
        <Projects />
        <Timeline />
        <BeyondCode />
        <Contact />
      </div>
    </div>
  );
}

export default App;
