import React from 'react';

export default function Tags(props) {

    const displayTags = (props) => {
        const {filteredTags, tagColors, selectedTag, changeTagSelection} = props;

        if (filteredTags.length > 0) {
            return (
                filteredTags.map(tag => {
                    if (tag === selectedTag) {
                        return (
                            <div
                                key={tag}
                                onClick={() => {changeTagSelection(tag)}}
                                className={`rounded cursor-pointer bg-${tagColors[tag]}-600 text-white p-5 mr-6`}
                            >
                                {tag}
                            </div>
                        )
                    } else {
                        return (
                            <div
                                key={tag}
                                onClick={() => {changeTagSelection(tag)}}
                                className={`rounded cursor-pointer border-2 border-${tagColors[tag]}-200 text-${tagColors[tag]}-200 p-5 mr-6`}
                            >
                                {tag}
                            </div>
                        )
                    }
                })
            )
        } else {
            return <div>No tags yet.</div>
        }
    }

    return (
        <div className="flex flex-row">
            {displayTags(props)}
        </div>
    )
}
