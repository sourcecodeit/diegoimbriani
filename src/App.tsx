import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import BeyondCode from './components/BeyondCode';
import Contact from './components/Contact';
import FadeIn from './components/FadeIn';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <Header />
        <FadeIn><About /></FadeIn>
        <FadeIn><Projects /></FadeIn>
        <FadeIn><Timeline /></FadeIn>
        <FadeIn><BeyondCode /></FadeIn>
        <FadeIn><Contact /></FadeIn>
      </div>
    </div>
  );
}

export default App;
