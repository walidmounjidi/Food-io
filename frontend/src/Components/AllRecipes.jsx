import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoIosHeart } from "react-icons/io";
export default function AllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  useEffect(() => {
    axios.get('http://localhost:5000/recipe')
      .then((response) => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recipes:", err);
        setError("Failed to load recipes.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-[#ff9560] text-lg">Loading recipes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div
    className='p-[2rem] bg-[#fff3e6] min-h-[100vh]'>
      <h1
      className='text-2xl font-bold text-[#ff5601] pb-1'>
        All Recipes
      </h1>

      <div
      className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-[2rem]'>
        {recipes.map((dat, index) => (
          <div 
            key={index} 
            className='group overflow-y-scroll h-80 bg-[#fff] rounded-[12px] shadow-lg transition-all duration-300 ease-out hover:translate-y-1
            xl:w-[250px] lg:w-[240px] sm:w-[220px]  cursor-pointer hover:bg-[#ff9560] hover:text-white p-2 relative'
          >
            <img src={`http://localhost:5000/public/images/${dat?.coverImage}`} alt="" 
            className='h-50'/>
            <h4
            className='sm:mb-[0.5rem] text-[#ff6347] group-hover:text-black s'>{dat?.title}</h4>
            <p className='sm:my-[0.2rem] '>
              {Array.isArray(dat?.ingredients) 
                ? dat.ingredients.join(", ") 
                : dat?.ingredients || "No ingredients"}
            </p>
            <small className='my-[0.2rem]'>{dat?.instructions || "No instructions"}</small>
            <div
            className='sm:absolute   bottom-1 right-1 flex gap-1 text-[24px] text-[#ff9560]'>
                <IoIosHeart />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
