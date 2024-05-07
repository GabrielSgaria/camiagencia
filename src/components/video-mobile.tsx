import Image from "next/image";
import { VideoPlayer } from "./vdo";

export default function VideoMobile() {
    return (
        <div className="flex items-center justify-center h-[250px] sm:h-[400px] lg:h-[594px] container mx-auto mt-10 relative px-0" id="about">
            <VideoPlayer src="https://media.graphassets.com/ChxhkMSvSfObFUyTkwHK" />
        </div >
    )
}