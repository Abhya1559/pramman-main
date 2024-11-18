import React from "react";
import { Link, Outlet } from "react-router-dom";
import { CiSettings as SettingsIcons } from "react-icons/ci";
import { CgProfile as CgProfile } from "react-icons/cg";
import { HiOutlineHome as HomeIcon } from "react-icons/hi2";
import { CgOrganisation as OrganisationIcon } from "react-icons/cg";
import { MdOutlineEmojiEvents as EventIcon } from "react-icons/md";
import { LuLayoutTemplate as TemplateIcon } from "react-icons/lu";
import { LiaCertificateSolid as CertificateIcon } from "react-icons/lia";
import { TbApps as AppCenterIcon } from "react-icons/tb";
import { BiLogOut as LogOutIcon } from "react-icons/bi";

const menuLinks = [
  {
    name: "Home",
    icon: HomeIcon,
    link: "/#",
  },
  {
    name: "Organisation",
    icon: OrganisationIcon,
    link: "/organisation",
  },
  {
    name: "Event",
    icon: EventIcon,
    link: "/events",
  },
  {
    name: "template",
    icon: TemplateIcon,
    link: "/templates",
  },
  {
    name: "Certificate",
    icon: CertificateIcon,
    link: "/certificates",
  },
  {
    name: "AppCenter",
    icon: AppCenterIcon,
    link: "/appcenter",
  },
  {
    name: "Logut",
    icon: LogOutIcon,
    link: "/logout",
  },
];

export default function Dashboard(params) {
  return (
    <div id="main-container" className="bg-white">
      <div
        id="container-nav"
        className=" bg-white flex justify-between items-center"
      >
        <div id="heading" className="text-gray-500 p-4">
          <h3>
            <a href="/">Pramman-patra</a>
          </h3>
        </div>
        <div
          id="setting-icons"
          className="relative flex justify-between items-center "
        >
          <SettingsIcons className=" right-5 top-1/2  mr-4  text-gray-500 focus:outline-none" />
          <CgProfile className="right-5 top-1/2 mr-4 text-gray-500 focus:outline-none" />
        </div>
      </div>
      <div id="container-dashboard" className="flex">
        <div
          id="side-bar"
          className="flex flex-col gap-8 bg-gray-100 w-20 text-gray-500 min-h-screen p-4"
        >
          {menuLinks.map((menuBtn, index) => (
            <MenuIconButton
              Icon={menuBtn.icon}
              className={""}
              link={menuBtn.link}
              text={menuBtn.name}
              key={index}
            />
          ))}
        </div>
        <div id="content" className="flex-grow p-4">
          <div className="relative pl-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuIconButton({ Icon, text, link, className }) {
  return (
    <Link
      to={"/dashboard" + link}
      className="flex flex-col justify-center items-center  hover:scale-110"
    >
      <Icon className={`${className}`} />
      <span className="text-xs">{text}</span>
    </Link>
  );
}
