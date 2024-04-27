import Banner from "../../components/Banner/Banner"
import CraftItems from "../../components/CraftItems/CraftItems"
import SupportService from './../../components/SupportService/SupportService';

function Homepage() {
  return (
    <div>
      <Banner />
      <CraftItems />
      <SupportService/>
    </div>
  )
}

export default Homepage