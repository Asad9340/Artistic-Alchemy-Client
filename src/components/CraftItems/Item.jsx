import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { FaStarHalfAlt } from 'react-icons/fa';
import { TbCoinTakaFilled } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';

function Item({ craft, handleDelete }) {
  const {
    _id,
    image,
    item_name,
    subcategory_name,
    customization,
    processing_time,
    rating,
    price,
    stock_status,
  } = craft;

  return (
    <div className="flex flex-col md:grid gap-3 md:grid-cols-7 shadow-lg rounded-md px-3 py-5">
      <div className="col-span-3 flex flex-col items-center justify-center">
        <div>
          <img
            src={image}
            className="h-[250px] md:h-[250px] w-full md:w-[250px] rounded-md"
            alt=""
          />
        </div>
        <p className="mt-6 text-center px-6 py-1 bg-orange-700 text-white rounded-full font-semibold">
          {stock_status}
        </p>
      </div>
      <div className="col-span-4 p-3 flex flex-col justify-center space-y-2">
        <h2 className="text-lg font-semibold">
          SubCategory Name: {subcategory_name}
        </h2>{' '}
        <hr className="border border-black" />
        <p>
          <span className="font-semibold">Product Name:</span> {item_name}
        </p>
        <p>
          <span className="font-semibold">Customization:</span> {customization}
        </p>
        <p className="flex items-center gap-1">
          <span className="font-semibold">Rating:</span>
          <FaStar className="text-yellow-900" />{' '}
          <FaStar className="text-yellow-900" />{' '}
          <FaStar className="text-yellow-900" />{' '}
          <FaStar className="text-yellow-900" />{' '}
          <FaStarHalfAlt className="text-yellow-900" />
          {rating}
        </p>
        <p className="flex gap-1 items-center mb-2">
          <span className="font-semibold"> Price: </span> <TbCoinTakaFilled />{' '}
          {price} taka
        </p>
        <p className="mb-2">
          <span className="font-semibold"> Processing Time: </span>
          {processing_time}
        </p>
        <div className="flex gap-4 flex-col lg:flex-row">
          <Link to={`/update/${_id}`} className="w-full">
            <Button className="w-full" color="green">
              Update
            </Button>
          </Link>
          <Button
            className="w-full"
            onClick={() => handleDelete(_id)}
            color="red"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Item;
