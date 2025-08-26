import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Volunteers from './components/Volunteers'
import Organizations from './components/Organizations'
import Hack2025 from './components/Hack2025'
// import Services from './components/Services'
// import Donate from './components/Donate'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import VolunteersPage from './pages/VolunteersPage'
import OrganizationsPage from './pages/OrganizationsPage'
import Hack2025Page from './pages/Hack2025Page'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Volunteers />
      <Organizations />
      {/* <Hack2025 /> */}
      {/* <Services /> */}
      {/* <Donate /> */}
      <Contact />
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/volunteers" element={<VolunteersPage />} />
              <Route path="/organizations" element={<OrganizationsPage />} />
              <Route path="/hack2025" element={<Hack2025Page />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App