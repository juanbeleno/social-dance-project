import React from 'react';

export default function BookmarkButton(props) {

    const displayBookmarkButton = (props) => {
        const {elementId, bookmarks, addBookmark} = props;

        if (bookmarks.indexOf(elementId) >= 0) {
            return (
                <div
                    onClick={() => addBookmark(elementId)}
                    className="rounded cursor-pointer border-2 border-gray-200 text-gray-200 py-2 px-3 flex text-sm">
                    <svg className="mr-2.5 h-5 w-5 flex-none fill-gray-200"><path d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14l-5-2.5L5 18V4Z"></path></svg>
                    Bookmark
                </div>
            )
        } else {
            return (
                <div
                    onClick={() => addBookmark(elementId)}
                    className="rounded cursor-pointer border-2 border-gray-600 text-gray-600 py-2 px-3 flex text-sm">
                    <svg className="mr-2.5 h-5 w-5 flex-none fill-gray-600"><path d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14l-5-2.5L5 18V4Z"></path></svg>
                    Bookmark
                </div>
            )
        }
    }

    return (
        <>
            {displayBookmarkButton(props)}
        </>
    )
}