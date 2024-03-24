import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useCreateSupplyMutation } from "../../redux/features/supplies/suppliesApi";

const AddSupply = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [createSupply] = useCreateSupplyMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    const price = Number(data?.price);
    const supplyData = { ...data, price };
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: any = await createSupply(supplyData);
      if (res?.error) {
        toast.error(`Something went wrong`, {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.success("Supply created successful!", {
          id: toastId,
          duration: 2000,
        });
        navigate("/dashboard/supplies");
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
      <h1 className="mb-2 text-xl font-semibold text-center">Edit Supply</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className=" ">
            Title
          </label>
          <input
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
  );
};

export default AddSupply;
