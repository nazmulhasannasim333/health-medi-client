import { useParams } from "react-router-dom";
import { useGetSupplyDetailsQuery } from "../../redux/features/supplies/suppliesApi";
import DonateModal from "../DonateModal/DonateModal";

const SupplyDetails = () => {
  const params = useParams();
  console.log(params.id);
  const { data: supplyDetails } = useGetSupplyDetailsQuery(params?.id);

  return (
    <div className="max-w-6xl mx-auto my-24">
      <div className=" overflow-hidden  bg-white border rounded shadow-sm ">
        <div className="flex flex-col pt-5  lg:flex-row sm:mx-auto">
          <div className=" lg:w-1/2 h-full px-2 py-2">
            <img
              src={supplyDetails?.data?.img}
              alt="book cover"
              className="object-cover w-full  lg:h-full"
            />
          </div>
          <div className=" px-8 bg-white lg:px-20  lg:w-1/2">
            <p className="font-semibold text-3xl text-black">
              {supplyDetails?.data?.title}
            </p>{" "}
            <p className=" text-gray-900 pt-4">
              Category:{" "}
              <span className=" text-gray-500 font-semibold text-xl">
                {supplyDetails?.data?.category}
              </span>
            </p>
            <p className=" text-gray-900 pt-5">
              Description:{" "}
              <span className="text-gray-500">
                {supplyDetails?.data?.description}
              </span>
            </p>
            <p className=" text-gray-900 py-2">
              Price:{" "}
              <span className="font-semibold">
                ${supplyDetails?.data?.price}
              </span>
            </p>
            <DonateModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyDetails;
