import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FaPenFancy } from "react-icons/fa";
import { toast } from "sonner";
import { TSupply } from "../Supplies/Supplies";
import { useUpdateSupplyMutation } from "../../redux/features/supplies/suppliesApi";

const EditSupply = ({ supply }: { supply: TSupply }) => {
  const [openModal, setOpenModal] = useState(false);
  const { register, handleSubmit } = useForm();
  const [updateSupply] = useUpdateSupplyMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    const price = Number(data?.price);
    const filterData = { ...data, price };
    try {
      const updatedInfo = {
        id: supply._id,
        updatedData: filterData,
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: any = await updateSupply(updatedInfo);
      if (res?.error) {
        toast.error(`Something went wrong`, {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.success("Supply updated successful!", {
          id: toastId,
          duration: 2000,
        });
        setOpenModal(false);
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div>
      <div>
        <button
          onClick={() => setOpenModal(true)}
          className="text-indigo-600 px-2 py-2 bg-slate-300"
        >
          {" "}
          <FaPenFancy />
        </button>
        <div
          className={`fixed z-[100] flex items-center justify-center ${
            openModal ? "opacity-1 visible" : "invisible opacity-0"
          } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
        >
          <div
            className={`absolute max-w-md rounded-sm bg-white p-3 pb-5 px-20 drop-shadow-2xl ${
              openModal
                ? "scale-1 opacity-1 duration-300"
                : "scale-0 opacity-0 duration-150"
            } `}
          >
            <svg
              onClick={() => setOpenModal(false)}
              className="mx-auto mr-0 w-8 cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                  fill="#000"
                ></path>
              </g>
            </svg>
            <h1 className="mb-2 text-xl font-semibold text-center">
              Edit Supply
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className=" ">
                  Title
                </label>
                <input
                  defaultValue={supply?.title}
                  {...register("title")}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Write a title"
                  className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className=" ">
                  Category
                </label>
                <input
                  defaultValue={supply?.category}
                  {...register("category")}
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Write a category"
                  className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className=" ">
                  Amount
                </label>
                <input
                  defaultValue={supply?.price}
                  {...register("price")}
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Write a amount"
                  className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className=" ">
                  Image
                </label>
                <input
                  defaultValue={supply?.img}
                  {...register("img")}
                  type="text"
                  name="img"
                  id="img"
                  placeholder="Image link"
                  className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className=" ">
                  Description
                </label>
                <textarea
                  defaultValue={supply?.description}
                  {...register("description")}
                  name="description"
                  id="description"
                  placeholder="Write a description"
                  className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
                />
              </div>
              <button
                type="submit"
                className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group"
              >
                Submit
                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                  Submit
                </span>
                <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSupply;
