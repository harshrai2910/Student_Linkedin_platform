import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaImages } from "react-icons/fa6";
import { IoCreate } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { CgSearch } from "react-icons/cg";
import { Search } from "./search";
import { useEffect, useRef, useState } from "react";
import { postSearchFromServer } from "../../services/searchLinkServices";
import profileImg from "../../images/ProfileImg.png";

export const Navbar = ({
  isLogin,
  handleLogout,
  userData,
  popupRef,
  toggleBtn,
  setToggleBtn,
  setSearchResultData,
}) => {
  const [typer, setTyper] = useState("");
  const timer = useRef(null);
  const [searchData, setSearchData] = useState([]);

  const handleSearch = (event) => {
    setTyper(event.target.value);
  };

  useEffect(() => {
    if (typer) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(async () => {
      const res = await postSearchFromServer({ search: typer });
      setSearchData(res.searchResult);
    }, 500);

    // return or cleanup function
    return () => {
      clearTimeout(timer.current);
    };
  }, [timer, typer]);

  return (
    <nav className="bg-white shadow-sm border border-slate-200 px-6 py-1 fixed top-0 left-0 w-full">
      <div className="max-w-6xl mx-auto flex justify-between items-center ">
        {/* Logo or Brand Name */}

        <div className="flex items-center justify-between gap-10 relative">
          <Link
            to="/"
            className="flex flex-col justify-center items-center hover:text-black transition-colors
          text-gray-600 text-xs font-medium"
          >
            <GoHomeFill className="text-xl" />
            Home
          </Link>

          <div className="flex border items-center justify-between rounded-lg border-slate-300 bg-slate-100">
            <span className="px-2">
              <CgSearch />
            </span>

            <input
              type="text"
              onChange={(e) => handleSearch(e)}
              placeholder="Search..."
              className="border-none outline-none rounded-l-sm rounded-r-lg bg-white w-xs h-8 px-3"
            />
          </div>
          <div className="absolute top-10 left-18">
            <Search
              searchData={searchData}
              setSearchResultData={setSearchResultData}
            />
          </div>
        </div>

        {isLogin ? (
          <div className="flex items-end gap-8">
            <Link
              to="/profile/myNetwork"
              className="flex flex-col justify-center items-center hover:text-black transition-colors
              text-gray-600 text-xs font-medium"
            >
              <FaImages className="text-lg" />
              My Network
            </Link>
            <Link
              to="/profile/post"
              className="flex flex-col justify-center items-center hover:text-black transition-colors
              text-gray-600 text-xs font-medium"
            >
              <FaImages className="text-lg" />
              Posts
            </Link>
            <Link
              to="/profile/create-post"
              className="flex flex-col justify-center items-center hover:text-black transition-colors
              text-gray-600 text-xs font-medium"
            >
              <IoCreate className="text-xl" />
              Create post
            </Link>

            <div className="relative ">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setToggleBtn((prev) => !prev);
                }}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={
                    userData.profile
                      ? `http://localhost:3005/uploads/profile/${userData.profile}`
                      : profileImg
                  }
                  alt="profile"
                  className="h-5 w-5 rounded-full object-cover shadow-sm cursor-pointer"
                />
                <div className="flex items-end">
                  <span className="text-xs text-gray-600 font-medium hover:text-black transition-colors cursor-pointer">
                    Me
                  </span>
                  <IoMdArrowDropdown className="cursor-pointer" />
                </div>
              </button>
              {toggleBtn && (
                <div
                  ref={popupRef}
                  className="absolute top-15 right-0 w-xs bg-white border border-slate-300 rounded-xl shadow-sm p-4 z-50"
                >
                  <div className="flex gap-2 mb-4">
                    <img
                      src={
                        userData.profile
                          ? `http://localhost:3005/uploads/profile/${userData.profile}`
                          : profileImg
                      }
                      alt="profile"
                      className="h-20 w-20 rounded-full object-cover shadow-sm"
                    />
                    <div className="flex flex-col items-start">
                      <h2 className="text-xl font-bold">
                        {userData.firstName} {userData.lastName}
                      </h2>
                      <p className="text-gray-600 text-xs">
                        @{userData.username}
                      </p>
                      <p className="text-sm font-medium text-gray-500 py-2 line-clamp-2">
                        {userData.headline}
                      </p>
                    </div>
                  </div>
                  <Link
                    to="/profile"
                    className="block text-center w-full py-1 border border-blue-500 rounded-2xl font-medium bg-blue-50 text-blue-800 shadow-sm
                    shadow-blue-200 cursor-pointer mb-4"
                  >
                    View Profile
                  </Link>
                  <div className="flex items-start flex-col">
                    <div className="flex flex-col items-start gap-1 mb-4">
                      <h1 className="font-medium">Manage</h1>
                      <Link
                        to="/profile/post"
                        className="text-gray-600 text-sm font-medium hover:text-black transition-colors"
                      >
                        Posts
                      </Link>
                      <Link
                        to="/profile/create-post"
                        className="text-gray-600 text-sm font-medium hover:text-black transition-colors"
                      >
                        Create post
                      </Link>
                    </div>

                    <div className="border border-slate-300 w-full mb-4"></div>

                    <button
                      onClick={() => handleLogout(true)}
                      className="text-sm text-gray-800 font-medium cursor-pointer hover:text-black transition-all"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <Link
              to="/login"
              className="text-gray-600 text-sm hover:text-blue-600 font-medium transition-colors"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-blue-600 text-sm text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-all shadow-sm"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
