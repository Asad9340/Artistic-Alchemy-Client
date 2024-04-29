import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TbCoinTakaFilled } from 'react-icons/tb';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { MdFavoriteBorder } from "react-icons/md";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://artistic-alchemy-server.vercel.app/details/${id}`
      );
      const data = await res.json();
      setProduct(data);
    })();
  }, [id]);

  const {
    image,
    subcategory_name,
    item_name,
    description,
    customization,
    price,
    rating,
    processing_time,
    stock_status,
  } = product;
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-bold text-center my-8 md:my-10 lg:my-12  font-fontPrimary">
        Product Details
      </h2>
      <div>
        <Card className="w-full flex-col lg:flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-full lg:w-2/5 shrink-0 rounded-r-none"
          >
            <div className="flex items-center justify-center relative">
              <img
                src={image}
                alt="card-image"
                className="h-full w-full object-cover"
              />
              <p className="absolute top-12 px-3 py-1 -left-2 rounded-full -rotate-45 bg-gray-700 text-white font-fontPrimary">
                {customization == 'Yes' ? 'Customizable' : 'Not Customizable'}
              </p>
            </div>
          </CardHeader>
          <CardBody>
            <Typography
              variant="h6"
              color="gray"
              className="mb-4  font-fontPrimary"
            >
              Subcategory Name: {subcategory_name}
            </Typography>
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-fontPrimary"
            >
              Product Name: {item_name}
            </Typography>
            <Typography
              color="gray"
              className="mb-2 font-normal font-fontPrimary"
            >
              <span className="font-semibold">Description:</span> {description}
            </Typography>
            <div className="flex gap-4 flex-col lg:flex-row justify-between mb-4">
              <Typography
                color="gray"
                className=" font-fontPrimary text-2xl font-bold flex items-center gap-1"
              >
                <span className="text-base font-semibold">Price:</span>{' '}
                <TbCoinTakaFilled /> {price}{' '}
                <span className="text-lg">Taka</span>
              </Typography>
              <Typography
                color="gray"
                className=" font-fontPrimary font-semibold flex items-center gap-1"
              >
                <span className="text-base font-semibold">Rating:</span>{' '}
                <FaStar className="text-yellow-900" />{' '}
                <FaStar className="text-yellow-900" />{' '}
                <FaStar className="text-yellow-900" />{' '}
                <FaStar className="text-yellow-900" />{' '}
                <FaStarHalfAlt className="text-yellow-900" />
                {rating}
              </Typography>
            </div>
            <div className="flex gap-4 flex-row lg:flex-col justify-between">
              <Typography
                color="gray"
                className=" font-normal font-fontPrimary"
              >
                <span className="text-base font-semibold">
                  Processing Status:
                </span>{' '}
                {processing_time}
              </Typography>
              <Typography
                color="gray"
                className=" font-normal font-fontPrimary"
              >
                <span className="text-base font-semibold">Stock Status:</span>{' '}
                {stock_status}
              </Typography>
            </div>
            <Typography color="gray" className=" font-normal font-fontPrimary">
              <span className="text-base font-semibold">
                <span className="text-base font-semibold">Customization:</span>
              </span>{' '}
              {customization}
            </Typography>
            <div className="mt-2 md:mt-4 flex gap-3 md:gap-6 flex-col md:flex-row ">
              <Button className="bg-green-600 flex items-center gap-2 w-full justify-center">
                <MdOutlineAddShoppingCart className="text-2xl" /> Add to Card
              </Button>
              <Button
                variant="outlined"
                className="text-black flex items-center gap-2 justify-center w-full"
              >
                <MdFavoriteBorder className="text-2xl" /> Add Wishlist
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Details;
