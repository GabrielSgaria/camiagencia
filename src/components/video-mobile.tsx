export default function VideoMobile() {
    return (
        <div className="flex items-center justify-center h-[250px] sm:h-[400px] lg:h-[594px] container mx-auto mt-10 relative px-0" id="about">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/_zu1wB6aO2E?si=TTZBg36LhFFnj_yB&amp;controls=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen"
            ></iframe>
        </div >
    )
}