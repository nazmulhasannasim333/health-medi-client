import { useGetAllVolunteerQuery } from "../../redux/features/volunteer/volunteerApi";

export type TVolunteer = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
};

const AboutUs = () => {
  const { data: volunteers } = useGetAllVolunteerQuery(undefined);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
        <thead>
          <tr className="bg-[#0095FF] text-white">
            <th className="py-4 px-6 text-lg text-left border-b">Name</th>
            <th className="py-4 px-6 text-lg text-left border-b">Email</th>
            <th className="py-4 px-6 text-lg border-b ">Phone</th>
            <th className="py-4 px-6 text-lg border-b ">Address</th>
          </tr>
        </thead>
        <tbody>
          {volunteers?.data?.map((volunteer: TVolunteer) => (
            <tr
              key={volunteer?._id}
              className="hover:bg-gray-50 border-b transition duration-300"
            >
              <td className="py-4 px-6 border-b text-xl font-medium">
                {volunteer?.name}
              </td>
              <td className="py-4 px-6 border-b text-lg font-medium">
                {volunteer?.email}
              </td>
              <td className="py-4 px-6 border-b text-lg font-medium text-center">
                ${volunteer?.phone}
              </td>
              <td className="py-4 px-6 border-b text-lg font-medium text-center">
                ${volunteer?.address}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AboutUs;
