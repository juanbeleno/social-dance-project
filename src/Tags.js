import React from 'react';

export default function Tags(props) {

    const displayTags = (props) => {
        const {filtered_tags, tag_colors} = props;

        if (filtered_tags.length > 0) {
            return (
                filtered_tags.map(tag => {
                    return (
                        <div key={tag} className={`rounded border-2 border-${tag_colors[tag]} text-${tag_colors[tag]} p-5 mr-6`}>
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
