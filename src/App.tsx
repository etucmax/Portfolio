import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <Helmet>
        <title>Jastrel Acebu - Portfolio</title>
        <meta name="description" content="Professional Portfolio - Showcasing my skills, projects, and experience" />
      </Helmet>
      
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          } />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
