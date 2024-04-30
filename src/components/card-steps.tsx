import Image, { StaticImageData } from "next/image"


interface CardPassosProps {
    tituloCardPassos: string,
    textoCardPassos: string,
    srcIcon: StaticImageData,
    altIcon: string,

}

export function CardPassos({ tituloCardPassos, textoCardPassos, srcIcon, altIcon }: CardPassosProps) {
    return (
        <div className="text-pretoCami w-full sm:w-11/12 h-full rounded-3xl py-3 sm:px-5 text-center sm:text-start flex ">
            <div className="min-w-20 max-w-20">
                <Image
                    width={900}
                    height={900}
                    src={srcIcon}
                    alt={altIcon}
                />
            </div>
            <div >

                <h1 className="font-bold text-azulCami text-xl sm:text-xl text-start mx-2">
                    {tituloCardPassos}
                </h1>
                <p className="font-bold text-azulCami text-base sm:text-lg text-justify mx-2">
                    {textoCardPassos}
                </p>
            </div>
        </div>

    )
}