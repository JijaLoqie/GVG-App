import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { App } from './gvg/App.jsx'
import Home, { homeLoader } from './gvg/pages/home/Home.jsx'
import { BaseError } from './gvg/pages/errors/BaseError.jsx'
import { About } from './gvg/pages/about/About.jsx'
import { Builds } from './gvg/pages/offers/builds/Builds.jsx'
import { Delivery } from './gvg/pages/delivery/Delivery.jsx'
import { Components } from './gvg/pages/offers/components/Components.jsx'
import { Constructor } from './gvg/pages/offers/constructor/Constructor.jsx'
import { Offers } from './gvg/pages/offers/Offers.jsx'
import ComponentPage, { componentLoader } from './gvg/pages/stuffPage/component/ComponentPage.jsx'
import BuildPage, { buildLoader } from './gvg/pages/stuffPage/buildPage/BuildPage.jsx'
import { CartPage } from './gvg/pages/cart/CartPage.jsx'
import { OrderPage } from './gvg/pages/order/OrderPage.jsx'

import { PersistGate } from 'redux-persist/integration/react'
import { persistor, rootStore } from './store.js'
import { Provider } from 'react-redux'
import { appLoader } from './gvg/common/loaders/appLoader.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <BaseError />,
    element: (
      <App />
    ),
    loader: appLoader,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
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
        loader: buildLoader,
      },
      {
        path: "component/:componentId",
        element: <ComponentPage />,
        loader: componentLoader,
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
  <Provider store={rootStore}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
