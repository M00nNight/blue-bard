import Image from "next/image";
import { FaHashtag, FaTwitter } from "react-icons/fa";
import { Inter } from "next/font/google";
import { RiHome7Line, RiSlashCommands2 } from "react-icons/ri";
import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { TbBell } from "react-icons/tb";
import { CiMail, CiUser } from "react-icons/ci";
import { IoMdContacts, IoMdListBox } from "react-icons/io";
import { LiaBookmarkSolid } from "react-icons/lia";
import { BsPeople } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <MdHomeFilled />,
  },
  {
    title: "Explore",
    icon: <IoSearchOutline />,
  },
  {
    title: "Notifications",
    icon: <TbBell />,
  },
  {
    title: "Messages",
    icon: <CiMail />,
  },
  {
    title: "Grok",
    icon: <RiSlashCommands2 />,
  },
  {
    title: "Lists",
    icon: <IoMdListBox />,
  },
  {
    title: "Bookmarks",
    icon: <LiaBookmarkSolid />,
  },
  {
    title: "Communities",
    icon: <BsPeople />,
  },
  {
    title: "Profile",
    icon: <CiUser />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-8">
          <div className=" text-3xl h-fit hover:bg-gray-600 rounded-full  p-2 cursor-pointer transition-all ">
            <FaTwitter />
          </div>
          <div className=" mt-4 text-2xl font-semibold ">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className=" flex justify-start items-center gap-4 hover:bg-gray-600 rounded-full px-5 py-2 w-fit cu"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-6 border-gray-400  border-r-[1px] border-l-[1px] ">
          allo
        </div>
        <div className="col-span-3">game</div>
      </div>
    </div>
  );
}
