import { useContext, useEffect } from "react"
import { AuthContext } from "../../Firebase/AuthProvider"

function MyArtCraft() {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    (async() => {
      const res = await fetch(`http://localhost:5000/myCraft/${user.email}`);
      const data = await res.json();
      console.log(data);
    })()
  },[user])
  return (
    <div>MyArtCraft</div>
  )
}

export default MyArtCraft