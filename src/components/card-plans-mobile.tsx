import { BookOpenText, Books, Pencil } from "@phosphor-icons/react";
import { BookBookmark, Rocket } from "@phosphor-icons/react/dist/ssr";


export function CardPlansMobile() {
    return (
        <section className="mt-8">
            <div className="mx-auto container flex">
                <div className="w-full px-3 rounded-2xl flex flex-col-reverse justify-between gap-10 border border-zinc-300 py-7 shadow-xl bg-gradient-to-b to-zinc-50 from-zinc-100">
                    <div className="w-full h-[400px] flex flex-col gap-4">
                        <h1 className="text-center text-cinzaCami text-xl">Nossos Planos</h1>
                        <div className="flex flex-row w-full h-full justify-between">

                            <div className="w-full h-full relative ml-10">

                                <div className="absolute left-0 bottom-0 h-full flex items-center">
                                    <div className="h-full flex flex-col items-center relative">
                                        <div className="bg-gradient-to-t to-emerald-900 from-emerald-900/45 rounded-2xl w-9 h-[30%] absolute bottom-10 text-xs flex flex-col justify-center items-center text-brancoCami/60">
                                            <span>B</span>
                                            <span>A</span>
                                            <span>S</span>
                                            <span>I</span>
                                            <span>C</span>
                                            <span>O</span>
                                        </div>
                                        <Pencil className="size-6 bottom-0 absolute text-emerald-900 animate-pulse" />
                                    </div>
                                </div>

                                <div className="absolute left-1/4 bottom-0 h-full flex flex-col gap-2 items-center">
                                    <div className="h-full flex flex-col items-center relative">
                                        <div className="bg-gradient-to-t to-emerald-900 from-emerald-900/45 rounded-2xl w-9 h-3/6 absolute bottom-10 flex flex-col justify-center items-center text-brancoCami/60">
                                            <span>S</span>
                                            <span>O</span>
                                            <span>C</span>
                                            <span>I</span>
                                            <span>A</span>
                                            <span>L</span>
                                        </div>
                                        <BookOpenText className="size-6 bottom-0 absolute text-emerald-900 animate-pulse" />
                                    </div>
                                </div>

                                <div className="absolute left-2/4 bottom-0 h-full flex flex-col gap-2 items-center">
                                    <div className="h-full flex flex-col items-center relative">
                                        <div className="bg-gradient-to-t to-emerald-900 from-emerald-900/45 rounded-2xl w-9 h-[70%] absolute bottom-10 flex flex-col justify-center items-center text-brancoCami/60">
                                            <span>P</span>
                                            <span>A</span>
                                            <span>P</span>
                                            <span>E</span>
                                            <span>L</span>
                                            <span>A</span>
                                            <span>R</span>
                                            <span>I</span>
                                            <span>A</span>
                                        </div>
                                        <BookBookmark className="size-6 bottom-0 absolute text-emerald-900 animate-pulse" />
                                    </div>
                                </div>

                                <div className="absolute left-3/4 bottom-0 h-full flex flex-col gap-2 items-center">
                                    <div className="h-full flex flex-col items-center relative">
                                        <div className="bg-gradient-to-t to-emerald-900 from-emerald-900/45 rounded-2xl w-9 h-5/6 absolute bottom-10 flex flex-col justify-center items-center text-brancoCami/60">
                                            <span>C</span>
                                            <span>O</span>
                                            <span>M</span>
                                            <span>P</span>
                                            <span>L</span>
                                            <span>E</span>
                                            <span>T</span>
                                            <span>O</span>
                                        </div>
                                        <Books className="size-6 bottom-0 absolute text-emerald-900 animate-pulse" />
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                    <div className="w-full flex flex-col gap-8 text-center">
                        <div className="flex flex-col text-xl font-bold text-pretoCami items-center text-center">
                            <h1>Você pode escolher o</h1>
                            <h1>plano que mais se adeque</h1>
                            <h1>ao seu momento e necessidade.</h1>
                        </div>
                        <div className="flex flex-col gap-2 text-base text-justify">

                            <p>
                                <span className="font-bold mr-1">
                                    Básico:
                                </span>
                                Conta com criação de
                                uma logo, tipografia e Paleta de cores.
                            </p>
                            <p>
                                <span className="font-bold mr-1">
                                    Social:
                                </span>
                                Pacote Básico + Variaçao da logo e sublogo e 5 capas para destaque, 50 templates editáveis para feed e stories
                            </p>
                            <p>
                                <span className="font-bold mr-1">
                                    Papelaria:
                                </span>

                                Tudo do Básico, mais layouts para
                                impressos, como: Cartao de visitas, receituario,
                                timbrado de A4. Pattern Variação da logo e sublogo
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