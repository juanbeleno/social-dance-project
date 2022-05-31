import React from 'react';

export default function Tags(props) {

    const displayTags = (props) => {
        const {filteredTags, tagColors} = props;

        if (filteredTags.length > 0) {
            return (
                filteredTags.map(tag => {
                    return (
                        <div key={tag} className={`rounded cursor-pointer border-2 border-${tagColors[tag]} text-${tagColors[tag]} p-5 mr-6`}>
                            {tag}
                        </div>
                    )
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
