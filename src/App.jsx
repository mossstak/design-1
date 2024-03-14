import Hero from './Components/Hero';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import './App.css'

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Hero />
      <About title="About" color="" />
      <Project title="Projects" color="" />
      <Contact title="Contact" color="" />
    </div>
  );
}

export default App;
