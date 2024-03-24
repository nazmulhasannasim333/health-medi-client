import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSupplies: builder.query({
      query: () => {
        return {
          url: `/supplies`,
          method: "GET",
        };
      },
      providesTags: ["supplies"],
    }),
    getSupplyDetails: builder.query({
      query: (id) => {
        console.log(id);
        return {
          url: `/supply/${id}`,
          method: "GET",
        };
      },
      providesTags: ["supplies"],
    }),
    updateSupply: builder.mutation({
      query: (data) => {
        return {
          url: `/supply/${data.id}`,
          method: "PUT",
          body: data.updatedData,
        };
      },
      invalidatesTags: ["supplies"],
    }),
    createSupply: builder.mutation({
      query: (supplyData) => {
        return {
          url: `/supply`,
          method: "POST",
          body: supplyData,
        };
      },
      invalidatesTags: ["supplies"],
    }),
    deleteSupply: builder.mutation({
      query: (supplyId) => {
        return {
          url: `/supply/${supplyId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["supplies"],
    }),
  }),
});

export const {
  useGetAllSuppliesQuery,
  useGetSupplyDetailsQuery,
  useUpdateSupplyMutation,
  useCreateSupplyMutation,
  useDeleteSupplyMutation,
} = userApi;
