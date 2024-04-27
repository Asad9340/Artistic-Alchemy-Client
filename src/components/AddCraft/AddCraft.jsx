import Swal from 'sweetalert2';

import { useContext } from 'react';
import { AuthContext } from '../../Firebase/AuthProvider';

function AddCraft() {
  const { user } = useContext(AuthContext);
  const handleAddNewCraft = e => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_name.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stock_status = form.stock_status.value;
    const email = user.email;
    const user_name = user.displayName;
    const newCraft = {
      image,
      item_name,
      subcategory_name,
      description,
      price,
      rating,
      customization,
      email,
      user_name,
      processing_time,
      stock_status,
    };
    console.log(newCraft);
    fetch('https://artistic-alchemy-server.vercel.app/addCraft', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newCraft),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Added New Craft',
            icon: 'success',
            confirmButtonText: 'Added',
          });
          form.reset();
        }
      });
  };
  return (
    <div className="flex justify-center items-center font-fontPrimary">
      <form
        onSubmit={handleAddNewCraft}
        className="max-w-5xl mx-auto bg-[#F4F3F0] px-4 md:px-8 py-4 "
      >
        <h6 className="text-blueGray-400 text-3xl mt-3 mb-6 font-bold    text-center">
          Add New Craft Item
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative w-full mb-3">
              <label
                className="  block  text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Image URL
              </label>
              <input
                type="text"
                required
                name="image"
                placeholder="Enter Image URL"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="  block  text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Item Name
              </label>
              <input
                type="text"
                required
                name="item_name"
                placeholder="Enter Craft Item Name"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="  block  text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Subcategory Name
              </label>
              <select
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                name="subcategory_name"
                id=""
              >
                <option value="embroidery">
                  Embroidery
                </option>
                <option value="knitting">Knitting & Crocheting</option>
                <option value="quilting">Quilting</option>
                <option value="beadwork">Beadwork</option>
                <option value="dyeing">Tie-Dyeing</option>
                <option value="macrame">Macrame</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="  block  text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Description
              </label>
              <input
                type="text"
                required
                name="description"
                placeholder="Enter Short Description"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="  block  text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Price
              </label>
              <input
                type='number'
                name="price"
                required
                placeholder="Enter Price"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="  block  text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Rating
              </label>
              <input
                type="number"
                name="rating"
                required
                placeholder="Enter Rating"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="  block  text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Customization
              </label>
              <input
                type="text"
                name="customization"
                required
                placeholder="Customization like Yes or No"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="  block  text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Processing Time
              </label>
              <input
                type="text"
                required
                name="processing_time"
                placeholder="Enter Processing Time"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="  block  text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Stock Status
              </label>
              <input
                type="text"
                required
                name="stock_status"
                placeholder="Enter Stock Status"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full px-4">
            <div className="relative w-full mb-3">
              <input
                className="border w-full py-2 rounded-md font-semibold bg-green-700 active:bg-green-900 text-white"
                type="submit"
                value="Add New Craft"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddCraft;
