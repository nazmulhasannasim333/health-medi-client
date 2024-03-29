import { FieldValues, useForm } from "react-hook-form";
import {
  useCreateCommentMutation,
  useGetAllCommunityPostQuery,
} from "../../redux/features/community/communityApi";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

type TCommunity = {
  _id: string;
  name: string;
  comment: string;
};

const Community = () => {
  const { data: communityPosts } = useGetAllCommunityPostQuery(undefined);
  const [addComment] = useCreateCommentMutation();
  const { register, handleSubmit, reset } = useForm();
  const user = useAppSelector(selectCurrentUser);

  const onSubmit = async (data: FieldValues) => {
    const commentData = { ...user, ...data };
    await addComment(commentData);
    reset();
  };

  return (
    <div className="my-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold  text-center mb-5">Community</h2>
        <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <textarea
                {...register("comment")}
                className="w-full py-5 border border-indigo-500"
                name="comment"
                id="comment"
              ></textarea>
              <button className="relative h-14 w-32 origin-top transform rounded-lg border-2 border-sky-500 text-xl text-sky-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500">
                Comment
              </button>
            </div>
          </form>
          {communityPosts?.data?.map((post: TCommunity) => (
            <div
              key={post?._id}
              className="bg-slate-50 px-4 py-4 rounded-lg shadow-md"
            >
              <h1 className="text-2xl">{post?.name}</h1>
              <p>{post?.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
