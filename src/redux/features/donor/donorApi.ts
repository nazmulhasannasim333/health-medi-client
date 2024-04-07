import { baseApi } from "../../api/baseApi";

const donorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDonors: builder.query({
      query: () => {
        return {
          url: `/donors`,
          method: "GET",
        };
      },
      providesTags: ["donors"],
    }),
    createDonor: builder.mutation({
      query: (donorData) => {
        return {
          url: `/donor`,
          method: "POST",
          body: donorData,
        };
      },
      invalidatesTags: ["donors"],
    }),
  }),
});

export const { useGetAllDonorsQuery, useCreateDonorMutation } = donorApi;
