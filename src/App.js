import React, { useEffect, useState } from 'react';
import axios from "axios";
import sampleSize from "lodash.samplesize";
import Levels from "./Levels";
import TagSearch from "./TagSearch";
import Content from "./Content";
import Bookmarks from "./Bookmarks"

function App() {
  // Hook to update a state without creating a class
  const [allValues, setAllValues] = useState({
    rawContent: [],
    tagColors: {},
    filteredContent: [],
    selectedTag: "",
    levels: {
      1: "Initiation",
      2: "Basic",
      3: "Intermediate",
      4: "Intermediate - Advanced",
      5: "Advanced"
    },
    selectedLevels: [],
    useBookmarks: false,
    bookmarks: [
      '8ece891', 'd133f59', '3646ea2', 'c2c1d2a', '7b8f2d7',
      '8d1cae4', '363e288', 'c5a858f', 'cd4a231', '39374ab',
      'd161c0f', '7e35c3d', 'ceb3a33', 'f5c001b', '4bc7968',
      '3a2cbc7', 'a0dd46a', '40962f6', '8b366f2', 'a489ab8',
      'c15dfca', 'ae06380', '5fcf0c5', '4a693ae', '70ec7ca',
      'bf91e1d', '39233da', '6db2906', '23ce236', '218f7bb',
      '6e72f10', 'b6cc22fb', '0530180', '0a3953a', 'd7e8c97',
      '83bbd23', '6b1372f', 'eaa17be', '2320e00',
      '1618d52', '1c9b87f', '84b2a81',
      '5fb6c7d', '563398d', 'f2fa10c', '3aee1d7', '7048e3e',
      '163e819', '439b0b0', 'a6046b1', 'f779180', '42d0e2c',
      '1385378', 'baabf3f', 'aa7ef97', 'd9a21ba', '26ee386',
      '6463c4f', 'e62a43e', '12dbc32', '276cd62', 'f97f357',
      'a246af6', '6707d56', '8ae7164'
    ]
  });

  // Save in localStorage
  localStorage.setItem("bookmarks", JSON.stringify(allValues.bookmarks))

  // Define the number of elements to load
  const numContentElements = 15;

  // Handle bookmark selection
  const changeBookmarkSelection = () => {
    // If the level is already selected, remove it from the selection
    // Otherwise, add it to the selection
    var useBookmarks = allValues.useBookmarks;

    // Negate the useBookmarks variable in the state of the component
    setAllValues( prevValues => {
      return { ...prevValues, "useBookmarks": !useBookmarks};
    })

    // Filter the content
    filterContent(allValues.selectedTag, allValues.selectedLevels, !useBookmarks)
  }

  const addBookmark = elementId => {
    var bookmarks = allValues.bookmarks;
    const bookmarkIndex = bookmarks.indexOf(elementId);
    if (bookmarkIndex >= 0) {
      bookmarks.splice(bookmarkIndex, 1);
    } else {
      bookmarks.push(elementId);
    }

    // Save in localStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))

    // Change the bookmarks in the state of the component
    setAllValues( prevValues => {
      return { ...prevValues, "bookmarks": bookmarks};
    })
  }

  // Handle level selection
  const changeLevelSelection = level => {
    // If the level is already selected, remove it from the selection
    // Otherwise, add it to the selection
    var selectedLevels = allValues.selectedLevels;
    const levelIndex = selectedLevels.indexOf(parseInt(level));
    if (levelIndex >= 0) {
      selectedLevels.splice(levelIndex, 1);
    } else {
      selectedLevels.push(level);
    }

    // Change the selected levels in the state of the component
    setAllValues( prevValues => {
      return { ...prevValues, "selectedLevels": selectedLevels};
    })

    // Filter the content
    filterContent(allValues.selectedTag, selectedLevels, allValues.useBookmarks)
  }

  // Handle the selection of a specific tag to filter the content
  const changeTagSelection = tag => {
    // If the tag is exactly the same as the previous one, then remove it from selection
    // Otherwise, select the new tag
    var selectedTag = allValues.selectedTag;
    if (selectedTag === tag) {
      selectedTag = "";
    } else {
      selectedTag = tag;
    }

    // Change the selected tag in the state of the component
    setAllValues( prevValues => {
      return { ...prevValues, "selectedTag": selectedTag};
    })

    // Filter the content
    filterContent(selectedTag, allValues.selectedLevels, allValues.useBookmarks)
  }

  const filterContent = (tag, levels, useBookmarks) => {
    const rawContent = allValues.rawContent;
    const bookmarks = allValues.bookmarks;
    var filteredContent = []
    rawContent.forEach(item => {
      if (tag === "" || item["tags"].indexOf(tag) >= 0) {
        if (levels.indexOf(item["level"]) >= 0) {
          if (useBookmarks) {
            if (bookmarks.indexOf(item["id"]) >= 0) {
              filteredContent.push(item);
            }
          } else {
            filteredContent.push(item);
          }
        }
      }
    })
    filteredContent = sampleSize(filteredContent, numContentElements);

    // Change the selected tag in the state of the component
    setAllValues( prevValues => {
      return { ...prevValues, "filteredContent": filteredContent};
    })
  }

  // Update the feed, given the filters
  useEffect(() => {
    // Define the base url
    const baseUrl = `${process.env.PUBLIC_URL}/`;
    //const baseUrl = ``;

    axios.get(`${baseUrl}partnerwork.json`)
    .then((response) => {
      const rawContent = response.data;

      // Define possible color classes for tags
      const colors = [
        "red",
        "amber",
        "lime",
        "orange",
        "yellow",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose"
      ];

      // Assign a random color to each tag in the content
      var tagColors = {};
      rawContent.forEach(item => {
        item.tags.forEach(tag => {
          if (!(tag in tagColors)) {
            tagColors[tag] = colors[Math.floor(Math.random() * colors.length)];
          }
        });
      });

      // Select 10 random gifs
      const filteredContent = sampleSize(rawContent, numContentElements)

      // Load bookmarks
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

      // Update the state with the new values
      setAllValues( prevValues => {
        return {
          ...prevValues,
          "rawContent": rawContent,
          "tagColors": tagColors,
          "filteredContent": filteredContent,
          "bookmarks": bookmarks
        }
      });
    })
    .catch(error => console.error(`Error: ${error}`));
  }, []);

  return (
    <div className="container mx-auto py-6 font-bold">
      <div className="text-purple-200 mb-6 mt-10">
        EXPLORE TAGS
      </div>
      <TagSearch
        tagColors={allValues.tagColors}
        selectedTag={allValues.selectedTag}
        changeTagSelection={changeTagSelection}/>

      <div className="text-purple-200 mb-6 mt-10">
        SELECT THE LEVEL OF DIFFICULTY YOU WANNA TRAIN
      </div>
      <Levels
        levels={allValues.levels}
        selectedLevels={allValues.selectedLevels}
        changeLevelSelection={changeLevelSelection}
      />

      <div className="text-purple-200 mb-6 mt-10">
        BOOKMARKS
      </div>
      <Bookmarks
        useBookmarks={allValues.useBookmarks}
        selectedLevels={allValues.selectedLevels}
        changeBookmarkSelection={changeBookmarkSelection}
      />

      <div className="mb-6 mt-10 text-purple-200">
        EXPLORE GIFS
      </div>
      <Content
        filteredContent={allValues.filteredContent}
        levels={allValues.levels}
        tagColors={allValues.tagColors}
        bookmarks={allValues.bookmarks}
        addBookmark={addBookmark}/>

      <span className="
        text-red-200
        text-amber-200
        text-lime-200
        text-lime-200
        text-orange-200
        text-yellow-200
        text-green-200
        text-emerald-200
        text-teal-200
        text-cyan-200
        text-sky-200
        text-blue-200
        text-indigo-200
        text-violet-200
        text-purple-200
        text-fuchsia-200
        text-pink-200
        text-rose-200
        border-red-200
        border-amber-200
        border-lime-200
        border-lime-200
        border-orange-200
        border-yellow-200
        border-green-200
        border-emerald-200
        border-teal-200
        border-cyan-200
        border-sky-200
        border-blue-200
        border-indigo-200
        border-violet-200
        border-purple-200
        border-fuchsia-200
        border-pink-200
        border-rose-200
        bg-red-600
        bg-amber-600
        bg-lime-600
        bg-lime-600
        bg-orange-600
        bg-yellow-600
        bg-green-600
        bg-emerald-600
        bg-teal-600
        bg-cyan-600
        bg-sky-600
        bg-blue-600
        bg-indigo-600
        bg-violet-600
        bg-purple-600
        bg-fuchsia-600
        bg-pink-600
        bg-rose-600
      "></span>
    </div>
  );
}

export default App;
