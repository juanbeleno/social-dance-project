import React, { useRef } from 'react';

export default function MediaContent(props) {

    const DisplayMediaContent = (props) => {
        const {filepath, orientation} = props;
        const videoRef= useRef();

        if (filepath.includes(".mp4")) {
            const setPlayBack = () => {
                videoRef.current.playbackRate = 0.75;
            };
            return (
                <video autoPlay loop muted controlsList='nodownload' playsInline
                    ref={videoRef}
                    onCanPlay={() => setPlayBack()}
                    className={`m-auto ${orientation === 'portrait' ? 'h-full' : 'w-full'}`}>
                    <source
                        src={`img/${filepath}`}
                        type="video/mp4"
                        playsInline
                        webkit-playsinline="true"/>
                Your browser does not support the video tag.
                </video>
            )
        } else {
            return (
                <img
                src={`img/${filepath}`}
                alt=""
                className={`m-auto ${orientation === 'portrait' ? 'h-full' : 'w-full'}`}/>
            )
        }
    }

    return (
        <>
            {DisplayMediaContent(props)}
        </>
    )
}