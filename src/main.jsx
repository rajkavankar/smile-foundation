import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./index.css"
import HomePage from "./pages/HomePage.jsx"
import AnnualReportPage from "./pages/AnnualReportPage.jsx"
import AboutusPage from "./pages/AboutusPage.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomePage />} />
      <Route path='/annual-report' element={<AnnualReportPage />} />
      <Route path='/aboutus' element={<AboutusPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
