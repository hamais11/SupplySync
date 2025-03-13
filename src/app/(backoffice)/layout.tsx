'use client'
import Navbar from "@/components/backoffice/navbar";
import Sidebar from "@/components/backoffice/sidebar";

import 'flowbite';
import React, { useState } from "react";

export default function Layout({ children }: any) {
  const [ showSideBar, setShowSideBar] =useState(false)
  return (
    <div className="flex">
      {/*  sidebar */}

      <Sidebar />
      <div className="xl:ml-72 ml-80  flex-grow bg-slate-100 dark:text-slate-300 dark:bg-slate-500 min-h-screen">
        {/*  Header */}
        <Navbar  />

        <main className=" ml-2 p-5 bg-white dark:bg-slate-900 text-slate-50 min-h-screen">
          {children}
        </main>
      </div> 
      {/*  main body */}
    </div>
  );
}
