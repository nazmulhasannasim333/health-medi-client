import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCreateVolunteerMutation } from "../../redux/features/volunteer/volunteerApi";

const Volunteer = () => {
  const { register, handleSubmit } = useForm();
  const [addVolunteer] = useCreateVolunteerMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    await addVolunteer(data);
    navigate("/about-us");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 my-5">
      <h1 className="mb-2 text-2xl font-bold text-center">Add Volunteer</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className=" ">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            name="name"
            id="name"
            placeholder="Write your name"
            className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className=" ">
            Email
          </label>
          <input
            {...register("email")}
            type="text"
            name="email"
            id="email"
            placeholder="Write your email"
            className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className=" ">
            Phone Number
          </label>
          <input
            {...register("phone")}
            type="number"
            name="phone"
            id="phone"
            placeholder="Write you phone number"
            className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className=" ">
            Address
          </label>
          <input
            {...register("address")}
            type="text"
            name="address"
            id="address"
            placeholder="Write your address"
            className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
          />
        </div>
        <button
          type="submit"
          className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group"
        >
          Add
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

export default Volunteer;
