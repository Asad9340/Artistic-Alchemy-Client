import Banner from "../../components/Banner/Banner"
import Categories from "../../components/Categories/Categories";
import CraftItems from "../../components/CraftItems/CraftItems"
import Testimonials from "../../components/Testimonials/Testimonials";
import SupportService from './../../components/SupportService/SupportService';

function Homepage() {
  return (
    <div>
      <Banner />
      <CraftItems />
      <Categories />
      <SupportService />
      <Testimonials />
    </div>
  );
}

export default Homepage