import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const Review = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    if (data) {
      toast.success("Review added successful!", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
      <h1 className="mb-5 text-xl font-semibold">Write your review</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className=" ">
            Review
          </label>
          <textarea
            {...register("review")}
            name="review"
            id="review"
            placeholder="Write a review"
            className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className=" ">
            Rating
          </label>
          <input
            {...register("rating")}
            type="number"
            name="rating"
            id="rating"
            placeholder="Write max 5 rating"
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

export default Review;
