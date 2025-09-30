import './App.css'
import { useEffect, useMemo, useState } from 'react'
import { resume } from './data/resume' 
import { Header } from './components/Header'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const routes = useMemo(() => ([
    { key: 'about', label: 'About' },
    { key: 'experience', label: 'Experience' },
    { key: 'projects', label: 'Projects' },
    { key: 'skills', label: 'Skills' },
    { key: 'education', label: 'Education' },
    { key: 'contact', label: 'Contact' }
  ]), [])

  const getRouteFromHash = () => {
    const hash = window.location.hash.replace(/^#\/?/, '')
    return routes.some(r => r.key === hash) ? hash : 'about'
  }

  const [route, setRoute] = useState(getRouteFromHash())

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [routes])

  useEffect(() => {
    const current = routes.find(r => r.key === route)
    document.title = `${resume.name} – ${current?.label ?? 'Resume'}`
  }, [route, routes])

  return (
    <>
      <Header resume={resume} currentRoute={route} routes={routes} />
      <main>
        {route === 'about' && <About summary={resume.summary} />}
        {route === 'experience' && <Experience items={resume.experience} wide />}
        {route === 'projects' && <Projects items={resume.projects} wide />}
        {route === 'skills' && <Skills items={resume.skills} />}
        {route === 'education' && <Education items={resume.education} />}
        {route === 'contact' && <Contact email={resume.email} location={resume.location} />}
      </main>
      <Footer name={resume.name} />
    </>
  )
}

export default App
