import { useInView } from 'framer-motion';
import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
    src: string;
}

export function VideoPlayer({ src }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const isInView = useInView(videoRef, { once: true });

    useEffect(() => {
        if (isInView) {
            videoRef.current?.play();
        } else {
            videoRef.current?.pause(); 
        }
    }, [isInView]);

    return (
        <video ref={videoRef} controls preload="auto" className="w-full h-full">
            <source src={src} type="video/mp4" />
        </video>
    );
}

