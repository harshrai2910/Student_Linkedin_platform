import { motion } from "motion/react";
import { ProfileServices } from "./profileService";
import { Connections } from "./connections";
import { ShowAllPost } from "./showAllPost";
import { Loader } from "../loader";

export const Dashboard = ({ AllPosts, userData }) => {
  return (
    <>
      <div className="flex items-center justify-center mt-15">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-6xl grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div>
            {/* sticky top-15 left-0 */}
            <div className="md:col-span-1">
              <div className="border border-slate-200 rounded-2xl p-6 shadow-sm bg-white mb-3 ">
                <ProfileServices userData={userData} />
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 shadow-sm bg-white mb-3">
                <Connections />
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="border border-slate-200 rounded-2xl p-6 shadow-sm bg-white mb-3">
              <ShowAllPost userData={userData} AllPosts={AllPosts} />
            </div>
          </div>
          <div>
            <div className="md:col-span-1 sticky top-15 left-0">
              <div className="border border-slate-200 rounded-2xl p-6 shadow-sm bg-white mb-3">
                Pending...
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
