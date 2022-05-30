import React from 'react';
import ContentTags from "./ContentTags";

export default function Content(props) {

    const displayContent = (props) => {
        const {filtered_content, tag_colors, levels} = props;

        if (filtered_content.length > 0) {
            return (
                filtered_content.map(item => {
                    return (
                        <div key={item['id']} className="basis-96 h-[36rem] bg-black rounded flex relative">
                            <img src={`img/${item['filepath']}`} alt="" className="my-auto"/>
                            <div className="absolute bottom-0 flex flex-wrap bg-black/80 p-4 w-96 text-sm">
                                <div className="text-white w-96">Level: {levels[item['level']]}</div>
                                <ContentTags tags={item['tags']} tag_colors={tag_colors}/>
                            </div>
                        </div>
                    )
                })
            )
        } else {
            return <div>No content yet.</div>
        }
    }

    return (
        <div className="flex flex-row flex-wrap gap-8">
            {displayContent(props)}
        </div>
    )
}
