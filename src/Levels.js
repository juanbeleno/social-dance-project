import React from 'react';

export default function Levels(props) {

    const displayLevels = (props) => {
        const {levels, selected_levels} = props;

        return (
            Object.entries(levels).map(([level, name]) => {
                return (
                    <div key={name} className="rounded border-2 border-gray-200 text-gray-200 p-5">
                        {name}
                    </div>
                )
            })
        )
    }

    return (
        <div className="flex flex-row flex-wrap gap-4">
            {displayLevels(props)}
        </div>
    )
}
