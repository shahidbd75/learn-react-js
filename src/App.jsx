import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import About from "./components/About/About";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import Products from "./components/Products/Products";
import Checkout from "./components/Checkout/Checkout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home from react router</h1>,
  },
  {
    path: 'about',
    Component: About,
  },
  {
    path: 'layout',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Main,
      },
      {
        path: 'products',
        Component: Products,
      },
      {
        path: 'checkout',
        Component: Checkout,
      }
    ],
  }
]);
function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
