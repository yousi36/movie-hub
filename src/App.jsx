import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Movie } from './pages/Movie';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import './App.css'

function App() {
  const route=createBrowserRouter([
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/Home',
      element:<Home />
    },
    {
      path:'/about',
      element:<About />
    },
    {
      path:'/movie',
      element:<Movie />
    }
    ,
    {
      path:'/contact',
      element:<Contact />
    }
    ])
 
  return (
    <>
     <RouterProvider  router={route}></RouterProvider>
    </>
  )
}

export default App
