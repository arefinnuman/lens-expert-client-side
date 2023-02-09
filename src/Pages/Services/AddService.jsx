import React, { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import Swal from "sweetalert2";

const AddService = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.serviceName.value;
    const price = form.price.value;
    const img = form.photoURL.value;
    const rating = form.rating.value;
    const details = form.description.value;

    const addedTimeEncrypted = new Date().getTime();
    const getFullTime = new Date().toLocaleString();
    const addedDate = getFullTime.split(" ")[0];

    const services = {
      name,
      details,
      price,
      rating,
      img,
      addedTimeEncrypted,
      addedDate,
    };

    fetch("https://server-site-weld.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          Swal.fire(`${name} added successfully to the database...`);
          form.reset();
        }
      });
  };

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div>
            <CircleLoader
              color={"#232b84"}
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      ) : (
        <div className="flex  justify-center min-h-screen">
          <div>
            <div className="max-w-2xl mx-auto bg-base-100  p-16 pt-8">
              <h1 className="text-center font-bold text-4xl mb-4">
                Add Service
              </h1>
              <form onSubmit={handleAddService}>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                  <div>
                    <label
                      htmlFor="serviceName"
                      className="block mb-2 text-sm  text-gray-800 font-bold"
                    >
                      Service Name
                    </label>
                    <input
                      type="text"
                      name="serviceName"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Service Name"
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
                      placeholder="photo URl"
                      required
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
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm  text-gray-800 font-bold"
                  >
                    Rating
                  </label>
                  <input
                    type="number"
                    name="rating"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-sm hover:bg-gray-800 text-sm text-gray-300 hover:text-gray-400 rounded-none"
                >
                  Add Service
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddService;
