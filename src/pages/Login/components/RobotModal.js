import { useState } from "react";

export const RobotModal = ({img,text,setRobotModal}) => {

    const [isCorrect,setIsCorrect] = useState(null)
    const correctStyle = "border-2 border-green-400"
    const incorrectStyle = "border-2 border-red-400"
    const handleVerification = (e) => {
        e.preventDefault();
        const userInput = e.target.text.value

        if(userInput === text){

        }
    }

  return (
    <div className="robotModal absolute top-[25%] left-[38%] z-20  h-auto w-[31.25rem] max-tablet:w-[100%] max-tablet:left-0 tablet:max-laptop:left-[25%] laptop:max-desktop:left-[30%]  flex flex-col items-center p-4" >
        <img src={img} className="h-[100px] w-[350px] border-1 border-black" alt="" />
        <form onSubmit={(e) => handleVerification(e)}  className="mt-6">
            <input className={`border-2 border-gray-200 rounded-md min-w-[21.875rem] ${isCorrect === null ? "" :isCorrect === true ? correctStyle : incorrectStyle}`} type="text" name="text" placeholder="type the text..." />

            <span className="mt-4 w-[100%] flex justify-center">
                <button type="submit" className="text-white font-semibold text-md rounded-md mt-4 mx-2 py-2 px-4 bg-blue-600">Verify</button>
            </span>
        </form>
    
    </div>
  )
}
