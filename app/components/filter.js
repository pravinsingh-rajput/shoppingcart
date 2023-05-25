import React from "react";

const Filter = () => {
  return (
    <div className="w-full flex items-center justify-end p-1 md:mr-12 border-b-2 bg-white ">
      <div className="w-fit flex items-center p-1 px-2 justify-end m-1 mx-2 rounded-2xl shadow-md">
        <div className="mr-2 border-0 focus:outline-none font-semibold ">
          Filter:
        </div>
        <select name="cars" id="cars" className="cursor-pointer">
          <option value="Relevance">Relevance</option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
          <option value="Fast Delivery">Fast Delivery</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
