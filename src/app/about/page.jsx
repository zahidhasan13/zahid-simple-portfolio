import React from "react";
import {
  FaCode,
  FaGraduationCap,
  FaCircleArrowRight,
  FaHeart,
} from "react-icons/fa6";
import Animation from "../../components/Animation";
Animation;
const page = () => {
  return (
    <section className="bg-[#20242D] min-h-screen text-white mb-10">
      <div className="max-w-screen-xl px-4 pt-16 mx-auto lg:pt-32">
        <div className="text-center mb-10">
          <h1 className="lg:text-4xl font-semibold uppercase border-b-2 pb-1">
            About <span className="text-[#04D1E0]">Me</span>
          </h1>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="col-span-1 mb-10"
          >
            <img src="about-me.png" alt="" className="bg-[#04D1E0]" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="col-span-2 space-y-10"
          >
            <p>
              I am Md Zahid Hasan. I am 24 years old. I passed Diploma
              Engineering on Computer Technology from Magura Polytechnic
              Institute. Currently I am studying Computer Science Engineering in
              Bangladesh University of Business and Technology.
            </p>
            <div data-aos="fade-up">
              <h1 className="flex items-center space-x-6 text-4xl font-bold mb-5">
                <FaCode />
                <span className="">SKILLS</span>
              </h1>
              <div className="space-y-5">
                <p>
                  I am skilled on HTML, CSS, JavaScript, ES6, ReactJS, React
                  Router and Firebase Authentication.
                </p>
                <p>I am also familier with Bootstrap, Tailwind CSS.</p>
                <p>
                  Beside these, I am used to a few tools, such as - Github, VS
                  Code, Figma, Vercel, Netlify and Chrome Dev Tool.
                </p>
                <p>Currently I am learning Next JS and necesssary packages.</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <h1 className="flex items-center space-x-6 text-4xl font-bold mb-5">
                <FaGraduationCap />
                <span className="">EDUCATION</span>
              </h1>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-[#04D1E0] flex items-center space-x-2">
                  <FaCircleArrowRight />
                  <span>Bangladesh University of Business and Technology</span>
                </h3>
                <div className="text-lg text-gray-400">
                  <p className="text-white font-bold">
                    Bachelor of Science, Computer Science & Engineering
                  </p>
                  <p>December 2022 - Present</p>
                  <p>Mirpur-2, Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="space-y-2 mt-5">
                <h3 className="text-2xl font-semibold text-[#04D1E0] flex items-center space-x-2">
                  <FaCircleArrowRight />
                  <span>Magura Polytechnic Institute</span>
                </h3>
                <div className="text-lg text-gray-400">
                  <p className="text-white font-bold">
                    Diploma Engineering, Computer Technology
                  </p>
                  <p>August 2017 - April 2022</p>
                  <p>Magura Sadar, Magura</p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <h1 className="flex items-center space-x-6 text-4xl font-bold mb-5">
                <FaHeart />
                <span className="uppercase">love to do</span>
              </h1>
              <p>
                I love development and explore new technology. Also love to go
                somewhere with family or friends on vacation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
