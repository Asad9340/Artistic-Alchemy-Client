import { useEffect, useState } from 'react';
import { Button, Card, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import Loader from '../Spinner/Loader';
import { TbCoinTakaFilled } from 'react-icons/tb';

const TABLE_HEAD = ['Product Name', 'Subcategory Name', 'Price', 'Rating', ''];

function AllArtCraft() {
  const [allCraft, setAllCraft] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://artistic-alchemy-server.vercel.app/allArtCraft'
      );
      const data = await res.json();
      setLoading(false);
      setAllCraft(data);
    })();
  }, []);
  return (
    <div className="mt-8 md:mt-12 font-fontPrimary">
      <h2 className="mb-6 md:mb-10 text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-bold text-center">
        All Art & Craft
      </h2>
      <Card className="h-full w-full overflow-scroll lg:overflow-hidden">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map(head => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70  font-fontPrimary"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <Loader />
            ) : (
              allCraft.map(
                ({ _id, item_name, subcategory_name, price, rating }) => (
                  <tr key={_id} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal  font-fontPrimary"
                      >
                        {item_name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal  font-fontPrimary"
                      >
                        {subcategory_name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal flex items-center gap-1  font-fontPrimary"
                      >
                        <TbCoinTakaFilled /> {price} taka
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium  font-fontPrimary"
                      >
                        {rating}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        <Link to={`/details/${_id}`}>
                          <Button color="blue">View Details</Button>
                        </Link>
                      </Typography>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default AllArtCraft;
