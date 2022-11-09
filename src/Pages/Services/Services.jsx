import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setServices(data.data);
        } else {
          Swal.fire("an error", "error");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(services);

  return (
    <div className="">
      <h2 className="italic text-center text-xl text font-semibold my-3">
        You don't take a photograph. You make it. - Ansel Adams
      </h2>

      <div>
        <h1 className="text-2xl text-center font-bold text-primary ">
          Packages
        </h1>
        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:justify-center gap-5 ">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
