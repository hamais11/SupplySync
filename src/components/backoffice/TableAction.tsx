import { Download, Search, Trash2 } from "lucide-react";
import React from "react";

export default function TableAction() {
  return (
    <div className="flex justify-between  bg-white dark:bg-slate-900 rounded-lg items-center gap-8 ">
      <button
        className="
    relative inline-flex items-center justify-center py-3 px-4 space-x-3 text-base font-medium text-gray-900 rounded-lg
    group dark:bg-slate-800  bg-slate-100
      border border-slate-900
  border border-blue-500 
    dark:text-white focus:ring-4
     focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
    
    
    "
      >
        <Download />
        <span>Export</span>
      </button>

      {/* Search */}
      <div className=" flex-grow">
        <label htmlFor="table-search" className="sr-only">
          Pesquisar
        </label>
        <div className="relative">
          <div
            className="absolute inset-y-0 start-0 rtl:inset-r-0
          flex items-center ps-3 pointer-events-none
          "
          >
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="table-search"
            className="block py-3 ps-10 text-sm text-gray-900
          border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500
          focus:border-blue-500 dark:bg-gray-500 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white
          dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full
      
          "
            placeholder="Pesquisar"
          />
        </div>
      </div>

      {/* Delete */}
      
    </div>
  );
}
