import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Firebase/AuthProvider';
import Item from '../CraftItems/Item';
import Loader from '../Spinner/Loader';
import Swal from 'sweetalert2';

function MyArtCraft() {
  const { user } = useContext(AuthContext);
  const [myCrafts, setMyCrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [control,setControl] = useState(false);
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

  return (
    <div className="mt-6 md:mt-10 lg:mt-12 font-fontPrimary">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold md:font-bold lg:font-extrabold ">
        My Art & Crafts
      </h2>
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
