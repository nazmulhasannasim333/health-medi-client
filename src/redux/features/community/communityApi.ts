import { baseApi } from "../../api/baseApi";

const communityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCommunityPost: builder.query({
      query: () => {
        return {
          url: `/community`,
          method: "GET",
        };
      },
      providesTags: ["community"],
    }),
    createComment: builder.mutation({
      query: (commentData) => {
        return {
          url: `/community`,
          method: "POST",
          body: commentData,
        };
      },
      invalidatesTags: ["community"],
    }),
  }),
});

export const { useCreateCommentMutation, useGetAllCommunityPostQuery } =
  communityApi;
