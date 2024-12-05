import React from "react";
import banner from "../../public/banner.png";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome to learn something{" "}
              <span className="text-teal-500">new everyday!!!</span>
            </h1>
            <p className="text-xl pb-10">
              Lorem ipsum dolor sit, Tenetur commodi iste sequi , aliquid
              quaerat, ea iure nisi dolore debitis explicabo possimus,
              blanditiis sapiente similique ad beatae optio exercitationem
              consequatur? Quos enim maxime nemo minima eius sunt ipsum, unde
              vero. Voluptate sapiente quae commodi deserunt.
            </p>

            <label className="input input-bordered flex items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <Link to="/signup">
            <button className="text-white btn btn-primary bg-teal-700 hover:bg-teal-800 mt-6">
              Get Started
            </button>
          </Link>
        </div>

        <div className="flex items-center justify-center order-1 mt-16 md:mt-12 md:w-1/2">
          <img src={banner} className="h-auto " alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
