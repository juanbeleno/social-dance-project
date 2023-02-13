import React from 'react';
import { useState } from 'react'
import { Combobox } from '@headlessui/react'

export default function TagSearch(props) {
  const {tagColors, selectedTag, changeTagSelection} = props;
  const tagList = Object.keys(tagColors)
  const [query, setQuery] = useState('')

  const filteredTags =
    query === ''
      ? tagList
      : tagList.filter((tag) => {
          return tag.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox value={selectedTag} onChange={changeTagSelection}>
      <Combobox.Input
        onChange={(event) => setQuery(event.target.value)}
        className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
      />
      <Combobox.Options
        className="relative mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
        {filteredTags.map((tag) => (
          <Combobox.Option
            key={tag}
            value={tag}
            className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                active ? 'bg-teal-600 text-white' : 'text-gray-900'
                }`
            }>
            {tag}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
}
