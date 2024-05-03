import { useInView } from 'framer-motion';
import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
    src: string;
}

export function VideoPlayer({ src }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    return (
        <video ref={videoRef} controls autoPlay muted playsInline preload="auto" className="w-full h-full  ">
            <source src={src} type="video/mp4" />
        </video>
    )
}

