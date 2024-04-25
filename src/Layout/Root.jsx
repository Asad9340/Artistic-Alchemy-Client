import { Outlet } from "react-router-dom"
import NavBar from "../Pages/Shared/NavBar/NavBar"
import Footer from "../Pages/Shared/Footer/Footer"

function Root() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Root