import React from "react";
import Modal from "../Modal/MealPlanModal";
import { CDNURL } from "../../api/authprovider";

interface IProp {
  title: string;
  servings: number;
  id: number;
  image: string;
}

function MealCard(props: IProp) {
  const { title, image, id, servings } = props;
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <div className="bg-[#bfb74a] p-6 rounded-lg h-full border border-solid">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src={`${CDNURL}${image}`}
          alt={title}
        />
        {/* <h3 className="tracking-widest text-slate-300 text-xs font-medium title-font">
                          {meal.title}
                        </h3> */}
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {title}
        </h2>
        <p className="leading-relaxed text-base flex justify-between items-center text-white">
          Servings : {servings}
        </p>
        <button
          className="bg-white px-3 py-4 ml-auto mr-auto mt-5 hover:bg-[#F6F1E9] duration-300 outline-none border-none rounded-[5rem] flex justify-between align-middle"
          onClick={() => setShowModal(true)}
        >
          {" "}
          Add to Plans
        </button>
        {showModal ? (
          <Modal
            id={id}
            title={title}
            status={showModal}
            setStatus={(status: any) => setShowModal(status)}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default MealCard;
