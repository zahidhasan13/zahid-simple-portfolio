import Animation from "../../components/Animation";
Animation;

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
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="order-1"
          >
            <img src="web1.png" alt="mockup" className="rounded-lg h-[350px]" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="space-y-6 order-2"
          >
            <h2 className="lg:text-4xl">The Dragon News</h2>
            <p className="lg:text-lg">
              This is a online newspaper site. It using ReactJS for Front End
              development, Firebase for Authentication, and news API.
            </p>
            <div className="flex items-center flex-wrap gap-4">
              {img.map((i) => (
                <img key={i.id} src={i.img} alt={i.img} className="w-10" />
              ))}
            </div>
            <a
              href="https://the-dragon-news-client-d2bff.web.app/categories/0"
              target="_blank"
              className="inline-block text-[#20242D] bg-[#04D1E0] shadow-lg shadow-[#04D1E0]/50 font-semibold px-6 py-2 rounded-full"
            >
              Visit Website
            </a>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="space-y-6 order-4 md:order-3"
          >
            <h2 className="lg:text-4xl">Bistro Boss Restraurent</h2>
            <p className="lg:text-lg">
              This is a E-commece Restrurent site. It using ReactJS for Front
              End development, NodeJS for Back End development, Firebase for
              Authentication, JWT for authentication verification and MongoDB
              for Database. It has Admin and User dashboard.
            </p>
            <div className="flex items-center flex-wrap gap-4">
              {img.map((i) => (
                <img key={i.id} src={i.img} alt={i.img} className="w-10" />
              ))}
            </div>
            <a
              href="https://bistro-boss-4fb52.web.app/"
              target="_blank"
              className="inline-block text-[#20242D] bg-[#04D1E0] shadow-lg shadow-[#04D1E0]/50 font-semibold px-6 py-2 rounded-full"
            >
              Visit Website
            </a>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="order-3 md:order-4"
          >
            <img src="web2.png" alt="mockup" className="rounded-lg h-[350px]" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="space-y-6 order-6"
          >
            <h2 className="lg:text-4xl">Netflix Clone</h2>
            <p className="lg:text-lg">
              This is a Netflix Clone. It using ReactJS for Front End
              development, Firebase for Authentication and API Integration.
            </p>
            <div className="flex items-center flex-wrap gap-4">
              {img.map((i) => (
                <img key={i.id} src={i.img} alt={i.img} className="w-10" />
              ))}
            </div>
            <a
              href="https://netflix-clone-2c832.web.app/"
              target="_blank"
              className="inline-block text-[#20242D] bg-[#04D1E0] shadow-lg shadow-[#04D1E0]/50 font-semibold px-6 py-2 rounded-full"
            >
              Visit Website
            </a>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="order-5"
          >
            <img src="web4.png" alt="mockup" className="rounded-lg h-[350px]" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="space-y-6 order-8 md:order-7"
          >
            <h2 className="lg:text-4xl">Weather App</h2>
            <p className="lg:text-lg">
              This is a Weather App. It using ReactJS for Front End development,
              and API integration.
            </p>
            <div className="flex items-center flex-wrap gap-4">
              {img.map((i) => (
                <img key={i.id} src={i.img} alt={i.img} className="w-10" />
              ))}
            </div>
            <a
              href="https://weather-app-nu-vert-22.vercel.app/"
              target="_blank"
              className="inline-block text-[#20242D] bg-[#04D1E0] shadow-lg shadow-[#04D1E0]/50 font-semibold px-6 py-2 rounded-full"
            >
              Visit Website
            </a>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="order-7 md:order-8"
          >
            <img src="web3.png" alt="mockup" className="rounded-lg h-[350px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
