import { motion } from "motion/react";
import { useEffect } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaArrowRight, FaGithub, FaTwitter } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { getSearchResultFromServer } from "../../services/searchLinkServices";
import ProfileImg from "../../images/ProfileImg.png";
import { postfollowRequestFromServer } from "../../services/networkLinkServices";
import { userDataFromServer } from "../../services/userLinkServices";

export const UserSearchProfile = ({
  searchResultData,
  setSearchResultData,
  setUserData,
}) => {
  const { userId } = useParams();

  useEffect(() => {
    getSearchResultFromServer(userId).then((result) => {
      setSearchResultData(result);
    });
  }, []);

  const Links = [
    { name: searchResultData?.links?.github, icon: <FaGithub /> },
    { name: searchResultData?.links?.linkedin, icon: <BsLinkedin /> },
    { name: searchResultData?.links?.twitter, icon: <FaTwitter /> },
  ];

  const handleFollow = async (receiverId) => {
    const result = await postfollowRequestFromServer({ receiverId });

    console.log(result);
  };

  return (
    <>
      <div className="flex items-center justify-center mt-15 mb-20">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-6xl grid grid-cols-1 md:grid-cols-18 gap-6"
        >
          <div className="md:col-span-13 ">
            <div className="border border-slate-200 rounded-2xl p-6 shadow-sm bg-white mb-3">
              <div className="flex justify-between">
                <div className="flex items-center gap-6">
                  <div>
                    <img
                      src={
                        searchResultData?.profile
                          ? `http://localhost:3005/uploads/profile/${searchResultData?.profile}`
                          : ProfileImg
                      }
                      alt="profile"
                      className="h-24 w-24 rounded-full object-cover shadow-lg"
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">
                      {searchResultData?.firstName} {searchResultData?.lastName}
                    </h2>
                    <p className="text-gray-600">
                      @{searchResultData?.username}
                    </p>
                  </div>
                </div>
                <div className="h-full flex justify-center items-center">
                  <button
                    className="border px-5 py-1 rounded-sm bg-blue-500 text-white cursor-pointer"
                    onClick={() => handleFollow(searchResultData._id)}
                  >
                    follow
                  </button>
                </div>
              </div>
              <div className="border-t border-slate-300 my-4 "></div>
              <div>
                <h1 className="text-[17px] font-bold ">
                  {searchResultData?.headline}
                </h1>
                <p className="text-[15px] font-medium text-gray-700 line-clamp-3">
                  {searchResultData?.about}
                </p>
                <div className="flex gap-3 my-3">
                  <button className="border-none px-3 py-1 bg-blue-600 text-white rounded-2xl">
                    {searchResultData?.course?.toUpperCase()}
                  </button>
                  <button className="border-none px-3 py-1 bg-blue-600 text-white rounded-2xl">
                    {searchResultData?.gradYear}
                  </button>
                </div>
                <div>
                  <p className="text-sm font-bold">
                    College:{" "}
                    <span className="text-sm font-normal">
                      {searchResultData?.clgName}
                    </span>
                  </p>
                  <p className="text-blue-600">{searchResultData?.email}</p>
                </div>
              </div>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6 shadow-sm bg-white mb-3">
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-xl font-semibold text-gray-900">Skills</h1>
              </div>
              <div className="space-y-0">
                {searchResultData.skills?.map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between py-2 text-sm font-medium text-gray-800 ${
                      index !== searchResultData.skills.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-slate-200 rounded-2xl px-6 pt-6 pb-2 shadow-sm bg-white mb-3">
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-medium">Activity</h1>

                <div className="flex items-center justify-center border-t border-slate-300 mt-2 font-medium">
                  <button
                    to="/profile/post"
                    className="flex items-center justify-center gap-2 cursor-pointer text-slate-700 px-20 py-2"
                  >
                    Show all posts
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-2xl p-6 shadow-sm bg-white mb-3">
              <p className="text-[15px] font-medium text-gray-700 line-clamp-3">
                {searchResultData?.achievements}
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="w-full border rounded-2xl p-4 -z-50 border-slate-200 shadow-sm bg-white mb-3 relative">
              <h1 className="text-lg font-medium">Language Known</h1>
              <div>
                {searchResultData.language?.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 text-sm font-medium text-gray-800 border-b border-gray-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="border rounded-2xl p-4 border-slate-200 shadow-sm bg-white mb-3">
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-medium">Public profile & URL</h1>
              </div>
              <a
                href={`${searchResultData?.links?.linkedin}`}
                target="_blank"
                className="text-xs border-none text-gray-500"
              >
                {searchResultData?.links?.linkedin}
              </a>
            </div>
            <div className="border rounded-2xl p-4 border-slate-200 shadow-sm bg-white mb-3">
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-medium">Contact</h1>
              </div>
              {/* <div className="flex items-start flex-col gap-2"> */}
              {Links.map((link, unique) => (
                <div
                  key={unique}
                  className="flex items-center justify-between gap-2 mt-2"
                >
                  <a
                    href={link.name}
                    className="text-xs text-blue-700 underline"
                  >
                    {link.name}
                  </a>
                  <a
                    href={link.name}
                    className="p-2 border rounded-2xl text-gray-800 border-gray-800 text-md hover:text-white hover:bg-gray-800 transition-colors shadow-sm"
                  >
                    {link.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
