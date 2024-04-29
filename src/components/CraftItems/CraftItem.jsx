import { FaStarHalfAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { TbCoinTakaFilled } from 'react-icons/tb';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
function CraftItem({ craft }) {
  const {
    _id,
    image,
    item_name,
    subcategory_name,
    description,
    customization,
    rating,
    price,
    processing_time,
    stock_status,
  } = craft;

  return (
    <div className="flex flex-col justify-between gap-2 md:gap-3  shadow-lg rounded-md px-3 py-3 font-fontPrimary">
      <div>
        <div className="relative">
          <img
            src={image}
            className="h-[300px] md:h-[350px] w-full md:w-[400px] rounded-t-md"
            alt=""
          />
          <p className="absolute top-12 px-3 py-1 -left-2 rounded-full -rotate-45 bg-gray-700 text-white font-fontPrimary">
            {customization == 'Yes' ? 'Customizable' : 'Not Customizable'}
          </p>
        </div>
        <p className="bg-gray-800 text-white text-center rounded-b-md">
          {stock_status}
        </p>
      </div>
      <Fade delay={300}>
        <div className="p-3 flex flex-col  space-y-2">
          <h2 className="text-lg font-semibold">
            SubCategory Name: {subcategory_name}
          </h2>{' '}
          <hr className="border border-black" />
          <p>
            <span className="font-semibold">Product Name:</span> {item_name}
          </p>
          <p>
            <span className="font-semibold">Description:</span> {description.length>55?description.substring(0,55)+"...":description}
          </p>
          <p className="flex items-center gap-1">
            <span className="font-semibold">Rating:</span>{' '}
            <FaStar className="text-yellow-900" />{' '}
            <FaStar className="text-yellow-900" />{' '}
            <FaStar className="text-yellow-900" />{' '}
            <FaStar className="text-yellow-900" />{' '}
            <FaStarHalfAlt className="text-yellow-900" />
            {rating}
          </p>
          <p className="flex gap-1 items-center text-2xl font-bold">
            <span className="font-semibold text-lg"> Price:</span> <TbCoinTakaFilled />{' '}
            {price} <span className='text-lg font-semibold ml-1'>Taka</span>
          </p>
          <p>
            <span className="font-semibold"> Processing Time:</span>{' '}
            {processing_time}
          </p>
          <div className="w-full">
            <Link className="w-full" to={`/details/${_id}`}>
              <Button className="w-full" color="green">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default CraftItem;
