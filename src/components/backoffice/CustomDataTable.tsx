"use client";
import React, { useEffect, useState } from "react";

import { Cliente } from "@/utils/types";
import Image from "next/image";
import { Edit, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import TableSkeleton from "./tableSkelenton";

interface ClientesTableProps {
  data_: Cliente[];
}

export default function CustomDataTable({ data_ }: ClientesTableProps) {
  const arr = [1, 2, 3, 4, 5];
  const PAGE_SIZE = 10;
  const [curentPage, setCurrentPage] = useState(1);
  const startIndex = (curentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentlyDisplayedData = data_.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data_.length / PAGE_SIZE);

  const itemStartIndex = startIndex + 1;
  const itemEndIndex = Math.min(startIndex + PAGE_SIZE, data_.length);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data_.length > 0) {
      setIsLoading(false);
    }
  }, [data_]);


  //const data
  return (
    <div className="mt-8">
      
      <div className="relative  shadow-md sm:rounded-lg ">
        <table className="w-full overflow-scroll text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Nome do cliente
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Telefone
              </th>
              <th scope="col" className="px-6 py-3">
                Negocio
              </th>
              <th scope="col" className="px-6 py-3">
                type
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
          
            {isLoading ? <TableSkeleton /> : currentlyDisplayedData.map((item, i) => {
              return (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.id}
                  </th>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Image
                      className="w-10 h-10 rounded-full"
                      src={item.imagem}
                      alt="Jese image"
                      width={20}
                      height={20}
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        {item.nomeCliente}
                      </div>
                      <div className="font-normal text-gray-500">
                        {item.contribuinte}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.telefone}</td>
                  <td className="px-6 py-4">{item.endereco}</td>
                  <td className="px-6 py-4">{item.pais}</td>
                  <td className="px-6 py-4 space-x-2 flex">
                    <Link
                      href={`/dashboard/clientes/update/${item.id}`}
                      className="font-medium text-zinc-600 dark:text-zinc-500 hover:underline"
                    >
                      <Eye />
                    </Link>
                    <Link
                      href="#"
                      className="font-medium text-zinc-600 dark:text-zinc-500 hover:underline"
                    >
                      <Edit />
                    </Link>
                    <Link
                       href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      <Trash2 />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4"
          aria-label="Table navigation"
        >
          <span className="text-xl font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{" "}
            <span className="font-semibold text-gray-50 dark:text-white">
              {itemStartIndex}-{itemEndIndex}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-50 dark:text-white">
              {data_.length}
            </span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-14">
            <li>
              <button
                onClick={() => setCurrentPage(curentPage - 1)}
                disabled={curentPage == 1}
                className="flex items-center justify-center px-3 h-10 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => setCurrentPage(index + 1)}
                    disabled={curentPage == index + 1}
                    className={
                      curentPage == index + 1
                        ? `flex items-center justify-center
                                              px-3 h-10 leading-tight text-white
                                              bg-blue-600 border border-blue-300
                                               hover:bg-blue-800 hover:text-white
                                                dark:bg-slate-300 dark:border-slate-400
                                                
                                                dark:text-slate-800 dark:hover:bg-slate-300 `
                        : `flex items-center justify-center
                                              px-3 h-10 leading-tight text-gray-500
                                              bg-white border border-gray-300
                                               hover:bg-gray-100 hover:text-gray-700
                                                dark:bg-gray-800 dark:border-gray-700
                                                
                                                dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`
                    }
                  >
                    {index + 1}
                  </button>
                </li>
              );
            })}

            <li>
              <button
                onClick={() => setCurrentPage(curentPage + 1)}
                disabled={curentPage == totalPages}
                className="flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
