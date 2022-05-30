import React, { useEffect, useState } from 'react';
import axios from "axios";
import sampleSize from "lodash.samplesize";
import Levels from "./Levels";
import Tags from "./Tags";
import Content from "./Content";

function App() {
  // Hook to update a state without creating a class
  const [allValues, setAllValues] = useState({
    raw_content: [],
    tag_colors: {},
    filtered_tags: [],
    filtered_content: [],
    selected_tag: null,
    levels: {
      1: "Initiation",
      2: "Basic",
      3: "Intermediate",
      4: "Intermediate - Advanced",
      5: "Advanced"
    },
    selected_levels: [1, 2, 3, 4, 5]
  });

  // Handle the change of any value to update the state
  const changeHandler = e => {
    setAllValues( prevValues => {
        return { ...prevValues, [e.target.name]: e.target.value}
    })
  };

  // Define the base url
  const base_url = 'http://localhost:3000/';

  // Update the feed, given the filters
  useEffect(() => {
    axios.get(`${base_url}content.json`)
    .then((response) => {
      const raw_content = response.data;

      // Define possible color classes for tags
      const colors = [
        "red-200",
        "amber-200",
        "lime-200",
        "orange-200",
        "yellow-200",
        "green-200",
        "emerald-200",
        "teal-200",
        "cyan-200",
        "sky-200",
        "blue-200",
        "indigo-200",
        "violet-200",
        "purple-200",
        "fuchsia-200",
        "pink-200",
        "rose-200"
      ];

      // Assign a random color to each tag in the content
      var tag_colors = {};
      raw_content.map(item => {
        item.tags.map(tag => {
          if (!(tag in tag_colors)) {
            tag_colors[tag] = colors[Math.floor(Math.random() * colors.length)];
          }
        });
      });

      // Filter tags to show only from on1, on2, and colombiano
      const filtered_tags = ["on1", "on2", "colombiano"];

      // Select 10 random gifs
      const num_elements = 10;
      const filtered_content = sampleSize(raw_content, num_elements)

      // Update the state with the new values
      setAllValues( prevValues => {
        return {
          ...prevValues,
          "raw_content": raw_content,
          "tag_colors": tag_colors,
          "filtered_tags": filtered_tags,
          "filtered_content": filtered_content
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
      <Tags filtered_tags={allValues.filtered_tags} tag_colors={allValues.tag_colors}/>

      <div className="text-purple-200 mb-6 mt-10">
        CHOOSE THE LEVEL
      </div>
      <Levels levels={allValues.levels} selected_levels={allValues.selected_levels} />

      <div className="mb-6 mt-10 text-purple-200">
        EXPLORE GIFS
      </div>
      <Content filtered_content={allValues.filtered_content} levels={allValues.levels} tag_colors={allValues.tag_colors}/>

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
      "></span>
    </div>
  );
}

export default App;
