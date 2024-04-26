import { useEffect, useState } from 'react';
import Item from './Item';

function CraftItems() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://artistic-alchemy-server.vercel.app/data'
      );
      const data = await res.json();
      setUsers(data);
    })();
  }, []);
  return (
    <div className="mt-6 md:mt-10 lg:mt-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold md:font-bold lg:font-extrabold ">
        Featured Craft Items
      </h2>
      <div className="grid gap-4 md:gap-6 grid-cols-2 mt-8">
        {users.map(user => (
          <Item key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default CraftItems;
