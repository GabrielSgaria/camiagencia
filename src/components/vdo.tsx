import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
    src: string;
}

export function VideoPlayer({ src }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <video ref={videoRef} controls preload="auto" className="w-full h-full">
            <source src={src} type="video/mp4" />
        </video>
    );
}
