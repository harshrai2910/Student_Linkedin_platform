import ProfileImg from "../../images/ProfileImg.png";
import { getSearchResultFromServer } from "../../services/searchLinkServices";
import { Link } from "react-router-dom";

export const Search = ({ searchData, setSearchResultData }) => {
  const handleSearchClick = async (userId) => {
    const result = await getSearchResultFromServer(userId);
    console.log("search:", result);
    setSearchResultData(result);
  };
  return (
    <>
      <div className="flex flex-col gap-2 bg-white w-xs border rounded-lg border-slate-300 shadow-lg">
        {searchData?.map((searchRes, index) => (
          <Link
            to={`/profile/search=true/${searchRes._id}`}
            onClick={() => handleSearchClick(searchRes._id)}
            key={index}
            className="flex gap-3 px-3 py-2 border-b last:border-b-0 border-slate-300 cursor-pointer "
          >
            <img src={ProfileImg} alt="" className="h-10 " />
            <div className="flex items-start justify-between flex-col font-bold">
              {searchRes.firstName} {searchRes.lastName}
              <span className="text-slate-500 text-xs">
                {searchRes.username}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
