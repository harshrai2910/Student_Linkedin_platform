import ProfileImg from "../../../images/ProfileImg.png";

export const TotalConnection = ({ totalConnection }) => {
  return (
    <>
      <h1 className="text-2xl font-medium mb-5">Total Connections</h1>
      {totalConnection.map((data, index) => (
        <>
          <div key={data._id} className="flex items-start gap-3">
            <div className="relative shrink-0">
              <img
                src={
                  data.profile
                    ? `http://localhost:3005/uploads/profile/${data.profile}`
                    : ProfileImg
                }
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <h2 className="font-semibold text-gray-900 ">
                {data.firstName} {data.lastName}
              </h2>

              {data.headline && (
                <p className="text-xs text-gray-600 line-clamp-1">
                  {data.headline}
                </p>
              )}

              {data.clgName && (
                <p className="text-xs text-gray-500 flex gap-1">
                  <span className="font-medium text-gray-700 line-clamp-1">
                    Student at
                  </span>
                  <span className="text-gray-600">{data.clgName}</span>
                </p>
              )}
            </div>
          </div>

          {index !== totalConnection.length - 1 && (
            <div className="w-full h-0.5 bg-gray-300 mt-4 mb-4"></div>
          )}
        </>
      ))}
    </>
  );
};
