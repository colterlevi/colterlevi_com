import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError
} from "react-router-dom";
import Home from './components/Home'
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
        }
      ],
      
      errorElement: <ErrorBoundary />
    },
    {
      path: 'About',
      element: <About />
    }
  ]);


  return (
    <RouterProvider router={router} />
  )
}

export default App
