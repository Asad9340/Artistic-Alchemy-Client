import { Outlet } from "react-router-dom"
import NavBar from "../Pages/Shared/NavBar/NavBar"
import Footer from "../Pages/Shared/Footer/Footer"

function Root() {
  return (
    <div>
      <NavBar />
      <div className="max-w-5xl mx-auto">
      <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default Root