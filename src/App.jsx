import Footer from "./components/Footer"
import HomeNav from "./components/HomeNav"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <div>
      <HomeNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
