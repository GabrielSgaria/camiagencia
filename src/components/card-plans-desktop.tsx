import { RocketLaunch } from "@phosphor-icons/react";
import { BookBookmark, Rocket } from "@phosphor-icons/react/dist/ssr";



export function CardPlansDesktop() {
    return (
        <section className="py-16 ">
            <div className="mx-auto container flex">
                <div className="w-full px-3 sm:w-full sm:h-[428px] sm:px-8 rounded-2xl flex flex-row justify-between gap-10 border border-zinc-300 py-7 shadow-xl bg-gradient-to-b to-zinc-50 from-zinc-100">

                    <div className="w-full flex flex-col gap-4">
                        <h1 className="text-center text-cinzaCami text-xl">Nossos Planos</h1>
                        <div className="flex flex-row w-full h-full justify-between">

                            <div className="flex flex-col w-32 text-xl font-bold text-cinzaCami">
                                <p className="mt-4">Completo</p>
                                <p className="mt-20">Papelaria</p>
                                <p className="mt-24">Básico</p>

                            </div>

                            <div className="w-full h-full relative ml-20">

                                <div className="absolute left-0 bottom-0 h-full flex items-center">
                                    <div className="h-full flex flex-col items-center relative">
                                        <div className="bg-gradient-to-t to-emerald-900 from-emerald-900/45 rounded-2xl w-12 h-1/6 absolute bottom-10" />
                                        <RocketLaunch className="size-8 bottom-0 absolute text-emerald-900 animate-pulse" />
                                    </div>
                                </div>

                                <div className="absolute left-1/3 bottom-0 h-full flex flex-col gap-2 items-center">
                                    <div className="h-full flex flex-col items-center relative" >
                                        <div className="bg-gradient-to-t to-emerald-900 from-emerald-900/45 rounded-2xl w-12 h-3/6 absolute bottom-10" />
                                        <Rocket className="size-8 bottom-0 absolute text-emerald-900 animate-pulse" />
                                    </div>
                                </div>

                                <div className="absolute left-2/3 bottom-0 h-full flex flex-col gap-2 items-center">
                                    <div className="h-full flex flex-col items-center relative" >
                                        <div className="bg-gradient-to-t to-emerald-900 from-emerald-900/45 rounded-2xl w-12 h-5/6 absolute bottom-10" />
                                        <BookBookmark className="size-8 bottom-0 absolute text-emerald-900 animate-pulse" />
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
                        <div className="flex flex-col gap-5 text-lg">

                            <p>
                                <span className="font-bold mr-1">
                                    Básico:
                                </span>
                                Conta com criação de
                                uma logo, tipografia e Paleta de cores.
                            </p>
                            <p>
                                <span className="font-bold mr-1">
                                    Papelaria:
                                </span>

                                Tudo do Básico, mais layouts para
                                impressos, como: Cartao de visitas, receituario,
                                timbrado de <span className="font-sans">A4.</span >
                            </p>

                            <p>
                                <span className="font-bold mr-1">Completo:</span>
                                Tudo dos planos anteriores, mais
                                50 templates para feed e 50 templates para Stories
                                e 5 capas para destaques.
                            </p>



                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}