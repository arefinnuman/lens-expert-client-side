import React, { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import Swal from "sweetalert2";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    fetch("https://server-site-weld.vercel.app/services")
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
        <div>
          <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:justify-center gap-7 mt-8">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
