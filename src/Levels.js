import React from 'react';

export default function Levels(props) {

    const displayLevels = (props) => {
        const {levels, selectedLevels} = props;
        return (
            Object.entries(levels).map(([level, name]) => {
                if (selectedLevels.includes(level)) {
                    return (
                        <div key={name} className="rounded cursor-pointer border-2 bg-gray-200 text-white p-5">
                            {name}
                        </div>
                    )
                } else {
                    return (
                        <div key={name} className="rounded cursor-pointer border-2 border-gray-200 text-gray-200 p-5">
                            {name}
                        </div>
                    )
                }
            })
        )
    }

    return (
        <div className="flex flex-row flex-wrap gap-4">
            {displayLevels(props)}
        </div>
    )
}
