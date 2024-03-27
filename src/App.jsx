import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError
} from "react-router-dom";
import Home from './pages/Home'
import About from './components/About'

const App = () => {

  const ErrorBoundary = () => {
    let error = useRouteError();
    console.error(error);
    // Uncaught ReferenceError: path is not defined
    return <div>Dang! It's a 404...</div>;
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'projects',
          element: <About />
        },
        {
          path: 'contact',
          element: <About />
        },
      ],
      
      errorElement: <ErrorBoundary />
    },
  ]);


  return (
    <RouterProvider router={router} />
  )
}

export default App
