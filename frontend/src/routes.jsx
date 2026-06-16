import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

// Lazy load other pages for better performance
const About = lazy(() => import('./pages/About/About'));
const Team = lazy(() => import('./pages/About/Team'));
const Advisors = lazy(() => import('./pages/About/Advisors'));
const Reports = lazy(() => import('./pages/About/Reports'));
const Programs = lazy(() => import('./pages/Programs/Programs'));
const Healthcare = lazy(() => import('./pages/Programs/Healthcare'));
const Education = lazy(() => import('./pages/Programs/Education'));
const Community = lazy(() => import('./pages/Programs/Community'));
const Donate = lazy(() => import('./pages/Donate'));
const Contact = lazy(() => import('./pages/Contact'));
const NewsList = lazy(() => import('./pages/News/NewsList'));
const NewsPost = lazy(() => import('./pages/News/NewsPost'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
);

// Wrapper to add Suspense to lazy-loaded components
const withSuspense = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

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
            element: withSuspense(About),
          },
          {
            path: 'team',
            element: withSuspense(Team),
          },
          {
            path: 'advisors',
            element: withSuspense(Advisors),
          },
          {
            path: 'reports',
            element: withSuspense(Reports),
          },
        ],
      },
      // Programs routes
      {
        path: 'programs',
        children: [
          {
            index: true,
            element: withSuspense(Programs),
          },
          {
            path: 'education',
            element: withSuspense(Education),
          },
          {
            path: 'healthcare',
            element: withSuspense(Healthcare),
          },
          {
            path: 'community',
            element: withSuspense(Community),
          },
        ],
      },
      {
        path: 'donate',
        element: withSuspense(Donate),
      },
      {
        path: 'contact',
        element: withSuspense(Contact),
      },
      // News routes
      {
        path: 'news',
        children: [
          {
            index: true,
            element: withSuspense(NewsList),
          },
          {
            path: ':slug',
            element: withSuspense(NewsPost),
          },
        ],
      },
    ],
  },
]);

export default router;
