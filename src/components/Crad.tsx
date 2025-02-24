import React from 'react'




{/* used for card component */}
const Crad = (
    {children}:{children:React.ReactNode}
) => {
  return (
    <div className='wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  my-[59px] gap-[30px]'>

           {children}
    </div>
  )
}

export default Crad

