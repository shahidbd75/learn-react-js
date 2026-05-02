import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import About from "./components/About/About";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";
import Products from "./components/Products/Products";
import Checkout from "./components/Checkout/Checkout";
import Users from "./components/Users/Users";
import Users2 from "./components/Users2/Users2";
import { Suspense } from "react";
import UserDetails from "./components/UserDetails/UserDetails";

var userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
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
      },
      {
        path: 'users',
        Component: Users,
        loader: () =>  fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'users2',
        element: <Suspense fallback={<h2>Loading...</h2>}><Users2 userPromise={userPromise} /></Suspense>,
      },
      {
        path:'users/:userId',
        Component: UserDetails
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
