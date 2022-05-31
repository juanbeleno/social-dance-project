import React, { useEffect, useState } from 'react';
import axios from "axios";
import sampleSize from "lodash.samplesize";
import Levels from "./Levels";
import Tags from "./Tags";
import Content from "./Content";

function App() {
  // Hook to update a state without creating a class
  const [allValues, setAllValues] = useState({
    rawContent: [],
    tagColors: {},
    filteredTags: [],
    filteredContent: [],
    selectedTag: "",
    levels: {
      1: "Initiation",
      2: "Basic",
      3: "Intermediate",
      4: "Intermediate - Advanced",
      5: "Advanced"
    },
    selectedLevels: [1, 2, 3, 4, 5]
  });

  // Handle level selection
  const changeLevelSelection = level => {
    // If the level is already selected, remove it from the selection
    // Otherwise, add it to the selection
    var selectedLevels = allValues.selectedLevels
    const levelIndex = selectedLevels.indexOf(parseInt(level))
    if (levelIndex >= 0) {
      selectedLevels.splice(levelIndex, 1);
    } else {
      selectedLevels.push(level)
    }

    // Change the selected levels in the state of the component
    setAllValues( prevValues => {
      return { ...prevValues, "selectedLevels": selectedLevels}
    })
  }

  // Handle the selection of a specific tag to filter the content
  const changeTagSelection = tag => {
    // If the tag is exactly the same as the previous one, then remove it from selection
    // Otherwise, select the new tag
    var selectedTag = allValues.selectedTag
    if (selectedTag === tag) {
      selectedTag = ""
    } else {
      selectedTag = tag
    }

    // Change the selected tag in the state of the component
    setAllValues( prevValues => {
      return { ...prevValues, "selectedTag": selectedTag}
    })
  }

  // Define the base url
  const baseUrl = 'http://localhost:3000/';

  // Update the feed, given the filters
  useEffect(() => {
    axios.get(`${baseUrl}content.json`)
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

      // Filter tags to show only from on1, on2, and colombiano
      const filteredTags = ["on1", "on2", "colombiano"];

      // Select 10 random gifs
      const numElements = 10;
      const filteredContent = sampleSize(rawContent, numElements)

      // Update the state with the new values
      setAllValues( prevValues => {
        return {
          ...prevValues,
          "rawContent": rawContent,
          "tagColors": tagColors,
          "filteredTags": filteredTags,
          "filteredContent": filteredContent
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
      <Tags
        filteredTags={allValues.filteredTags}
        tagColors={allValues.tagColors}
        selectedTag={allValues.selectedTag}
        changeTagSelection={changeTagSelection}/>

      <div className="text-purple-200 mb-6 mt-10">
        CHOOSE THE LEVEL
      </div>
      <Levels
        levels={allValues.levels}
        selectedLevels={allValues.selectedLevels}
        changeLevelSelection={changeLevelSelection}
      />

      <div className="mb-6 mt-10 text-purple-200">
        EXPLORE GIFS
      </div>
      <Content filteredContent={allValues.filteredContent} levels={allValues.levels} tagColors={allValues.tagColors}/>

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
