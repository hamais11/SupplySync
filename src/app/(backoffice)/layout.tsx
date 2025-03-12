'use client'
import Navbar from "@/components/backoffice/navbar";
import Sidebar from "@/components/backoffice/sidebar";
//import Navbar from "@/components/backoffice/navbar";
//import Sidebar from "@/components/backoffice/sidebar";
import 'flowbite';
import React, { useState } from "react";

export default function Layout({ children }: any) {
  const [ showSideBar, setShowSideBar] =useState(false)
  return (
    <div className="flex">
      {/*  sidebar */}

      <Sidebar />
      <div className="ml- flex-grow bg-slate-100 min-h-screen">
        {/*  Header */}
        <Navbar  />

        <main className="p-10 bg-slate-100 dark:bg-slate-900 text-slate-50 min-h-screen">
          {children}
        </main>
      </div> 
      {/*  main body */}
    </div>
  );
}
