import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditRecipe() {
  const [MyFormn, SetMyForm] = useState({});
  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(() => {
  const getRecipe = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/recipe/${id}`);
      const res = response.data;
      SetMyForm({
        title: res.title,
        ingredients: res.ingredients.join(","),
        instructions: res.instructions,
        coverImage: null 
      });
    } catch (err) {
      console.error(err);
    }
  };
  if(id) getRecipe();
}, [id]);



  const onhandleChange = (e) => {
    let val =
      e.target.name === "ingredients"
        ? e.target.value.split(",")
        : e.target.name === "coverImage"
        ? e.target.files[0]
        : e.target.value;
    SetMyForm((prev) => ({ ...prev, [e.target.name]: val }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(MyFormn);
    try {
      const formData = new FormData();
      formData.append("title", MyFormn.title);
      formData.append("instructions", MyFormn.instructions);
      formData.append("ingredients", JSON.stringify(MyFormn.ingredients));
      if (MyFormn.coverImage) {
        formData.append("coverImage", MyFormn.coverImage);
      }

      await axios.put(`http://localhost:5000/recipe/${id}`, formData, {
  headers: {
    "Authorization": `Bearer ${localStorage.getItem("token")}`
  }
});


      navigate("/");
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Error uploading recipe");
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh] bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[90%] max-w-md shadow-xl rounded-2xl p-6 flex flex-col gap-4"
      >
        <h2 className="text-xl font-semibold text-center text-orange-600">
          Add New Recipe
        </h2>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 font-medium mb-1">Title</label>
          <input
            value={MyFormn.title || ""}
            onChange={onhandleChange}
            type="text"
            name="title"
            className="border border-orange-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Recipe title"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 font-medium mb-1">Ingredients</label>
          <textarea
            value={MyFormn.ingredients || ""}
            onChange={onhandleChange}
            name="ingredients"
            className="border border-orange-300 rounded-lg px-3 py-2 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Separate ingredients with commas"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 font-medium mb-1">Instructions</label>
          <textarea
            value={MyFormn.instructions || ""}
            onChange={onhandleChange}
            name="instructions"
            className="border border-orange-300 rounded-lg px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Write preparation steps..."
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 font-medium mb-1">Cover Image</label>
          {MyFormn.coverImage && typeof MyFormn.coverImage === "string" && (
            <img
              src={`http://localhost:5000/public/images/${MyFormn.coverImage}`}
              alt="Current cover"
              className="h-32 mb-2 rounded"
            />
        )}
          <input
            onChange={onhandleChange}
            type="file"
            name="coverImage"
            className="border border-orange-300 rounded-lg px-3 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg shadow-md transition"
        >
          Edit Recipe
        </button>
      </form>
    </div>
  );
}
