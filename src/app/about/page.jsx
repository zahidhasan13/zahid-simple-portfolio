import React from "react";

const page = () => {
  return (
    <section className="bg-[#20242D] min-h-screen text-white">
      <div className="max-w-screen-xl px-4 pt-16 mx-auto lg:pt-32">
        <div className="text-center mb-10">
          <h1 className="lg:text-4xl font-semibold uppercase border-b-2 pb-1">
            About <span className="text-[#04D1E0]">Me</span>
          </h1>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5">
          <div className="col-span-1 mb-10">
            <img src="about-me.png" alt="" className="bg-[#04D1E0]" />
          </div>
          <div className="col-span-2 space-y-10 text-xl">
            <p>
              I am Md Zahid Hasan. I am 24 years old. I passed Diploma
              Engineering on Computer Technology from Magura Polytechnic
              Institute. Currently I am studying Computer Science Engineering in
              Bangladesh University of Business and Technology.
            </p>
            <p>
              I have trained on Front End Development and I have been working on
              this feild for 1+ years. I am expert on HTML, CSS, Bootstrap,
              Tailwind CSS, JavaScript, ReactJS, NodeJS, MongoDB.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
