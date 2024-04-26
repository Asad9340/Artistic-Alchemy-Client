import { useEffect } from "react"

function AllArtCraft() {
  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:5000/allArtCraft');
      const data = await res.json();
      console.log(data);
    })()
  },[])
  return (
    <div>AllArtCraft</div>
  )
}

export default AllArtCraft