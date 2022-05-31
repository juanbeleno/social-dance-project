import React from 'react';

export default function Levels(props) {

    const displayLevels = (props) => {
        const {levels, selectedLevels, changeLevelSelection} = props;
        return (
            Object.entries(levels).map(([level, name]) => {
                if (selectedLevels.indexOf(parseInt(level)) >= 0) {
                    return (
                        <div key={name} onClick={() => changeLevelSelection(parseInt(level))} className="rounded cursor-pointer border-2 bg-gray-600 text-white p-5">
                            {name}
                        </div>
                    )
                } else {
                    return (
                        <div key={name} onClick={() => changeLevelSelection(parseInt(level))} className="rounded cursor-pointer border-2 border-gray-200 text-gray-200 p-5">
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
