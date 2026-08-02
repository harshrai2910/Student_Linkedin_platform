import ProfileImg from "../../../images/ProfileImg.png";

export const SentRequest = ({ sentRequest }) => {
  return (
    <>
      <h1 className="text-2xl font-medium mb-5">Invite Sent</h1>
      {sentRequest.map((data, index) => (
        <div key={data.receiver._id} className="flex items-start gap-3">
          <div className="relative shrink-0">
            <img
              src={
                data.receiver.profile
                  ? `http://localhost:3005/uploads/profile/${data.receiver.profile}`
                  : ProfileImg
              }
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
            />
          </div>

          <div className="flex flex-col gap-0.5">
            <h2 className="text-base font-semibold text-gray-900 leading-snug hover:text-indigo-600 transition-colors cursor-pointer">
              {data.receiver.firstName} {data.receiver.lastName}
            </h2>

            {data.receiver.headline && (
              <p className="text-xs text-gray-600 line-clamp-1">
                {data.receiver.headline}
              </p>
            )}

            {data.receiver.clgName && (
              <p className="text-xs text-gray-600 line-clamp-1">
                {data.receiver.clgName}
              </p>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
