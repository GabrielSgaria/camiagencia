import Image from "next/image";

export default function VideoDesktop() {
    return (
        <div className="flex items-center justify-center md:h-[435px]  lg:h-[520px] xl:h-[648px] container mx-auto mt-10 relative px-0" id="about">
            <iframe className="md:w-full lg:w-[90%] h-full relative z-0" src="https://www.youtube.com/embed/_zu1wB6aO2E?si=TTZBg36LhFFnj_yB&amp;controls=0&autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen"
            >

            </iframe>
            <Image width={900} height={900} alt="Icon 1" src='/image/1.png' className="absolute -left-4 -top-4 w-36 md:left-0 sm:top-0 md:w-36 lg:-left-10 lg:w-60 md:top-1/3 z-50" />
            <Image width={900} height={900} alt="Icon 1" src='/image/2.png' className="absolute -right-4 w-36 -bottom-14 md:right-0 sm:top-0 md:w-36 lg:-right-10 lg:top-[50%] md:top-1/3 lg:w-60 z-50" />
        </div>
    )
}