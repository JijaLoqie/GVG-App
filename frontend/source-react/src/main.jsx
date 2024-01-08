import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { themes } from "./gvg/common/styles/themes.js"

import { App } from './gvg/App.jsx'
import { BaseError } from './gvg/pages/errors/BaseError.jsx'
import { Home } from './gvg/pages/home/Home.jsx'
import { About } from './gvg/pages/about/About.jsx'
import { Builds } from './gvg/pages/offers/builds/Builds.jsx'
import { Delivery } from './gvg/pages/delivery/Delivery.jsx'
import { Components } from './gvg/pages/offers/components/Components.jsx'
import { Constructor } from './gvg/pages/offers/constructor/Constructor.jsx'
import { Offers } from './gvg/pages/offers/Offers.jsx'
import { BuildPage } from './gvg/pages/stuffPage/buildPage/BuildPage.jsx'
import { ComponentPage } from './gvg/pages/stuffPage/component/ComponentPage.jsx'
import { BuildLoader } from './gvg/stuff/builds/BuildLoader.jsx'
import { ComponentLoader } from './gvg/stuff/components/ComponentLoader.jsx'
import { CartPage } from './gvg/pages/cart/CartPage.jsx'
import { OrderPage } from './gvg/pages/order/OrderPage.jsx'

import { CssBaseline } from '@mui/material'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, rootStore } from './store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <BaseError />,
    element: (
      <App />
    ),
    children: [
      {
        index: true,
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
          <About />
        ),
      },
      {
        path: "cart",
        element: (
          <CartPage />
        ),
      },
      {
        path: "order",
        element: (
          <OrderPage />
        ),
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={themes.darkTheme}>
    <CssBaseline />
    <Provider store={rootStore}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </ThemeProvider>
);
