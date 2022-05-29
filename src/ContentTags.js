import React from 'react';

export default function ContentTags(props) {

    const displayContentTags = (props) => {
        const {tags, tag_colors} = props;

        return (
            tags.map(tag => {
                return (
                    <span key={tag} className={`rounded border-2 border-${tag_colors[tag]} text-${tag_colors[tag]} mr-4 mt-4 px-2 py-1`}>
                        {tag}
                    </span>
                )
            })
        )
    }

    return (
        <>
            {displayContentTags(props)}
        </>
    )
}
