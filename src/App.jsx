import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

 function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-32">
        
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
export default App;