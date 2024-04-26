import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Firebase/AuthProvider';
import Item from '../CraftItems/Item';
import Loader from '../Spinner/Loader';

function MyArtCraft() {
  const { user } = useContext(AuthContext);
  const [myCrafts, setMyCrafts] = useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://artistic-alchemy-server.vercel.app/myCraft/${user.email}`
      );
      const data = await res.json();
      setLoading(false);
      setMyCrafts(data);
    })();
  }, [user]);

  return (
    <div className="mt-6 md:mt-10 lg:mt-12 font-fontPrimary">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold md:font-bold lg:font-extrabold ">
        My Art & Crafts
      </h2>
      <div className="grid gap-4 md:gap-6 grid-cols-2 mt-8">
        {
          !loading?myCrafts.map(craft => (
          <Item key={craft._id} craft={craft} />
        )):<Loader/>
        }
      </div>
    </div>
  );
}

export default MyArtCraft;
