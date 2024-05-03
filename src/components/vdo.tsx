import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
    src: string;
}

export function VideoPlayer({ src }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (videoRef.current) {
                const videoRect = videoRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                const isVideoVisible = videoRect.top < windowHeight && videoRect.bottom >= 0;
                
                if (isVideoVisible && videoRef.current.paused) {
                    videoRef.current.play();
                } else if (!isVideoVisible && !videoRef.current.paused) {
                    videoRef.current.pause();
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <video
            ref={videoRef}
            controls
            preload="auto"
            className="w-full h-full"
            onClick={() => {
                if (videoRef.current) {
                    videoRef.current.play();
                }
            }}
        >
            <source src={src} type="video/mp4" />
        </video>
    );
}
