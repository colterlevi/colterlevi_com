import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError
} from "react-router-dom";
import Home from './pages/Home'
import RichTextEditor from './components/modules/RichTextEditor.jsx'
import Blog from './pages/Blog.jsx';
import Resume from './pages/Resume.jsx';

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
          path: '/',
          element: <Resume />,
          children: [
            {
              path: 'editor',
              element: <RichTextEditor />,
            },
          ]
        },
        {
          path: 'blog',
          element: <Blog />,
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
