"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  FileLogo,
  MyMedSync,
  Overview,
  Records,
  Recents,
  Profile,
  Logout,
} from "@icons";


interface IconObject {
  name: string;
  icon: React.FC<{ fill: string }>;
  path: string;
}

const SideBar = () => {
  const pathname = usePathname();
  const items: IconObject[] = [
    { name: "Overview", icon: Overview, path: "./overview" },
    { name: "Records", icon: Records, path: "./records" },
    { name: "Recents", icon: Recents, path: "./recents" },
    { name: "Profile", icon: Profile, path: "./profile" },
  ];

  return (
    <div className="flex flex-col h-[100%] fixed top-0 w-[256px] bg-[#FFFFFF]">
      <div className="flex ml-6 gap-2 pt-[32px] pb-[104px]">
        <FileLogo />
        <MyMedSync />
      </div>
      <div className="flex flex-col gap-1 ml-6">
        {items.map((item, index) => {
          const isActive = pathname.includes(item.path.substring(1));
          return (
            <Link
              href={item.path}
              key={index}
              className={` w-[208px] h-[37px] flex items-center   ${
                isActive
                  ? "border-l-4 border-[#3962CB] bg-[#FBFCFE] rounded-[4px]"
                  : ""
              } `}
            >
              <div
                className={` flex py-2 ${
                  isActive
                    ? "text-[#3962CB] px-2 font-bold"
                    : "px-3 font-normal"
                } text-sm gap-2`}
              >
                <item.icon fill={`${isActive ? "#3962CB" : ""}`} /> {item.name}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center items-center bg-[#FBFCFE] rounded-lg flex-col pt-4 ml-6 w-[208px] gap-6 mt-auto">
        <div className="justify-center items-center flex flex-col gap-4">
          <Image
            src="/images/lady.png"
            alt="user-image"
            width={56}
            height={56}
          />
          <div className="flex flex-col justify-center items-center gap-1">
            <div className="text-sm text-[#333333] font-semibold">Grace Smith Victoria</div>
            <div className="text-xs text-[#A1A1A1]">gracesmith@gmail.com</div>
          </div>
        </div>

        <div className="flex text-sm font-semibold text-[#DF1717] pb-[52px] gap-2">
          <Logout />
          <div>Log out</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
