import BannerImage from "../assets/home-banner-image.png";

function Hero() {
  return (
    <>
      <div className="pt-24 text-gray-600">
        {/* <div className="w-1/2 absolute -top-28 -right-44  max-w-3xl">
          {" "}
          <img src={BannerBackground} alt="" />
        </div> */}
        <div className="container px-3 mx-auto flex flex-wrap flex-col-reverse md:flex-row  items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose text-2xl w-full">
              Craving For Healthy Food ?
            </p>
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Let's Plan a week Meal
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Our meal planner makes it easy to plan delicious, healthy meals
              for you and your family. Save time and money while eating well!
            </p>
            <button className="mx-auto lg:mx-0 hover:underline bg-[#fe9e0d] text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              View Meal
            </button>
          </div>

          <div className="w-3/5 md:w-3/5 py-6 contents lg:text-center lg:flex lg:justify-end">
            <img
              className="w-3/5 md:w-3/5 z-10"
              src={BannerImage}
              alt="mealprep"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
