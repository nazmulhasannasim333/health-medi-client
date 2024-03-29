import { useGetAllDonorsQuery } from "../../redux/features/donor/donorApi";

export type TLeaderboard = {
  _id: string;
  name: string;
  email: string;
  price: string;
};

const Leaderboard = () => {
  const { data: donors } = useGetAllDonorsQuery(undefined);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
        <thead>
          <tr className="bg-[#0095FF] text-white">
            <th className="py-4 px-6 text-lg text-left border-b">Name</th>
            <th className="py-4 px-6 text-lg text-left border-b">Email</th>
            <th className="py-4 px-6 text-lg border-b ">Amount</th>
          </tr>
        </thead>
        <tbody>
          {donors?.data?.map((donor: TLeaderboard) => (
            <tr
              key={donor?._id}
              className="hover:bg-gray-50 border-b transition duration-300"
            >
              <td className="py-4 px-6 border-b text-xl font-medium">
                {donor?.name}
              </td>
              <td className="py-4 px-6 border-b text-lg font-medium">
                {donor?.email}
              </td>
              <td className="py-4 px-6 border-b text-lg font-medium text-center">
                ${donor?.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
