'use client'
import Image from "next/image";
import React from "react";
import LogoHome from "@/img/logoHome.png";
import { menu, settings } from "@/utils/data";
import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathName = usePathname();
  return (
    <div className="xl:w-72 w-80 xl:p-4 p-2 bg-white dark:text-slate-300 dark:bg-gray-800 flex-col justify-start items-start gap-5 inline-flex fixed left-0 top-0 h-full">
      <div className="w-full pt-0 justify-between items-center gap-2.5 inline-flex px-2 top-0 ">
        <a href="javascript:;">
          <Image
          
            src={LogoHome}
            alt="Pagedone logo image"
            height={100}
            width={100}
          />
        </a>
       
      </div>
      <div className="w-full p-3 rounded-lg border border-gray-300 ">
        <div className="w-full items-center flex">
          <div className="w-full justify-between items-center inline-flex">
            <div className="items-center flex">
              <img
                className="rounded-lg h-14 w-14"
                alt="Ronald image"
                src="https://dwv7infdfa.ufs.sh/f/4MlElOKgtT9fzY4wnk9VZ5RYXDePySNC1dv6FBzuAMqaf9GU"
              />
              <div className="flex-col inline-flex ml-2.5">
                <h2 className="text-gray-700 text-sm font-semibold leading-snug dark:text-slate-300 dark:bg-gray-800">
                  Jaime André
                </h2>
                <h6 className="text-black/20 text-xs font-normal leading-4 dark:text-slate-300 dark:bg-gray-800">
                  jaime@hamais.com
                </h6>
              </div>
            </div>
            <div className="flex items-center">
              <a href="javascript:;" className="w-5 h-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g id="More Vertical">
                    <path
                      id="icon"
                      d="M10.0156 14.9896V15.0396M10.0156 9.97595V10.026M10.0156 4.96228V5.01228"
                      stroke="black"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-2 px-3 items-center flex">
          <h6 className="text-gray-500 text-xs font-semibold leading-4">
            MENU
          </h6>
        </div>
        <ul className="flex-col gap-1 flex">
          <li>
            <Link href="/dashboard">
              <div className="p-3 rounded-lg items-center inline-flex ">
                <div className="h-3 items-center gap-3 flex ">
                  <div className="relative">
                    <LayoutDashboard className="text-gray-500" />
                  </div>
                  <h2 className="text-gray-500 text-sm font-normal leading-snug">
                    Dashboard
                  </h2>
                </div>
              </div>
            </Link>
          </li>

          {menu.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={i}>
                <Link href={item.href}>
                  <div className={
                    pathName === item.href?
                    
                    "flex-col flex p-3 bg-white  dark:text-slate-300 dark:bg-slate-800 border-l-4 border-blue-600 text-blue-600 bg-blue-100"
                  : "flex-col flex p-3 bg-white  dark:text-slate-300 dark:bg-slate-800 "
                  }>
                    <div className="h-5 gap-3 flex">
                      <div className="relative">
                        <Icon className="text-gray-500" />
                      </div>
                      <h2 className="text-gray-500 text-sm font-medium leading-snug">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-full flex-col flex">
        <div className="h-8 px-3 items-center inline-flex">
          <h6 className="text-gray-500 text-xs font-semibold leading-4">
            Customização
          </h6>
        </div>
        <ul className="flex-col gap-1 flex">
          {settings.map((item, i) => {
            const Icon= item.icon
            return (
              <li key={i}>
                <a href="javascript:;">
                  <div className="p-3 rounded-lg items-center inline-flex">
                    <div className="h-5 items-center gap-3 flex">
                      <div className="relative">
                        <Icon className="text-gray-500"/>
                      </div>
                      <h2 className="text-gray-500 text-sm font-medium leading-snug">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                </a>
              </li>
            );
          })}

          <li>
            <a href="javascript:;">
              <div className="p-3 rounded-lg items-center inline-flex">
                <div className="h-5 items-center gap-3 flex">
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g id="Logout">
                        <path
                          id="icon"
                          d="M9.16667 17.5L5.83333 17.5V17.5C3.98765 17.5 2.5 16.0123 2.5 14.1667V14.1667L2.5 5.83333V5.83333C2.5 3.98765 3.98765 2.5 5.83333 2.5V2.5L9.16667 2.5M8.22814 10L17.117 10M14.3393 6.66667L17.0833 9.41074C17.3611 9.68852 17.5 9.82741 17.5 10C17.5 10.1726 17.3611 10.3115 17.0833 10.5893L14.3393 13.3333"
                          stroke="#6B7280"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </div>
                  <h2 className="text-gray-500 text-sm font-medium leading-snug">
                    Logout
                  </h2>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
