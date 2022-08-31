import React from 'react';

export default function Bookmarks(props) {

    const displayBookmarks = (props) => {
        const {useBookmarks, changeBookmarkSelection} = props;

        if (useBookmarks) {
            return (
                <div
                    onClick={() => changeBookmarkSelection()}
                    className="rounded cursor-pointer border-2 bg-gray-600 text-white p-5"
                >
                    Show Bookmarks
                </div>
            )
        } else {
            return (
                <div
                    onClick={() => changeBookmarkSelection()}
                    className="rounded cursor-pointer border-2 border-gray-200 text-gray-200 p-5"
                >
                    Show Bookmarks
                </div>
            )
        }
    }

    return (
        <div className="flex flex-row flex-wrap gap-4">
            {displayBookmarks(props)}
        </div>
    )
}
