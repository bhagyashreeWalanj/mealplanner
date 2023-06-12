import React from "react";

interface ICommonHero {
  title: string;
  description: string;
  children: any;
}
function CommonHero(props: ICommonHero) {
  const { title, description, children } = props;

  return (
    <>
      <div className="meal-planner -z-0 relative">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  {title}
                </h1>
                <div className="h-1 w-20 bg-[#fe9e0d] rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-800 ">
                {description}
              </p>
            </div>
            <div className="mx-auto sm:mx-20">{children}</div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CommonHero;
