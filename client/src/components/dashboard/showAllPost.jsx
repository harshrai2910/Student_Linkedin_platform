import { GoShieldCheck } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { FaRegCommentDots } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { BiSolidLike } from "react-icons/bi";
import { AiTwotoneLike } from "react-icons/ai";
import profileImg from "../../images/ProfileImg.png";
import { useState } from "react";
import { useEffect } from "react";
import {
  putFollowersfromServer,
  putLikesFromServer,
} from "../../services/userPostLinkServices";

export const ShowAllPost = ({ AllPosts, userData }) => {
  const [posts, setPosts] = useState([]);
  const [following, setFollowing] = useState();

  const handleLikeClick = async (postId) => {
    const result = await putLikesFromServer(postId);

    setPosts((prev) =>
      prev.map((post) => (post._id === result._id ? result : post)),
    );
  };

  useEffect(() => {
    if (AllPosts) setPosts(AllPosts);
  }, [AllPosts]);

  const handleFollow = async (userId) => {
    await putFollowersfromServer(userId);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="font-medium text-xl">All Activity</h1>
        {posts?.map((post, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 border border-slate-300 rounded-xl shadow-xs"
          >
            <div className="flex gap-2 items-center p-4">
              <div className="flex justify-between">
                <img
                  src={
                    post.UserId.profile
                      ? `http://localhost:3005/uploads/profile/${post.UserId.profile}`
                      : profileImg
                  }
                  alt=""
                  className="h-15 w-15 rounded-full shadow-sm"
                />
              </div>
              <div className="w-full">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-1">
                    <h1 className="text-lg font-medium">
                      {post.UserId.firstName} {post.UserId.lastName}
                    </h1>

                    <GoShieldCheck />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 line-clamp-1">
                    {post.UserId.headline}
                  </p>
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleFollow(post.UserId._id)}
                  className="text-blue-500 font-bold flex gap-2 items-center cursor-pointer"
                >
                  <IoMdAdd className="font-extrabold" />
                  Follow
                </button>
              </div>
            </div>

            <div className="px-4">{post.content}</div>

            <div>
              <img
                src={`http://localhost:3005/uploads/post/${post.postImage}`}
                alt=""
                className="w-full "
              />
            </div>

            <div>
              <div className="p-2 border-t border-slate-300 flex gap-2 items-center">
                <div className="border rounded-full border-blue-500 bg-blue-100 p-1">
                  <BiSolidLike className="text-blue-500 transform scale-x-[-1]" />
                </div>

                <span>{post.likes.length}</span>
              </div>

              <div className="grid grid-cols-3 py-1 border-t border-slate-300">
                <button
                  onClick={() => handleLikeClick(post._id)}
                  className={`flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer
                    ${post.likes.includes(userData._id) ? "text-blue-500" : "text-black"} transition-all`}
                >
                  <div
                    className={
                      post.likes.includes(userData._id)
                        ? "border rounded-full border-blue-500 bg-blue-100 p-1"
                        : ""
                    }
                  >
                    <BiSolidLike className="transform scale-x-[-1]" />
                  </div>
                  Like
                </button>

                <button className="flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                  <FaRegCommentDots />
                  Comment
                </button>

                <button className="flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                  <RiSendPlaneFill />
                  Send
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
