import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Firebase/AuthProvider';
import Item from '../CraftItems/Item';
import Loader from '../Spinner/Loader';
import Swal from 'sweetalert2';
import { Option, Select } from '@material-tailwind/react';

function MyArtCraft() {
  const { user } = useContext(AuthContext);
  const [myCrafts, setMyCrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [control, setControl] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://artistic-alchemy-server.vercel.app/myCraft/${user.email}`
      );
      const data = await res.json();
      setLoading(false);
      setMyCrafts(data);
    })();
  }, [user, control]);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://artistic-alchemy-server.vercel.app/delete/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              setControl(!control);
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };

  const handleChange = event => {
    setSelectedOption(event.target.value);
    if (event.target.value === 'customization') {
      const sortCustomization = myCrafts.sort((a, b) => {
        if (a.customization < b.customization) {
          return 1;
        }
        if (a.customization > b.customization) {
          return -1;
        }
        return 0;
      });
      setMyCrafts(sortCustomization);
    } else if (event.target.value === 'price') {
      const sortPrice = myCrafts.sort((a, b) => a.price - b.price);
      setMyCrafts(sortPrice);
    } else if (event.target.value === 'rating') {
      const sortRating = myCrafts.sort((a, b) => b.rating - a.rating);
      setMyCrafts(sortRating);
    }
  };

  const handleAllFilter = () => {
    setLoading(true);
       (async () => {
         const res = await fetch(
           `https://artistic-alchemy-server.vercel.app/myCraft/${user.email}`
         );
         const data = await res.json();
         setMyCrafts(data);
         setLoading(false);
       })();
  };

  const handleYesFilter = () => {
    setLoading(true);
    (async () => {
      const value = 'Yes';
      const res = await fetch(
        `https://artistic-alchemy-server.vercel.app/allArtCraft/sort/${user.email}/${value}`
      );
      const data = await res.json();
      setMyCrafts(data);
      setLoading(false);
    })();
  };
  const handleNoFilter = () => {
    setLoading(true);
    (async () => {
      const value = 'No';
      const res = await fetch(
        `https://artistic-alchemy-server.vercel.app/allArtCraft/sort/${user.email}/${value}`
      );
      const data = await res.json();
      setMyCrafts(data);
      setLoading(false);
    })();
  };

  return (
    <div className="mt-6 md:mt-10 lg:mt-12 font-fontPrimary">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold md:font-bold lg:font-extrabold ">
        My Art & Crafts
      </h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-6 md:mt-8">
        <div className="w-full">
          <label
            className="  block  text-blueGray-600 text-lg font-bold mb-2"
            htmlFor="grid-password"
          >
            Filter By
          </label>
          <Select label="Select Filter Option">
            <Option onClick={handleAllFilter}>All</Option>
            <Option onClick={handleYesFilter}>Yes</Option>
            <Option onClick={handleNoFilter}>No</Option>
          </Select>
        </div>
        <div className="relative w-full mb-3">
          <label
            className="  block  text-blueGray-600 text-lg font-bold mb-2"
            htmlFor="grid-password"
          >
            Sort By
          </label>
          <select
            value={selectedOption}
            onChange={handleChange}
            className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            name="subcategory_name"
            id=""
          >
            <option value="">Select an option</option>
            <option value="customization">Customization</option>
            <option value="rating">Rating</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>
      <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-2 mt-8">
        {!loading ? (
          myCrafts.map(craft => (
            <Item key={craft._id} craft={craft} handleDelete={handleDelete} />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default MyArtCraft;
