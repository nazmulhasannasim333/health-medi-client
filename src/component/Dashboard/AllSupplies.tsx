import { FaPlus, FaTrashAlt } from "react-icons/fa";
import {
  useDeleteSupplyMutation,
  useGetAllSuppliesQuery,
} from "../../redux/features/supplies/suppliesApi";
import { TSupply } from "../Supplies/Supplies";
import EditSupply from "./EditSupply";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllSupplies = () => {
  const { data: supplies } = useGetAllSuppliesQuery(undefined);
  const [deleteSupply] = useDeleteSupplyMutation();

  const handleDeleteSupply = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSupply(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your supply has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
        <thead>
          <tr className="bg-[#0095FF] text-white">
            <th className="py-4 px-6 text-lg text-left border-b">Title</th>
            <th className="py-4 px-6 text-lg text-left border-b">Category</th>
            <th className="py-4 px-6 text-lg border-b ">Amount</th>
            <th className="py-4 px-6 text-lg border-b text-left">Edit</th>
            <th className="py-4 px-6 text-lg border-b text-left">Add</th>
            <th className="py-4 px-6 text-lg border-b text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
          {supplies?.data?.map((sup: TSupply) => (
            <tr
              key={sup?._id}
              className="hover:bg-gray-50 border-b transition duration-300"
            >
              <td className="py-4 px-6 border-b text-xl font-medium">
                {sup.title}
              </td>
              <td className="py-4 px-6 border-b text-lg font-medium">
                {sup.category}
              </td>
              <td className="py-4 px-6 border-b text-lg font-medium text-center">
                ${sup.price}
              </td>
              <td className="py-4 px-6 border-b ">
                <EditSupply supply={sup} />
              </td>
              <td className="py-4 px-6 border-b ">
                <Link to="/dashboard/create-supply">
                  <button className="px-2 py-2 bg-slate-300">
                    {" "}
                    <FaPlus />
                  </button>
                </Link>
              </td>
              <td className="py-4 px-6 border-b ">
                <button
                  onClick={() => handleDeleteSupply(sup?._id)}
                  className="text-red-500 px-2 py-2 bg-slate-300"
                >
                  {" "}
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSupplies;
