const page = () => {
  const img = [
    {
      id: 1,
      img: "css-3.png",
    },
    {
      id: 2,
      img: "html-5.png",
    },
    {
      id: 3,
      img: "js.png",
    },
    {
      id: 4,
      img: "firebase.png",
    },
    {
      id: 5,
      img: "MongoDB.png",
    },
    {
      id: 6,
      img: "react.png",
    },
    {
      id: 7,
      img: "nodejs.png",
    },
    {
      id: 8,
      img: "tailwind.png",
    },
  ];

  return (
    <section className="bg-[#20242D] min-h-screen text-white">
      <div className="max-w-screen-xl px-4 pt-16 mx-auto lg:pt-32">
        <div className="text-center mb-10">
          <h1 className="lg:text-4xl font-semibold uppercase border-b-2 pb-1">
            My <span className="text-[#04D1E0]">Work</span>
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10">
          <div className="order-1">
            <img src="web1.png" alt="mockup" className="rounded-lg h-[350px]" />
          </div>
          <div className="space-y-6 order-2">
            <h2 className="lg:text-4xl">The Dragon News</h2>
            <p className="lg:text-lg">
              This is a online newspaper site. It using ReactJS for Front End
              development, Firebase for Authentication, and news API.
            </p>
            <div className="flex items-center space-x-4">
              {img.map((i) => (
                <img src={i.img} alt={i.img} className="w-10" />
              ))}
            </div>
            <a
              href="https://the-dragon-news-client-d2bff.web.app/categories/0"
              className="inline-block text-[#20242D] bg-[#04D1E0] shadow-lg shadow-[#04D1E0]/50 font-semibold px-6 py-2 rounded-full"
            >
              Visit Website
            </a>
          </div>
          <div className="space-y-6 order-4">
            <h2 className="lg:text-4xl">Bistro Boss Restraurent</h2>
            <p className="lg:text-lg">
              This is a E-commece Restrurent site. It using ReactJS for Front
              End development, NodeJS for Back End development, Firebase for
              Authentication, JWT for authentication verification and MongoDB
              for Database. It has Admin and User dashboard.
            </p>
            <div className="flex items-center space-x-4">
              {img.map((i) => (
                <img src={i.img} alt={i.img} className="w-10" />
              ))}
            </div>
            <a
              href="https://the-dragon-news-client-d2bff.web.app/categories/0"
              className="inline-block text-[#20242D] bg-[#04D1E0] shadow-lg shadow-[#04D1E0]/50 font-semibold px-6 py-2 rounded-full"
            >
              Visit Website
            </a>
          </div>
          <div className="order-3">
            <img src="web2.png" alt="mockup" className="rounded-lg h-[350px]" />
          </div>
          <div className="order-5">
            <img src="web3.png" alt="mockup" className="rounded-lg h-[350px]" />
          </div>
          <div className="space-y-6 order-6">
            <h2 className="lg:text-4xl">Destiny Shop</h2>
            <p className="lg:text-lg">
              This is a shopping E-commerce website. It using ReactJS for Front
              End development, Firebase for Authentication, NodeJS for Back End
              development and MongoDB for Database.
            </p>
            <div className="flex items-center space-x-4">
              {img.map((i) => (
                <img src={i.img} alt={i.img} className="w-10" />
              ))}
            </div>
            <a
              href="https://the-dragon-news-client-d2bff.web.app/categories/0"
              className="inline-block text-[#20242D] bg-[#04D1E0] shadow-lg shadow-[#04D1E0]/50 font-semibold px-6 py-2 rounded-full"
            >
              Visit Website
            </a>
          </div>
          <div className="space-y-6 order-8">
            <h2 className="lg:text-4xl">Netflix Clone</h2>
            <p className="lg:text-lg">
              This is a Netflix Clone. It using ReactJS for Front End
              development, Firebase for Authentication and API Integration.
            </p>
            <div className="flex items-center space-x-4">
              {img.map((i) => (
                <img src={i.img} alt={i.img} className="w-10" />
              ))}
            </div>
            <a
              href="https://the-dragon-news-client-d2bff.web.app/categories/0"
              className="inline-block text-[#20242D] bg-[#04D1E0] shadow-lg shadow-[#04D1E0]/50 font-semibold px-6 py-2 rounded-full"
            >
              Visit Website
            </a>
          </div>
          <div className="order-7">
            <img src="web4.png" alt="mockup" className="rounded-lg h-[350px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
