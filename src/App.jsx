import Navbar from "./components/Navbar";
import { useTheme } from "./contexts/ThemeContext.jsx";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SEO from "./seo";
import Background from "./components/Background";

export default function App() {
  const { isDark } = useTheme();
  return (
    <div className={`relative text-gray-900 dark:text-white min-h-screen ${isDark ? 'dark' : ''}`} data-theme={isDark ? 'dark' : 'light'}>

       {/* 🌌 GLOBAL BACKGROUND  */}
      <div className="fixed inset-0 -z-10">
        <Background />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60 dark:bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
      </div>

      {/* 🌐 MAIN CONTENT */}
      <SEO />

      <Navbar />

      <main className="[&>*+*]:mt-[52px] sm:[&>*+*]:mt-[78px] lg:[&>*+*]:mt-[120px] pt-20">

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

    </div>
  );
}
