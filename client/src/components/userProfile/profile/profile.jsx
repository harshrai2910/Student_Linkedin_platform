import { motion } from "motion/react";
import { Skills } from "./skills";
import { UserProfile } from "./userProfile";
import { Achievement } from "./achievement";
import { Language } from "./language";
import { ProfileURL } from "./profileURL";
import { Contact } from "./contact";
import { UserPost } from "./post";

export const Profile = ({ userData }) => {
  const skills = userData.skills;
  const achievement = userData.achievements;
  return (
    <div className="flex items-center justify-center mt-15 mb-20">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-6xl grid grid-cols-1 md:grid-cols-18 gap-6"
      >
        <div className="md:col-span-13 ">
          <div className="border border-slate-200 rounded-2xl p-6 shadow-sm bg-white mb-3">
            <UserProfile userData={userData} />
          </div>
          <div className="border border-slate-200 rounded-2xl p-6 shadow-sm bg-white mb-3">
            <Skills skills={skills} />
          </div>

          <div className="border border-slate-200 rounded-2xl px-6 pt-6 pb-2 shadow-sm bg-white mb-3">
            <UserPost />
          </div>

          <div className="border border-slate-200 rounded-2xl p-6 shadow-sm bg-white mb-3">
            <Achievement achievement={achievement} />
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="w-full border rounded-2xl p-4 border-slate-200 shadow-sm bg-white mb-3">
            <Language userData={userData} />
          </div>
          <div className="border rounded-2xl p-4 border-slate-200 shadow-sm bg-white mb-3">
            <ProfileURL userData={userData} />
          </div>
          <div className="border rounded-2xl p-4 border-slate-200 shadow-sm bg-white mb-3">
            <Contact userData={userData} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
