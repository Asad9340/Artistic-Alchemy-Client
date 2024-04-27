import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { FaStarHalfAlt } from 'react-icons/fa';
import { TbCoinTakaFilled } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';

function Item({ craft, handleDelete }) {
  const { _id, image, item_name, subcategory_name,customization, rating, price } = craft;

  return (
    <div className="flex flex-col md:grid gap-3 md:grid-cols-7 shadow-lg rounded-md px-3 py-5">
      <div className="col-span-4">
        <div className="flex items-center justify-center ">
          <img
            src={image}
            className="h-[300px] md:h-[350px] w-full md:w-[350px] rounded-md"
            alt=""
          />
        </div>
      </div>
      <div className="col-span-3 p-3 flex flex-col justify-center space-y-2">
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
          <span className="font-semibold"> Price:</span> <TbCoinTakaFilled />{' '}
          {price} taka
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
