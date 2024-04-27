import { FaStarHalfAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
function CraftItem({ craft }) {
  const {
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
    <div className="flex flex-col gap-2 md:gap-3  shadow-lg rounded-md px-3 py-3 font-fontPrimary">
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
        <p className='bg-gray-800 text-white text-center rounded-b-md'>{stock_status}</p>
      </div>
      <div className="p-3 flex flex-col justify-center space-y-2">
        <h2 className="text-lg font-semibold">
          SubCategory Name: {subcategory_name}
        </h2>{' '}
        <hr className="border border-black" />
        <p>
          <span className="font-semibold">Product Name:</span> {item_name}
        </p>
        <p>
          <span className="font-semibold">Description:</span> {description}
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
        <p>
          <span className="font-semibold"> Price:</span> {price}
        </p>
        <p>
          <span className="font-semibold"> Processing Time:</span> {processing_time}
        </p>
      </div>
    </div>
  );
}

export default CraftItem;
