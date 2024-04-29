import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
function Category({ category }) {
  const { image, subcategory_name, description } = category;
  return (
    <Link to={`/subcategory/${subcategory_name}`}>
      <div className="space-y-3 my-4 border p-3 md:p-4 rounded-lg hover:scale-105 duration-200 hover:bg-gray-200 cursor-pointer">
        <div>
          <img className="w-full h-[200px] rounded-lg " src={image} alt="" />
        </div>
        <Fade delay={300} duration={1000}>
          <h2 className="text-2xl font-semibold text-[#4C4452]">
            {subcategory_name}
          </h2>
          <p className="text-[#808080]">{description}</p>
        </Fade>
      </div>
    </Link>
  );
}

export default Category;
