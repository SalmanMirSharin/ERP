import React from 'react';
// import { useStepperContext } from './SetperContext';


export default function SeteperControl  ({ handleClick, currentStep, steps }) {
  // const { userData } = useStepperContext();
  // // const handleSubmit =()=>{
  // //   console.log(userData);
  // // }
  
    return (
        <div className="container mt-4 mb-8 flex justify-around">
          <button
            onClick={() => handleClick()}
            className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
              currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
            }`}
          >
            Back
          </button>
          {currentStep === steps.length -1? 
                    <button
                    onClick={() => handleClick("next")}
                    className="cursor-pointer rounded-lg bg-indigo-900 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
                  >
                    {/* {currentStep === steps.length -1? "Confirm" : "Next"} */}
                    Confirm

                    
                  </button>
          : 
          <button
          onClick={() => handleClick("next")}
          className="cursor-pointer rounded-lg bg-indigo-900 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
        >
          {/* {currentStep === steps.length -1? "Confirm" : "Next"} */}
          Next
          
        </button>
          }

          
          {/* <button
            onClick={() => handleClick("next")}
            className="cursor-pointer rounded-lg bg-indigo-900 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
          >
            {currentStep === steps.length -1? "Confirm" : "Next"}
            
          </button> */}
          
        </div>
      );
};

