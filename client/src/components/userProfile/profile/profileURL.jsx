import { HiPencil } from "react-icons/hi2";

export const ProfileURL = ({ userData }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-medium">Public profile & URL</h1>
      </div>
      <a
        href={`${userData?.links?.linkedin}`}
        target="_blank"
        className="text-xs border-none text-gray-500"
      >
        {userData?.links?.linkedin}
      </a>
    </>
  );
};
