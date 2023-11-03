import React from 'react'
export const DashEmpty = () => {
  return (
    <div className='h-[175px] mt-4 bg-slate-300 w-inherit flex flex-col justify-center items-center'>
        <p className='font-Inconsolata text-xl font-semibold text-black'>0 Recent orders</p>
        <p>You haven't placed any orders yet</p>
    </div>
  )
}
