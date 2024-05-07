import Image from "next/image";
import { VideoPlayer } from "./vdo";

export default function VideoDesktop() {
    return (
        <div className="flex items-center justify-center h-[250px] sm:h-[400px] lg:h-[594px] container mx-auto mt-10 relative px-0" id="about">
            <VideoPlayer src="https://media.graphassets.com/ChxhkMSvSfObFUyTkwHK" />
            <Image width={900} height={900} alt="Icon 1" src='/image/1.png' className="absolute left-0 -top-4 w-36 sm:top-0 md:w-36 lg:left-10 lg:w-60 md:top-1/3 z-50" />
            <Image width={900} height={900} alt="Icon 1" src='/image/2.png' className="absolute right-0 w-36 -bottom-14 sm:top-0 md:w-36 lg:right-10 lg:top-[50%] md:top-1/3 lg:w-60 z-50" />
        </div>
    )
}