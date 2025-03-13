import Image from 'next/image'
import explorador from '../../public/explorador.webp'
import Link from 'next/link'

export default function Pagina404() {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-7 text-center  dark:bg-slate-900 bg-white">
            <h1 className="text-3xl text-zinc-400 font-bold">404 - Página não encontrada!</h1>
            <Image src={explorador} alt="Erro 404" width={300} height={300} />

            <p className="text-lg max-w-[600px]  text-slate-900 dark:text-white">
                Você parece ter perdido o caminho... Mas não se preocupe, até os melhores
                exploradores se perdem às vezes! 🧭
            </p>

            <Link href="/dashboard" className="bg-blue-500 py-2 px-4 rounded-md">
                Voltar
            </Link>
        </div>
    )
}
