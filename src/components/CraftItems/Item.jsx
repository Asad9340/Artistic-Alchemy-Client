import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Item({ user }) {
  console.log(user);
  const { image, name, material, size, rating, price } = user;
  return (
    <div className="grid gap-3 grid-cols-7 shadow-lg rounded-md px-3 py-5">
      <div className="col-span-4">
        <div className="flex items-center justify-center ">
          <img src={image} className="h-[350px] w-[350px] rounded-md" alt="" />
        </div>
      </div>
      <div className="col-span-3 p-3 flex flex-col justify-center space-y-2">
        <h2 className="text-lg font-semibold">Name: {name}</h2>{' '}
        <hr className="border border-black" />
        <p>
          <span className="font-semibold">Material:</span> {material}
        </p>
        <p>
          <span className="font-semibold">Size:</span> {size}
        </p>
        <p>
          <span className="font-semibold">Rating:</span> {rating}
        </p>
        <p>
          <span className="font-semibold"> Price:</span> {price}
        </p>
        <Link to='/details' >
          <Button>View Details</Button>
        </Link>
      </div>
    </div>
  );
}

export default Item