
interface CardPassosProps {
    tituloCardPassos: string,
    textoCardPassos: string,
}

export function CardPassos({ tituloCardPassos, textoCardPassos }: CardPassosProps) {
    return (
        <div className="text-pretoCami w-full h-full rounded-3xl py-3 px-1 sm:px-5 border bg-zinc-50 border-zinc-300 shadow-md text-center sm:text-start">
            <h1 className="font-bold text-marromCami text-xl mb-2">
                {tituloCardPassos}
            </h1>
            <p className="w-full h-full text-base">
                {textoCardPassos}
            </p>
        </div>

    )
}