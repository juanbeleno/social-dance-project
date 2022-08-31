import React from 'react';
import ContentTags from "./ContentTags";
import BookmarkButton from "./BookmarkButton"

export default function Content(props) {

    const displayContent = (props) => {
        const {filteredContent, tagColors, levels, bookmarks, addBookmark} = props;

        if (filteredContent.length > 0) {
            return (
                filteredContent.map(item => {
                    return (
                        <div
                            key={item['id']}
                            className="basis-96 h-[36rem] bg-black rounded flex relative"
                        >
                            <img
                                src={`img/${item['filepath']}`}
                                alt=""
                                className={`m-auto ${item['orientation'] === 'portrait' ? 'h-full' : 'w-full'}`}/>
                            <div className="absolute top-0 p-2">
                                <BookmarkButton
                                    bookmarks={bookmarks}
                                    elementId={item["id"]}
                                    addBookmark={addBookmark}
                                />
                            </div>
                            <div className="absolute bottom-0 flex flex-wrap bg-black/80 p-4 w-96 text-sm">
                                <div className="text-white w-96">
                                    Level: {levels[item['level']]}
                                </div>
                                <ContentTags
                                    tags={item['tags']}
                                    tagColors={tagColors}/>
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
