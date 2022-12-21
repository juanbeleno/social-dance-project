import React, { useRef } from 'react';

export default function MediaContent(props) {

    const DisplayMediaContent = (props) => {
        const {filepath, orientation} = props;

        if (filepath.includes(".mp4")) {
            const videoRef= useRef();
            const setPlayBack = () => {
                videoRef.current.playbackRate = 0.75;
            };
            return (
                <video autoPlay loop muted
                    ref={videoRef}
                    onCanPlay={() => setPlayBack()}
                    className={`m-auto ${orientation === 'portrait' ? 'h-full' : 'w-full'}`}>
                    <source src={`img/${filepath}`} type="video/mp4"/>
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