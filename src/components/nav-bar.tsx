import Image from "next/image";
import logo from "../../public/image/logo.png"
import { motion } from 'framer-motion'
export function NavBar() {
    return (
        <div className="bg-transparent">
            <nav className="sm:flex mx-auto container h-20">
                <div className="flex flex-row justify-center sm:justify-between w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -200, scale: 0.7 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="w-40 flex my-4">
                        <Image
                            width={9000}
                            height={9000}
                            alt="Logo Cami Agência Criativa"
                            src={logo}
                        />
                    </motion.div>
                    <div className="sm:flex gap-6 hidden ">
                        <button className="h-full transition-all duration-200 text-cinzaCami hover:text-zinc-50  hover:bg-marromCami font-sans text-sm uppercase px-2">O QUE FAZEMOS?</button>
                        <button className="h-full transition-all duration-200 text-cinzaCami hover:text-zinc-50 hover:bg-marromCami font-sans text-sm uppercase px-2">BENEFÍCIOS</button>
                    </div>


                </div>
            </nav>
        </div>
    )
}