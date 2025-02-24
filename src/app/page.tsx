import Crad from '@/components/Crad'
import Hedar from '@/components/heder'
import Img_crad from '@/components/img_crad'
import Tital_bar from '@/components/tital_bar'
import React from 'react'

const page = () => {
  return (
    <div>



{/* this is header component */}

     <Hedar/>






{/* this is tital bar component */}

     <Tital_bar teg='Category' title='This is a tital bar'>
      <button className='bg-red-500 text-white px-4 py-2 rounded-md'>View All</button>
     </Tital_bar>


     <Tital_bar teg='Category' title='This is a tital bar'>
      <button className='bg-red-500 text-white px-4 py-2 rounded-md'>View All</button>
     </Tital_bar>






















{/* this is card component */}

   <Crad>

        <Img_crad/>
        <Img_crad/>
        <Img_crad/>
        <Img_crad/>
        <Img_crad rating={false}/>

           </Crad>





    </div>
  )
}

export default page
