import { useState } from "react";
import { useGetAllSuppliesQuery } from "../../redux/features/supplies/suppliesApi";
import { Link } from "react-router-dom";

export type TSupply = {
  _id: string;
  img: string;
  title: string;
  category: string;
  description: string;
  price: string;
};

const Supplies = () => {
  const { data: supplies } = useGetAllSuppliesQuery(undefined);
  const [showAll, setShowAll] = useState(false);
  const visibleSupplies = showAll
    ? supplies?.data
    : supplies?.data?.slice(0, 6);

  const handleToggleView = () => {
    setShowAll(!showAll);
  };

  return (
    <div className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold  text-center mb-5">Supplies</h2>
        <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visibleSupplies?.map((sup: TSupply) => (
            <div
              key={sup?._id}
              className="max-[350px] md:w-[350px] bg-slate-100/70 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md"
            >
              {/* Card Image */}
              <img
                className="w-[350px] h-[190px] bg-gray-400 rounded-2xl"
                src={sup?.img}
                alt="card navigate ui"
              />
              {/* Card Heading */}
              <div className="space-y-2">
                <h2 className="text-slate-800 font-medium md:text-2xl sm:text-lg">
                  {sup?.title}
                </h2>
                {/* rating  */}
                <h3 className="text-slate-600 font-normal md:text-xl sm:text-lg">
                  {sup?.category}
                </h3>
              </div>
              {/* Price and action button */}
              <div className="mt-5 flex justify-between items-center font-medium">
                <h2 className="md:text-xl text-gray-800">${sup?.price}</h2>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">
                  <Link to={`/supplies/${sup?._id}`}>View Detail</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className=" text-center mt-10">
          <button
            onClick={handleToggleView}
            className="group relative z-10 h-14 w-36 overflow-hidden bg-black text-xl text-white shadow-lg"
          >
            <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-white transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span>
            <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-700 transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span>
            <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-900 transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span>
            <span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">
              Let's See...
            </span>
            {showAll ? "View Less" : "View All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Supplies;
