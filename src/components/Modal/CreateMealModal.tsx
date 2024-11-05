import React from "react";
import CommonModal from "./CommonModal";
import { useForm } from "react-hook-form";
import { mealType } from "../../mocks/mealByCategories";
import supabase from "../../api/authprovider";
import { toast } from "react-toastify";

interface IProp {
  status: boolean;
  setStatus: (status: boolean) => void;
}
const CreateMealModal = ({ status, setStatus }: IProp) => {
  const { register, handleSubmit } = useForm();
  const SubmitForm = async (submitform: any) => {
    const file = submitform.createmealimg[0];
    const filename = `${submitform.createmealtype}/${submitform.createmealname}`;

    await supabase.storage.from("mealmaster").upload(filename, file, {
      cacheControl: "3600",
      upsert: false,
    });

    const response = await supabase.from("mealmaster").insert([
      {
        meal_name: submitform.createmealname,
        mealtype: submitform.createmealtype,
        meal_description: submitform.createmealdescription,
        meal_img: file.name,
        idMeal: 1001,
      },
    ]);

    if (response.status === 201) {
      toast.success("Successfully Added !! ");
      setStatus(false);
    } else {
      toast.error(`ERROR : ${response.error?.message}`);
      setStatus(false);
    }
  };
  return (
    <>
      {status && (
        <CommonModal status={status} setStatus={setStatus} title="Create Meal">
          <form
            className="max-w-md mx-auto  p-6 "
            onSubmit={handleSubmit(SubmitForm)}
          >
            {/* <h2 className="text-2xl font-bold mb-6">Create Meal</h2> */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Meal Name:
              </label>
              <input
                {...register("createmealname")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter Meal Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Meal Type :
              </label>
              <div className="relative w-full lg:max-w-sm">
                <select
                  {...register("createmealtype")}
                  className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                >
                  <option defaultValue={""}>Choose a Meal Type</option>
                  {mealType.map((type, index) => (
                    <React.Fragment key={index}>
                      <option value={type}>{type}</option>
                    </React.Fragment>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Description:
              </label>
              <textarea
                {...register("createmealdescription")}
                className="shadow appearance-none border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="e.g. 1 bowl of stir-fry salad"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Meal Image:
              </label>
              <div className="relative w-full lg:max-w-sm">
                <input
                  className="block w-full p-2.5 text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm outline-none appearance-none cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                  {...register("createmealimg")}
                />
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="file_input_help"
                >
                  PNG, JPG (MAX. 800x400px).
                </p>
              </div>
            </div>
            <button
              onClick={() => setStatus(false)}
              className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-5 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Close
            </button>
            <button
              className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </form>
        </CommonModal>
      )}
    </>
  );
};

export default CreateMealModal;
