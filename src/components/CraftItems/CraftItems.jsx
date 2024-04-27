import { useEffect, useState } from 'react';
import CraftItem from './CraftItem';

function CraftItems() {
  const [crafts, setCrafts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://artistic-alchemy-server.vercel.app/allArtCraft'
      );
      const data = await res.json();
      const filterData = data.filter((item, index) => index < 6);
      setCrafts(filterData);
    })();
  }, []);
  return (
    <div className="mt-6 md:mt-10 lg:mt-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold md:font-bold lg:font-extrabold font-fontPrimary">
        Featured Craft Items
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {
          crafts.map(craft =><CraftItem key={craft._id} craft={craft} />)
        }
      </div>
    </div>
  );
}

export default CraftItems;
