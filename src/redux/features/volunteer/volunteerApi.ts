import { baseApi } from "../../api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllVolunteer: builder.query({
      query: () => {
        return {
          url: `/volunteer`,
          method: "GET",
        };
      },
      providesTags: ["volunteers"],
    }),
    createVolunteer: builder.mutation({
      query: (volunteerData) => {
        return {
          url: `/volunteer`,
          method: "POST",
          body: volunteerData,
        };
      },
      invalidatesTags: ["volunteers"],
    }),
  }),
});

export const { useCreateVolunteerMutation, useGetAllVolunteerQuery } =
  volunteerApi;
