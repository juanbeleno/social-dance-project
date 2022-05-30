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
        "red-500",
        "amber-500",
        "lime-500",
        "orange-500",
        "yellow-500",
        "green-500",
        "emerald-500",
        "teal-500",
        "cyan-500",
        "sky-500",
        "blue-500",
        "indigo-500",
        "violet-500",
        "purple-500",
        "fuchsia-500",
        "pink-500",
        "rose-500"
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
        text-red-500
        text-amber-500
        text-lime-500
        text-lime-500
        text-orange-500
        text-yellow-500
        text-green-500
        text-emerald-500
        text-teal-500
        text-cyan-500
        text-sky-500
        text-blue-500
        text-indigo-500
        text-violet-500
        text-purple-500
        text-fuchsia-500
        text-pink-500
        text-rose-500
        border-red-500
        border-amber-500
        border-lime-500
        border-lime-500
        border-orange-500
        border-yellow-500
        border-green-500
        border-emerald-500
        border-teal-500
        border-cyan-500
        border-sky-500
        border-blue-500
        border-indigo-500
        border-violet-500
        border-purple-500
        border-fuchsia-500
        border-pink-500
        border-rose-500
      "></span>
    </div>
  );
}

export default App;
