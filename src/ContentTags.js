import React from 'react';

export default function ContentTags(props) {

    const displayContentTags = (props) => {
        const {tags, tagColors} = props;

        return (
            tags.map(tag => {
                return (
                    <span key={tag} className={`rounded border-2 border-${tagColors[tag]}-200 text-${tagColors[tag]}-200 mr-4 mt-4 px-2 py-1`}>
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
