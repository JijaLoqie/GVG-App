import React from "react"
// eslint-disable-next-line react/no-deprecated
import { render } from "react-dom"

import App from "./components/App"
import { BrowserRouter } from "react-router-dom"
import { ScrollToTop } from "./components/common/hooks/ScrollToTop"
// import reportWebVitals from './reportWebVitals';


const appDiv = document.getElementById("app")

render(
    <BrowserRouter basename="/">
      <ScrollToTop />
      <App />
    </BrowserRouter>,
  appDiv
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
