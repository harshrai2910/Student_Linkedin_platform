import { GoShieldCheck } from "react-icons/go";
import { Link } from "react-router-dom";
import profileImg from "../../images/ProfileImg.png";

export const ProfileServices = ({ userData }) => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <Link to="/profile">
              <img
                src={
                  userData.profile
                    ? `http://localhost:3005/uploads/profile/${userData.profile}`
                    : profileImg
                }
                alt=""
                className="h-24 w-24 rounded-full object-cover shadow-sm"
              />
            </Link>

            <GoShieldCheck className="text-2xl" />
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <Link to="/profile">
                <h2 className="text-xl font-bold">
                  {userData.firstName} {userData.lastName}
                </h2>
                <p className="text-gray-600 text-xs">@{userData.username}</p>
              </Link>
            </div>
            <div>
              <Link to="/profile">
                <p className="text-sm font-medium text-gray-800 line-clamp-2">
                  {userData.headline}
                </p>
              </Link>

              <p className="text-gray-600 text-xs p-1">India</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
