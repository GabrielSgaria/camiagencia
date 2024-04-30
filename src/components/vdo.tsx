interface VideoPlayerProps {
    src: string
}

export function VideoPlayer({ src }: VideoPlayerProps) {

    return (
        <video controls preload="auto" className="w-full h-full">
            <source src={src} type="video/mp4" />
        </video>
    )
}