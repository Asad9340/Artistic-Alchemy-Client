import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CraftItem from '../CraftItems/CraftItem';
import Loader from '../Spinner/Loader';

function Subcategory() {
  const [subcategoryCollection, setSubcategoryCollection] = useState([]);
  const { subcategory } = useParams();
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `http://artistic-alchemy-server.vercel.app/allArtCraft/${subcategory}`
      );
      const data = await res.json();
      setSubcategoryCollection(data);
    })();
  }, [subcategory]);
  return (
    <div className="mt-8 md:mt-14 font-fontPrimary">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-bold text-center mb-8">
        Subcategory : {subcategory}
      </h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {!subcategoryCollection ? (
          <Loader />
        ) : (
          subcategoryCollection?.map(craft => (
            <CraftItem key={craft._id} craft={craft} />
          ))
        )}
      </div>
    </div>
  );
}

export default Subcategory;
