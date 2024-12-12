import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Statics from './Components/Statics/Statics.jsx';
import DashBoard from './Components/DashBoard/DashBoard.jsx';
import GadgetDetails from './Components/GadgetDetails/GadgetDetails.jsx';
import Gadgets from './Components/Gadgets/Gadgets.jsx';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/deviceCategories.json'), 
        children: [
          {
            path: '/',
            element: <Gadgets></Gadgets>,
            loader: () => fetch('../devices.json'),
          },
          {
            path: '/category/:categories',
            element: <Gadgets></Gadgets>,
            loader: () => fetch('../devices.json'),

          },
        ]
      },
      {
        path: 'gadgets/:gadgetID',
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch('/devices.json') // do not load all the books for one book.
      },
      {
        path: '/statics',
        element: <Statics></Statics>
      },
      {
        path: '/dashboard',
        element: <DashBoard></DashBoard>,
        loader: () => fetch('/devices.json') 
      },
    ]
   
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
