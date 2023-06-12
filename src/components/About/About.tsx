import AboutBackground from "../../assets/about-background.png";
import AboutBackgroundImage from "../../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <>
      <div className="pt-24 text-gray-600 pb-40">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="md:w-5/12 lg:w-1/2 absolute -left-0  ">
            <img src={AboutBackground} alt="" />
          </div>
          <div className=" md:w-3/5 contents lg:text-center lg:flex lg:justify-start ">
            <img className="w-3/5 md:w-3/5 z-10" src={AboutBackgroundImage} />
          </div>
          <div className="flex flex-col z-10  w-full md:w-2/5 justify-center lg:items-start items-center text-center md:text-left ">
            <p className="uppercase tracking-loose w-full text-[#fe9e0d]">
              About
            </p>
            <h1 className="my-4 text-5xl font-bold leading-tight">
              A Balanced Diet
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Generate hyper-personalized meal plans for individual users.
              Empower users to easily lose weight, form new habits, and reach
              their goals.
            </p>
            <div className="flex justify-center items-center flex-row text-center self-center ">
              <button
                className="mx-auto mr-3 lg:mx-4 hover:no-underline
               bg-[#fe9e0d] text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Learn More
              </button>
              <button className="mx-auto flex lg:mx-0 hover:no-underline bg-[#fe9e0d] text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                <BsFillPlayCircleFill className="flex justify-center w-max text-lg font-semibold text-white pr-4" />
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
