import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useRegisterMutation } from "../../redux/features/register/registerApi";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { setRegister } from "../../redux/features/register/registerSlice";

const Register = () => {
  const dispatch = useAppDispatch();
  const [registerUser] = useRegisterMutation();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      dispatch(
        setRegister({
          name: data.name,
          email: data.email,
          password: data.password,
        })
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: any = await registerUser(userInfo);

      if (res?.error) {
        toast.error(`Something went wrong`, {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.success("Registration successful!", {
          id: toastId,
          duration: 2000,
        });
        navigate("/login");
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div>
      <div className="w-full mx-auto lg:w-[500px] drop-shadow-lg bg-slate-50 lg:mt-32 mt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="p-12">
          <h1 className="backdrop-blur-sm text-4xl pb-8">Register</h1>
          <div className="space-y-5">
            <label htmlFor="email" className="block">
              Name
            </label>
            <div className="relative">
              <input
                {...register("name")}
                id="name"
                type="name"
                placeholder="Your name"
                className="p-3 block w-full pl-10 drop-shadow-lg outline-none"
              />
              <span className="absolute top-1/4 left-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="inline-block w-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="SVGRepo_tracerCarrier"
                    // strokeLinecap="round"
                    // strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10ZM7.73867 16.4465C8.96118 15.5085 10.4591 15 12 15C13.5409 15 15.0388 15.5085 16.2613 16.4465C17.4838 17.3846 18.3627 18.6998 18.7615 20.1883C18.9044 20.7217 18.5878 21.2701 18.0544 21.413C17.5209 21.556 16.9726 21.2394 16.8296 20.7059C16.5448 19.6427 15.917 18.7033 15.0438 18.0332C14.1706 17.3632 13.1007 17 12 17C10.8993 17 9.82942 17.3632 8.95619 18.0332C8.08297 18.7033 7.45525 19.6427 7.17037 20.7059C7.02743 21.2394 6.47909 21.556 5.94563 21.413C5.41216 21.2701 5.09558 20.7217 5.23852 20.1883C5.63734 18.6998 6.51616 17.3846 7.73867 16.4465ZM10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9ZM12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5Z"
                      fill="#000000"
                    ></path>
                    <rect
                      x="2.5"
                      y="2.5"
                      width="19"
                      height="19"
                      rx="3.5"
                      stroke="#000000"
                    ></rect>
                  </g>
                </svg>
              </span>
            </div>
            <label htmlFor="email" className="block">
              Email
            </label>
            <div className="relative">
              <input
                {...register("email")}
                id="email"
                type="email"
                placeholder="example@gmail.com"
                className="p-3 block w-full pl-10 drop-shadow-lg outline-none"
              />
              <span className="absolute top-1/4 left-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  // stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    // stroke-linecap="round"
                    // stroke-linejoin="round"
                    d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </span>
            </div>
            <label htmlFor="password" className="block">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password")}
                id="password"
                type="Password"
                placeholder=".............."
                className="p-3 block w-full pl-10 drop-shadow-lg outline-none"
              />
              <span className="absolute top-1/4 left-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="inline-block w-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="SVGRepo_tracerCarrier"
                    // strokeLinecap="round"
                    // strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M20.9098 11.1203V6.73031C20.9098 5.91031 20.2898 4.98031 19.5198 4.67031L13.9498 2.39031C12.6998 1.88031 11.2898 1.88031 10.0398 2.39031L4.46984 4.67031C3.70984 4.98031 3.08984 5.91031 3.08984 6.73031V11.1203C3.08984 16.0103 6.63984 20.5903 11.4898 21.9303C11.8198 22.0203 12.1798 22.0203 12.5098 21.9303C17.3598 20.5903 20.9098 16.0103 20.9098 11.1203ZM12.7498 12.8703V15.5003C12.7498 15.9103 12.4098 16.2503 11.9998 16.2503C11.5898 16.2503 11.2498 15.9103 11.2498 15.5003V12.8703C10.2398 12.5503 9.49984 11.6103 9.49984 10.5003C9.49984 9.12031 10.6198 8.00031 11.9998 8.00031C13.3798 8.00031 14.4998 9.12031 14.4998 10.5003C14.4998 11.6203 13.7598 12.5503 12.7498 12.8703Z"
                      fill="#000000"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
          {/* button type will be submit for handling form submission*/}
          <button
            type="submit"
            className="py-2 px-5 mb-4 mt-6 shadow-lg before:block before:-left-1 before:-top-1 before:bg-black before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block"
          >
            Submit
          </button>
          <p className="text-[16px] text-gray-400 mt-4">
            Already have an account ?{" "}
            <Link className="text-[#8EA7E9]" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
