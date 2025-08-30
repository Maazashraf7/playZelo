import React from 'react' 
import { PlusCircleIcon, ClockIcon } from '@heroicons/react/24/outline'; 
 
const Balance = () => { 
  return ( 
    <div className="bg-[#0e1d33] rounded-2xl p-6 flex justify-between items-
center w-full max-w-6xl mx-auto text-white gap-10 mt-8"> 
       
      {/* Left Section: Balance Text */} 
      <div className=''> 
        <p className="text-sm text-white/60">Balance</p> 
        <h2 className="text-3xl font-bold mt-1">₹ 791.00</h2> 
      </div> 
 
      {/* Right Section: Buttons */} 
      <div className="flex gap-4"> 
        <button className="flex items-center gap-2 border border-white/10 px-4 
py-2 rounded-md text-sm hover:bg-white/10 transition"> 
          <PlusCircleIcon className="w-5 h-5" /> 
          Add ₹100 (demo) 
        </button> 
        <button className="flex items-center gap-2 border border-white/10 px-4 
py-2 rounded-md text-sm hover:bg-white/10 transition"> 
          <ClockIcon className="w-5 h-5" /> 
          History 
        </button> 
      </div> 
    </div> 
  ) 
} 
 
export default Balance; 