import React from 'react'
import { useState } from 'react'
import '../App.css'

function BackgroundChanger() {
    const [color, setColor] = useState("olive")
  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
    <h1 className="text-2xl font-extrabold">Background color Changer</h1><br/>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-slate-300 items-center max-h-screen rounded-2xl">
      <div className="flex flex-wrap justify-center gap-4">
        <button onClick={() => setColor("red")}
         className="bg-red-600 mx-2 my-2 px-3 py-1 rounded-xl font-bold"
          style={{backgroundColor:{color}}}> Red
        </button>

        <button onClick={()=>setColor("green")}
        className = "bg-green-500 mx-2 my-2 px-3 py-1 rounded-xl font-bold"
        style={{backgroundColor:{color}}}>Green</button>

        <button onClick={()=>setColor("blue")}
         className = "bg-blue-600 mx-2 my-2 px-3 py-1 rounded-xl font-bold"
        style={{backgroundColor:{color}}}>Blue</button>

        <button onClick={()=>setColor("yellow")}
        className = "bg-yellow-400 mx-2 my-2 px-3 py-1 rounded-xl font-bold"
        style={{backgroundColor:{color}}}>Yellow</button>

        <button onClick={()=>setColor("purple")} 
        className= "bg-purple-500 mx-2 my-2 px-3 py-1 rounded-xl font-bold"
        style={{backgroundColor:{color}}}>Purple</button>
      </div>
    </div>
    </div>
      
      
    </>
  )
}

export default BackgroundChanger
