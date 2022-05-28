import React from 'react';
import img1 from './img/salsa/on1/0a57cb5.gif'
import img2 from './img/salsa/on1/1b64538.gif'
import img3 from './img/salsa/on1/4d134bc.gif'

function App() {
  return (
    <div className="container mx-auto py-6 font-bold">
      <div className="text-purple-200 mb-6 mt-10">
        EXPLORE TAGS
      </div>
      <div className="flex flex-row">
        <div className="rounded border-2 border-red-200 text-red-200 p-5 mr-6">
          on1
        </div>
        <div className="rounded border-2 border-amber-200 text-amber-200 p-5 mr-6">
          on2
        </div>
        <div className="rounded border-2 border-lime-200 text-lime-200 p-5 mr-6">
          colombiano
        </div>
      </div>

      <div className="text-purple-200 mb-6 mt-10">
        CHOOSE THE LEVEL
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        <div className="rounded border-2 border-gray-200 text-gray-200 p-5">
          Initiation
        </div>
        <div className="rounded border-2 border-gray-200 text-gray-200 p-5">
          Basic
        </div>
        <div className="rounded border-2 border-gray-200 text-gray-200 p-5">
          Intermediate
        </div>
        <div className="rounded border-2 border-gray-200 text-gray-200 p-5">
          Intermediate - Advanced
        </div>
        <div className="rounded border-2 border-gray-200 text-gray-200 p-5">
          Advanced
        </div>
      </div>

      <div className="mb-6 mt-10 text-purple-200">
        EXPLORE GIFS
      </div>
      <div className="flex flex-row flex-wrap gap-8">
        <div className="basis-96 bg-black rounded flex relative">
            <img src={img1} alt="" className="my-auto"/>
            <div className="absolute bottom-0 flex flex-wrap bg-black/80 p-4 w-96 text-sm">
              <div className="text-white w-96">Level: Intermediate-Advanced</div>
              <span className="rounded border-2 border-blue-200 text-blue-200 mr-4 mt-4 px-2 py-1">cha cha cha</span>
              <span className="rounded border-2 border-violet-200 text-violet-200 mr-4 mt-4 px-2 py-1">on2</span>
              <span className="rounded border-2 border-yellow-200 text-yellow-200 mr-4 mt-4 px-2 py-1">follow turn</span>
            </div>
        </div>
        <div className="basis-96 bg-black rounded flex relative">
            <img src={img2} alt="" className="my-auto"/>
            <div className="absolute bottom-0 flex flex-wrap bg-black/80 p-4 w-96 text-sm">
              <div className="text-white w-96">Level: Intermediate-Advanced</div>
              <span className="rounded border-2 border-blue-200 text-blue-200 mr-4 mt-4 px-2 py-1">cha cha cha</span>
              <span className="rounded border-2 border-violet-200 text-violet-200 mr-4 mt-4 px-2 py-1">on2</span>
              <span className="rounded border-2 border-yellow-200 text-yellow-200 mr-4 mt-4 px-2 py-1">follow turn</span>
            </div>
        </div>
        <div className="basis-96 bg-black rounded flex relative">
            <img src={img3} alt="" className="my-auto"/>
            <div className="absolute bottom-0 flex flex-wrap bg-black/80 p-4 w-96 text-sm">
              <div className="text-white w-96">Level: Intermediate-Advanced</div>
              <span className="rounded border-2 border-blue-200 text-blue-200 mr-4 mt-4 px-2 py-1">cha cha cha</span>
              <span className="rounded border-2 border-violet-200 text-violet-200 mr-4 mt-4 px-2 py-1">on2</span>
              <span className="rounded border-2 border-yellow-200 text-yellow-200 mr-4 mt-4 px-2 py-1">follow turn</span>
            </div>
        </div>
        <div className="basis-96 bg-black rounded flex relative">
            <img src={img2} alt="" className="my-auto"/>
            <div className="absolute bottom-0 flex flex-wrap bg-black/80 p-4 w-96 text-sm">
              <div className="text-white w-96">Level: Intermediate-Advanced</div>
              <span className="rounded border-2 border-blue-200 text-blue-200 mr-4 mt-4 px-2 py-1">cha cha cha</span>
              <span className="rounded border-2 border-violet-200 text-violet-200 mr-4 mt-4 px-2 py-1">on2</span>
              <span className="rounded border-2 border-yellow-200 text-yellow-200 mr-4 mt-4 px-2 py-1">follow turn</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
