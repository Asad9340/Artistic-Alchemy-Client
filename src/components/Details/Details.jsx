import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
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
  console.log(product);
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
              Description: {description}
            </Typography>
            <div className="flex gap-4 flex-row lg:flex-col justify-between mb-4">
              <Typography
                color="gray"
                className=" font-normal font-fontPrimary"
              >
                Price: {price}
              </Typography>
              <Typography
                color="gray"
                className=" font-normal font-fontPrimary"
              >
                Rating: {rating}
              </Typography>
            </div>
            <div className="flex gap-4 flex-row lg:flex-col justify-between">
              <Typography
                color="gray"
                className=" font-normal font-fontPrimary"
              >
                Processing Status: {processing_time}
              </Typography>
              <Typography
                color="gray"
                className=" font-normal font-fontPrimary"
              >
                Stock: {stock_status}
              </Typography>
            </div>
            <Typography color="gray" className=" font-normal font-fontPrimary">
              Customization: {customization}
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Details;
