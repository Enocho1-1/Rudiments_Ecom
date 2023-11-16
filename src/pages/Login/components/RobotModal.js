

export const RobotModal = ({img,text}) => {

  return (
    <div className="robotModal absolute top-[25%] left-[38%] z-20  h-auto w-[31.25rem] max-tablet:w-[100%] max-tablet:left-0 tablet:max-laptop:left-[25%] laptop:max-desktop:left-[30%]  flex flex-col items-center p-4" >
        <img src={img} className="h-[100px] w-[350px] border-1 border-black" alt="" />
        <form className="mt-6">
            <input className="rounded-md min-w-[21.875rem]" type="text" name="text" placeholder="type the text..." />
        </form>
        <span className="mt-4 w-[100%] flex justify-center">
            <button type="submit" className="text-white font-semibold text-md rounded-md mt-4 mx-2 py-2 px-4 bg-blue-600">Verify</button>
        </span>
    </div>
  )
}
