import React from "react";

import "../style/work.scss";

import { workInfoData } from "../mocks/FakeMealData";

const Work = () => {
  return (
    <>
      <div className="py-16">
        <div className="container m-auto space-y-8 px-6 md:px-12 lg:px-20">
          <div>
            <h4 className="mt-4 text-center font-medium text-amber-500">
              Work
            </h4>
            <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              How It Works{" "}
            </h2>
          </div>

          <div className="container relative m-auto px-6 text-gray-500 md:px-12">
            <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
              {workInfoData.map((info) => (
                <>
                  <div className="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
                    {info.image}

                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                      {info.title}
                    </h3>
                    <p>{info.text}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
