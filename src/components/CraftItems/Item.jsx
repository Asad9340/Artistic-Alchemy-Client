import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function Item({ craft }) {
  const { image, item_name, subcategory_name, rating, price } = craft;
  return (
    <div className="grid gap-3 grid-cols-7 shadow-lg rounded-md px-3 py-5">
      <div className="col-span-4">
        <div className="flex items-center justify-center ">
          <img src={image} className="h-[350px] w-[350px] rounded-md" alt="" />
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
          <span className="font-semibold">Rating:</span> {rating}
        </p>
        <p>
          <span className="font-semibold"> Price:</span> {price}
        </p>
        <Link to="/details/">
          <div className='flex gap-4'>
            <Button color="green">Update</Button>
            <Button color="red">Delete</Button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Item;
