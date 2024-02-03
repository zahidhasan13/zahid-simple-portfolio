import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#20242D] min-h-screen">
      <div className="grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:pt-32 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 text-white">
          <h3 className="text-xl font-semibold tracking-tight leading-none md:text-2xl xl:text-3xl">
            Hello, It's Me
          </h3>
          <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl my-4">
            Md Zahid Hasan
          </h1>
          <h3 className="text-xl font-semibold tracking-tight leading-none md:text-2xl xl:text-3xl">
            And I'm a{" "}
            <span className="text-[#04D1E0]">Front End Developer</span>
          </h3>
          <p className="lg:mt-10 lg:text-sm lg:w-[80%]">
            {" "}
            I have been working in this field for 1+ years. I am expert in
            Front-End development using HTML, CSS, BOOTSTRAP, TAILWIND CSS,
            JAVASCRIPT, REACT, NodeJS, ExpressJS, Firebase and MongoDB.
          </p>
          <div className="lg:mt-10 space-x-4">
            <a
              href="https://www.facebook.com/zahid.13aug1999/"
              className="text-[#04D1E0] font-semibold"
            >
              Facebook
            </a>
            <span>|</span>
            <a
              href="https://www.linkedin.com/in/zahidhasanofficial/"
              className="text-[#04D1E0] font-semibold"
            >
              LinkedIn
            </a>
            <span>|</span>
            <a
              href="https://github.com/zahidhasan13"
              className="text-[#04D1E0] font-semibold"
            >
              Github
            </a>
          </div>
          <div className="mt-10">
            <a
              href=""
              download
              className="text-[#20242D] bg-[#04D1E0] shadow-lg shadow-[#04D1E0]/50 font-semibold px-6 py-2 rounded-full"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/hero.png" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
