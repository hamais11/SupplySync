import { NextResponse } from "next/server";


export async function POST(request:any) {
    try {

        const { nomecliente, cidade, contribuinte, email, endereco,fax, ivacativoid, pais, site, telefone,tipoclienteid} = await request.json();
        const newClient = { nomecliente, cidade, contribuinte, email, endereco,fax, ivacativoid, pais, site, telefone,tipoclienteid}
        console.log(newClient)
        return NextResponse.json(newClient)
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"Faild to create new client", error
        }, {status: 500 })
        
    }
    
}