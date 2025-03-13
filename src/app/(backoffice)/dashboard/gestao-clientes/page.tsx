'use client'
import CustomDataTable from '@/components/backoffice/CustomDataTable'
import Heading from '@/components/backoffice/Heading'
import PageHeader from '@/components/backoffice/PageHeader'
import TableAction from '@/components/backoffice/TableAction'
import { clientes } from '@/utils/data'
import React, { useState } from 'react'
import { Cliente } from "@/utils/types";

export default function page() {
  //const [data, setData] = useState<Cliente[]>([]);
  const data = clientes as unknown as Cliente[]
  
  return (
    <div>
     <PageHeader
        heading="Clientes"
        href={"/dashboard/gestao-clientes/new-cliente"}
        linkTitle="Novo Cliente"
      />
      <TableAction />
      <CustomDataTable data_={data}/>
      
    </div>
  )
}