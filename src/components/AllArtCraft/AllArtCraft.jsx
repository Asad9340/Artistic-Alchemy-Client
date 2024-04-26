import { useEffect, useState } from "react"
import { Button, Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TABLE_HEAD = ["Product Name", "Subcategory Name", "Price", "Rating", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
    date2: "23/04/18",
  }
];

function AllArtCraft() {
  const [allCraft, setAllCraft] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:5000/allArtCraft');
      const data = await res.json();
      setAllCraft(data);
    })()
  },[])
  console.log(allCraft)
  return (
    <div className="mt-8 md:mt-12 ">
      <h2 className="mb-6 md:mb-10 text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-bold text-center">
        All Art & Craft
      </h2>
      <Card className="h-full w-full ">
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
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allCraft.map(
              ({ _id, item_name, subcategory_name, price, rating }) => (
                <tr key={_id} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item_name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {subcategory_name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {price}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
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
                      <Link to={`/details/${_id}`} >
                        <Button color="blue">View Details</Button>
                      </Link>
                    </Typography>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default AllArtCraft