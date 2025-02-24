import React from 'react'

const Tital_bar = ( {children,teg,title }:{children?:React.ReactNode,teg:string , title:string}
) => {
  return (
    <div className='wrapper  h-[108px] mt-[60px] flex justify-between'>
      <div className='h-full flex flex-col justify-between'>
       <div className='flex items-center gap-[16px]'>
         <div className='w-[20px] h-[40px] rounded-[4px] bg-red-500'></div>
         <p className='text-[16px] font-semibold' >
          {teg}
         </p>

       </div>
       <div className='h1-semibold'>
        {title}
       </div>
      </div>
       <div className='flex items-end '>
        {children}
       </div>
    </div>
  )
}

export default Tital_bar

