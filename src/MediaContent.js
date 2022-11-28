import React from 'react';

export default function MediaContent(props) {

    const displayMediaContent = (props) => {
        const {filepath, orientation} = props;

        if (filepath.includes(".mp4")) {
            return (
                <video autoPlay loop
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
            {displayMediaContent(props)}
        </>
    )
}