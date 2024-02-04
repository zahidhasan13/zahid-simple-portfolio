import React from "react";

const page = () => {
  const portfolio = [
    {
      id: 1,
      title: "The Dragon News",
      img: "web1.png",
      details:
        "This website is a online newspaper. It using ReactJS for front end development, Firebase for Authentication, and news API.",
      link: "https://the-dragon-news-client-d2bff.web.app/categories/0",
    },
    {
      id: 2,
      title: "Bistro Boss Restraurent",
      img: "web1.png",
      details:
        "This website is a online newspaper. It using ReactJS for front end development, Firebase for Authentication,  news API.",
      link: "https://the-dragon-news-client-d2bff.web.app/categories/0",
    },
    {
      id: 3,
      title: "Destiny Shop",
      img: "web1.png",
      details:
        "This website is a online newspaper. It using ReactJS for front end development, Firebase for Authentication,  news API.",
      link: "https://the-dragon-news-client-d2bff.web.app/categories/0",
    },
  ];
  return (
    <section className="bg-[#20242D] min-h-screen text-white">
      <div className="max-w-screen-xl px-4 py-16 mx-auto lg:pt-32">
        <div className="text-center mb-20">
          <h1 className="lg:text-4xl">My Work</h1>
          <p className="lg:text-lg border-b-2 pb-1">
            Here are my some reccent works
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10">
          <div className="">
            <img src="web1.png" alt="mockup" className="rounded-lg" />
          </div>
          <div className="space-y-10">
            <h2 className="lg:text-4xl">The Dragon News</h2>
            <p className="lg:text-lg">
              This website is a online newspaper. It using ReactJS for front end
              development, Firebase for Authentication, news API.
            </p>
            <a
              href="https://the-dragon-news-client-d2bff.web.app/categories/0"
              className="inline-block text-[#20242D] bg-[#04D1E0] shadow-lg shadow-[#04D1E0]/50 font-semibold px-6 py-2 rounded-full"
            >
              Visit Website
            </a>
          </div>
          <div className="space-y-10">
            <h2 className="lg:text-4xl">Bistro Boss Restraurent</h2>
            <p className="lg:text-lg">
              This website is a online newspaper. It using ReactJS for front end
              development, Firebase for Authentication, news API.
            </p>
            <a
              href="https://the-dragon-news-client-d2bff.web.app/categories/0"
              className="inline-block text-[#20242D] bg-[#04D1E0] shadow-lg shadow-[#04D1E0]/50 font-semibold px-6 py-2 rounded-full"
            >
              Visit Website
            </a>
          </div>
          <div className="">
            <img src="web1.png" alt="mockup" className="rounded-lg" />
          </div>
          <div className="">
            <img src="web1.png" alt="mockup" className="rounded-lg" />
          </div>
          <div className="space-y-10">
            <h2 className="lg:text-4xl">Destiny Shop</h2>
            <p className="lg:text-lg">
              This website is a online newspaper. It using ReactJS for front end
              development, Firebase for Authentication, news API.
            </p>
            <a
              href="https://the-dragon-news-client-d2bff.web.app/categories/0"
              className="inline-block text-[#20242D] bg-[#04D1E0] shadow-lg shadow-[#04D1E0]/50 font-semibold px-6 py-2 rounded-full"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
