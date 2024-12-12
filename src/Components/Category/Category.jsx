import { NavLink } from "react-router-dom";

const Category = ({ categories }) => {
  // const{product_id, category}= categories;
  return (
    <div className="flex flex-col gap-2 border p-8 rounded-xl shadow-xl">

      {categories.map(category => (
        <NavLink
          key={category.category}
          to={`/category/${category.category}`}

        >
          <button className="btn btn-active w-full px-10 rounded-full focus:bg-[rgb(149,56,226)]">{category.category}</button>

        </NavLink>
      ))}

     




    </div>
  );
};

export default Category;