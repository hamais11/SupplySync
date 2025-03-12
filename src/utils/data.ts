
import { ClipboardList, Globe, ReceiptText, ScrollText, Settings, Truck, User, UsersRound } from "lucide-react";

export const menu =[
    {id:1, title:"Gestão de Clientes", icon: UsersRound, href:"/dashboard/gestao-clientes"},
    {id:2, title:"Gestão de Requisições", icon: ReceiptText, href:"/dashboard/gestao-requisicoes"},
    {id:3, title:"Gestão de Fornecedores", icon: Truck, href:"/dashboard/gestao-fornecedores"},
    {id:3, title:"Sourcing", icon: Globe, href:"/dashboard/sourcing"},
    {id:4, title:"Pró-formas", icon: ScrollText, href:"/dashboard"},
    {id:5, title:"Gestão de Facturas", icon: ClipboardList, href:"/dashboard"},
    {id:6, title:"Gestão de Prudutos", icon: ClipboardList, href:"/dashboard"},
]
export const settings =[
    {id:1, title:"Perfil", icon: User, href:"/dashboard/gestao-clientes"},
    {id:2, title:"Definições", icon: Settings, href:"/dashboard/gestao-requisicoes"},
]