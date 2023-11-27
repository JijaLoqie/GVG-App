import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {themes} from "./gvg/common/styles/themes.js"

import "./index.css"
import { App } from './App.jsx'
import { BaseError } from './gvg/pages/errors/BaseError.jsx'
import { Home } from './gvg/pages/home/Home.jsx'
import { About } from './gvg/pages/about/About.jsx'
import { Builds } from './gvg/pages/offers/builds/Builds.jsx'
import { Delivery } from './gvg/pages/delivery/Delivery.jsx'
import { Components } from './gvg/pages/offers/components/Components.jsx'
import { Constructor } from './gvg/pages/offers/constructor/Constructor.jsx'
import { Offers } from './gvg/pages/offers/Offers.jsx'
import { BuildPage } from './gvg/pages/stuffPage/build/BuildPage.jsx'
import { ComponentPage } from './gvg/pages/stuffPage/component/ComponentPage.jsx'
import { BuildLoader } from './gvg/stuff/builds/BuildLoader.jsx'
import { ComponentLoader } from './gvg/stuff/components/ComponentLoader.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <BaseError />,
    element: ( 
      <App />
    ),
    children: [
      {
        path: "home",
        element: ( 
          <Home />
        ),
      },
      {
        path: "offers",
        element: (
          <Offers />
        ),
        children: [
          {
            path: "builds",
            element: ( 
              <Builds />
            ),
          },
          {
            path: "components",
            element: ( 
              <Components />
            ),
          },
          {
            path: "constructor",
            element: ( 
              <Constructor />
            ),
          },
        ]
      },
      {
        path: "build/:buildId",
        element: <BuildPage />,
        loader: BuildLoader,
      },
      {
        path: "component/:componentId",
        element: <ComponentPage />,
        loader: ComponentLoader,
      },
      {
        path: "delivery",
        element: (
          <Delivery />
        ),
      },
      {
        path: "about",
        element: (
          <About/>
        ),
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={themes.darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
