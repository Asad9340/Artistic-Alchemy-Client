import { Link } from "react-router-dom";

function Category({ category }) {
  const { image, subcategory_name, description } = category;
  return (
    <Link to={`/subcategory/${subcategory_name}`}>
      <div className="space-y-3 my-4 border p-3 md:p-4 rounded-lg hover:scale-105 duration-200">
        <div>
          <img className="w-full h-[200px] rounded-lg " src={image} alt="" />
        </div>
        <h2 className="text-2xl font-semibold text-[#4C4452]">
          {subcategory_name}
        </h2>
        <p className="text-[#808080]">{description}</p>
      </div>
    </Link>
  );
}

export default Category