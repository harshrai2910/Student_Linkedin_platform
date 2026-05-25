import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import {
  createPostFromServer,
  getPostFromServer,
} from "../../../services/userPostLinkServices";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const CreatePost = ({ setPost }) => {
  const { register, handleSubmit, reset } = useForm();
  const [isPost, setIsPost] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (data.content === "" && data.postImage === "") return;

    const result = await createPostFromServer(data);
    const newPost = result.post;
    setIsPost(true);
  };

  useEffect(() => {
    if (isPost) {
      getPostFromServer().then((result) => {
        setPost(result?.post);
        setIsPost(false);
        navigate("/profile/post");
        reset();
      });
    }
  }, [isPost]);

  return (
    <div className="flex items-center justify-center mt-15">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-3xl w-xl mx-auto p-3 bg-white rounded-lg shadow-md border border-gray-200"
      >
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Create Post</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Content Field */}
          <textarea
            placeholder="What do you want to talk about?"
            {...register("content")}
            className="w-full font-medium texl-lg p-3 rounded-md min-h-30 focus:outline-none resize-none"
          />

          <div className="grid grid-cols-2 gap-4">
            {/* Media Upload Section */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Add Image/Video
              </label>
              <input
                type="file"
                {...register("postImage")}
                accept="image/*,video/*"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end pt-2">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition">
              Post
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
