import React from "react";
import Swal from "sweetalert2";

const AddService = () => {
  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const category = form.category.value;
    const origin = form.origin.value;
    const price = form.price.value;
    const photoURL = form.photoURL.value;
    const person = form.person.value;
    const description = form.description.value;

    const ingredient1 = form.ingredient1.value;
    const ingredient2 = form.ingredient2.value;
    const ingredient3 = form.ingredient3.value;
    const ingredient4 = form.ingredient4.value;
    const ingredient5 = form.ingredient5.value;
    const ingredient6 = form.ingredient6.value;
    const ingredient = [
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5,
      ingredient6,
    ];
    const addedTimeEncrypted = new Date().getTime();
    const food = {
      foodName,
      category,
      origin,
      price,
      photoURL,
      person,
      ingredient,
      description,
      addedTimeEncrypted,
    };
    fetch("https://shakibs-kitchen-server.vercel.app/addfood", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(food),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire(`${foodName} added successfully to the database...`);
          form.reset();
        }
      });
  };

  return (
    <div className="max-w-2xl mx-auto bg-yellow-400 p-16 pt-8">
      <h1 className="text-center font-bold text-4xl mb-4">Add Food</h1>
      <form onSubmit={handleAddFood}>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label
              htmlFor="foodName"
              className="block mb-2 text-sm  text-gray-800 font-bold"
            >
              Food Name
            </label>
            <input
              type="text"
              name="foodName"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Kacchi"
              required
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm  text-gray-800 font-bold"
            >
              Food Category
            </label>
            <input
              type="text"
              name="category"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Rice"
              required
            />
          </div>
          <div>
            <label
              htmlFor="origin"
              className="block mb-2 text-sm  text-gray-800 font-bold"
            >
              Food Origin
            </label>
            <input
              type="text"
              name="origin"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Bangladeshi"
              required
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-sm  text-gray-800 font-bold"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="BDT 199"
              required
            />
          </div>
          <div>
            <label
              htmlFor="photoURL"
              className="block mb-2 text-sm  text-gray-800 font-bold"
            >
              Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="food.jpg"
              required
            />
          </div>
          <div>
            <label
              htmlFor="person"
              className="block mb-2 text-sm  text-gray-800 font-bold"
            >
              Person
            </label>
            <input
              type="number"
              name="person"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="ingredient"
            className="block mb-2 text-sm  text-gray-800 font-bold"
          >
            Ingredients
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              name="ingredient1"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
            <input
              type="text"
              name="ingredient2"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
            <input
              type="text"
              name="ingredient3"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
            <input
              type="text"
              name="ingredient4"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
            <input
              type="text"
              name="ingredient5"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
            <input
              type="text"
              name="ingredient6"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm  text-gray-800 font-bold"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
            <label
              htmlFor="password"
              className="ml-2 text-sm  text-gray-800 font-bold"
            >
              Every Information Are Given
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-sm hover:bg-gray-800 text-sm text-gray-300 hover:text-gray-400 rounded-none"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddService;
