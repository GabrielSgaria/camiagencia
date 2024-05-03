import { BookOpenText, Books, Pencil, RocketLaunch } from "@phosphor-icons/react";
import { BookBookmark, Rocket } from "@phosphor-icons/react/dist/ssr";



export function CardPlansDesktop() {
    return (
        <section className="py-16">
            <div className="mx-auto container flex">
                <div className="w-full px-3 sm:w-full sm:h-[500px] sm:px-8 rounded-2xl flex flex-row justify-between gap-10 border border-zinc-300 py-7 shadow-xl bg-gradient-to-b to-zinc-50 from-zinc-100">

                    <div className="w-full flex flex-col gap-4">
                        <h1 className="text-center text-cinzaCami text-xl">Nossos Planos</h1>
                        <div className="flex flex-row w-full h-full justify-between">

                            <div className="flex flex-col w-32 text-xl font-bold text-cinzaCami">
                                <p className="mt-4">Completo</p>
                                <p className="mt-16">Papelaria</p>
                                <p className="mt-36">Básico</p>

                            </div>

                            <div className="w-full h-full relative ml-20">

                                <div className="absolute left-0 bottom-0 h-full flex items-center">
                                    <div className="h-full flex flex-col items-center relative">
                                        <div className="bg-gradient-to-t to-emerald-900 from-emerald-900/45 rounded-2xl w-12 h-1/6 absolute bottom-10" />
                                        <Pencil className="size-8 bottom-0 absolute text-emerald-900 animate-pulse" />
                                    </div>
                                </div>
                                <div className="absolute left-1/3 bottom-0 h-full flex flex-col gap-2 items-center">
                                    <div className="h-full flex flex-col items-center relative" >
                                        <div className="bg-gradient-to-t to-emerald-900 from-emerald-900/45 rounded-2xl w-12 h-[60%] absolute bottom-10" />
                                        <BookBookmark className="size-8 bottom-0 absolute text-emerald-900 animate-pulse" />
                                    </div>
                                </div>
                                <div className="absolute left-2/3 bottom-0 h-full flex flex-col gap-2 items-center">
                                    <div className="h-full flex flex-col items-center relative" >
                                        <div className="bg-gradient-to-t to-emerald-900 from-emerald-900/45 rounded-2xl w-12 h-5/6 absolute bottom-10" />
                                        <Books className="size-8 bottom-0 absolute text-emerald-900 animate-pulse" />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex flex-col text-start text-2xl font-bold text-pretoCami">
                            <h1>Você pode escolher o</h1>
                            <h1>plano que mais se adeque</h1>
                            <h1>ao seu momento e necessidade.</h1>
                        </div>
                        <div className="flex flex-col gap-16 text-lg mt-10">

                            <p>
                                <span className="font-bold mr-1">
                                    Básico:
                                </span>
                                Logotipo exclusiva, tipografia e paleta de cores.
                            </p>

                            <p>
                                <span className="font-bold mr-1">
                                    Papelaria:
                                </span>
                                Todos os itens acima, além dos layouts: Cartão de visitas, receituário, timbrado e pasta A4.
                            </p>

                            <p id='comparsion'>
                                <span className="font-bold mr-1">Completo:</span>
                                Básico + Papelaria + 50 templates para feed e stories + 5 capas p/ destaque.
                            </p>



                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}