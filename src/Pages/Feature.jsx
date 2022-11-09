import React from "react";
import img1 from "../Asset/Feature/img1.jpg";
import img2 from "../Asset/Feature/img2.jpg";
import img3 from "../Asset/Feature/img3.jpg";

const Feature = () => {
  return (
    <div>
      <section className="my-3 p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={img1}
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <p className="my-6 dark:text-gray-400">
                You're about to throw the most epic party for your friends and
                family? We will be your ride or die. Our job is to catch every
                second, so you and your loved ones can just let go and live in
                the moment. You feel like we could vibe? Leave us a message and
                let’s get this party started.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src={img2}
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <p className="my-6 dark:text-gray-400">
                We're capturing true love with all its flaws, not the idea of
                some kind of boring perfection. That’s how we tick. Snoop around
                our site and insta-feed to see if this could be a match (we hope
                it is!)
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={img3}
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <p className="my-6 dark:text-gray-400">
                "From the minute we met they had this warm heart and open mind
                energy that radiated throughout the day making it easy to be
                with them. The photos and video that are delivered afterwards
                are breathtakingly beautiful. We love their creative and laid
                back style. Best duo in the wedding photography industry."
                <br />
                <br />
                -Kenzie & Jo
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
