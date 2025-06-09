import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// const router = createBrowserRouter([
//   {
//   path:'/',
//   element: <Hero />,
//   },
//   {
//   path:'/skills',
//   element: <Skills />,
//   },
//   {
//   path:'/projects',
//   element: <Projects />,
//   },
//   {
//   path:'/about',
//   element: <About />
//   },
//   {
//   path:'/contact',
//   element: <Contacts />,
//   },
//   {
//   path:'/footer',
//   element: <Footer />,
//   },
//     ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>,
)
