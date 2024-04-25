import { useEffect, useState } from "react"

function CraftItems() {
  const [user,setUser]=useState([])
  useEffect(() => {
    (async() => {
      const res =await fetch('http://localhost:5000/data');
      const data = await res.json();
      console.log(data)
      setUser(data);
    })()
  },[])
  return (
    <div>
      <p>{user.length}</p>
    </div>
  )
}

export default CraftItems