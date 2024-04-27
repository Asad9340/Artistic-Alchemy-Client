import { FaStar } from 'react-icons/fa';
import { BiSolidQuoteAltRight } from "react-icons/bi";
function Testimonials() {
  return (
    <div className="mt-10 lg:mt-14 font-fontPrimary">
      <div className="space-y-2">
        <h2 className="text-lg md:text-2xl font-medium lg:font-semibold text-center">
          Our Testimonials
        </h2>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-bold text-center">
          What Client Say
        </h2>
      </div>
      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3 mt-6 md:mt-8">
        <div className="p-4 md:p-6 border rounded-lg">
          <div className="flex gap-2 text-yellow-900 my-4">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-4xl">
            <BiSolidQuoteAltRight />
          </p>
          <p className="text-[#808080]">
            Exceptional service and quality! Could not be happier with my
            purchase.Prompt delivery and excellent communication. Highly
            recommend!
          </p>
          <div className="flex gap-6 items-center">
            <div className="mt-4 md:mt-6">
              <img
                className="w-20 h-20 rounded-full"
                src="https://kitpro.site/textiles/wp-content/uploads/sites/134/2022/12/testi-2.jpg"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-lg">Fara Ninie</h3>
              <p className="text-sm">Designation</p>
            </div>
          </div>
        </div>
        <div className="p-4 md:p-6 border rounded-lg">
          <div className="flex gap-2 text-yellow-900 my-4">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-4xl">
            <BiSolidQuoteAltRight />
          </p>
          <p className="text-[#808080]">
            Exceptional service and quality! Could not be happier with my
            purchase.Prompt delivery and excellent communication. Highly
            recommend!
          </p>
          <div className="flex gap-6 items-center">
            <div className="mt-4 md:mt-6">
              <img
                className="w-20 h-20 rounded-full"
                src="https://kitpro.site/textiles/wp-content/uploads/sites/134/2022/12/testi-1.jpg"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-lg">Fara Ninie</h3>
              <p className="text-sm">Designation</p>
            </div>
          </div>
        </div>
        <div className="p-4 md:p-6 border rounded-lg">
          <div className="flex gap-2 text-yellow-900 my-4">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-4xl">
            <BiSolidQuoteAltRight />
          </p>
          <p className="text-[#808080]">
            Exceptional service and quality! Could not be happier with my
            purchase.Prompt delivery and excellent communication. Highly
            recommend!
          </p>
          <div className="flex gap-6 items-center">
            <div className="mt-4 md:mt-6">
              <img
                className="w-20 h-20 rounded-full"
                src="https://kitpro.site/textiles/wp-content/uploads/sites/134/2022/12/testi-3.jpg"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-lg">Fara Ninie</h3>
              <p className="text-sm">Designation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
