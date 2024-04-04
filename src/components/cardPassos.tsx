
interface CardPassosProps {
    tituloCardPassos: string | undefined,
    textoCardPassos: string | undefined,
}

export function CardPassos({ tituloCardPassos, textoCardPassos }: CardPassosProps) {
    return (
        <div className="text-pretoCami w-full h-full rounded-3xl p-3 border border-zinc-300">
            <h1 className="font-bold text-marromCami text-xl mb-2">
                {tituloCardPassos}
            </h1>
            <p className="w-full h-full">
                {textoCardPassos}
            </p>
        </div>

    )
}