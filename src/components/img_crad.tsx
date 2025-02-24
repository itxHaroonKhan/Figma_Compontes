import React from 'react'

const Img_crad = ({rating=true,}: {rating?:boolean,}) => {
  return (
    <div className='w-full x1:w-[270px] h-[350px]'>
     <div className='w-full h-[250px] flex justify-center items-center bg-slate-300'>
      placeholder
     </div>
     <div className='w-full h-[100px] flex flex-col justify-between bg-slate-400'>
      <div></div>
     {rating && <div>⭐⭐⭐⭐</div>}
     </div>
    </div>
  )
}

export default Img_crad

