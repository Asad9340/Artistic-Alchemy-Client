import Banner from "../../components/Banner/Banner"
import CraftItems from "../../components/CraftItems/CraftItems"
import Testimonials from "../../components/Testimonials/Testimonials";
import SupportService from './../../components/SupportService/SupportService';

function Homepage() {
  return (
    <div>
      <Banner />
      <CraftItems />
      <SupportService />
      <Testimonials/>
    </div>
  )
}

export default Homepage