import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import "./App.css";
import { AppLayout } from "./Layout/AppLayout";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
