import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-bold">All Category</h2>
      <div className="px-2 space-y-2 mt-4 font-semibold">
        {categories.map((category) => (
          // <h2 key={category.id}>{category.name}</h2>
          <Link
            className="block"
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
