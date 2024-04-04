import Image from "next/image";
import logo from "../../public/image/logo.png"

export function NavBar() {
    return (
        <div className="bg-transparent">
            <nav className="sm:flex mx-auto container h-20">
                <div className="flex flex-row justify-center sm:justify-between w-full">
                    <div className="w-40 flex my-4">
                        <Image
                            width={9000}
                            height={9000}
                            alt="Logo Cami Agência Criativa"
                            src={logo}
                        />
                    </div>
                    <div className="sm:flex gap-6 hidden ">
                        <button className="h-full text-zinc-400 hover:text-zinc-50  hover:bg-red-600 font-sans text-sm uppercase">O QUE FAZEMOS?</button>
                        <button className="h-full text-zinc-400 hover:text-zinc-50 hover:bg-red-600 font-sans text-sm uppercase">BENEFÍCIOS</button>
                    </div>


                </div>
            </nav>
        </div>
    )
}