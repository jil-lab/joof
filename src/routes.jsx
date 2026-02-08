import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About/About';
import Team from './pages/About/Team';
import OurStory from './pages/About/OurStory';
import Programs from './pages/Programs/Programs';
import Healthcare from './pages/Programs/Healthcare';
import Education from './pages/Programs/Education';
import Community from './pages/Programs/Community';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // About routes with nested children
      {
        path: 'about',
        children: [
          {
            index: true,
            element: <About />,
          },
          {
            path: 'team',
            element: <Team />,
          },
          {
            path: 'our-story',
            element: <OurStory />,
          },
        ],
      },
      // Programs routes
      {
        path: 'programs',
        children: [
          {
            index: true,
            element: <Programs />,
          },
          {
            path: 'education',
            element: <Education />,
          },
          {
            path: 'healthcare',
            element: <Healthcare />,
          },
          {
            path: 'community',
            element: <Community />,
          },
        ],
      },
      {
        path: 'donate',
        element: <Donate />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
