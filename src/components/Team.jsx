import React from 'react'
import teamData from '../utilities/teamData'

const Team = () => {
  return (
    <section className='pt-24 pb-12 bg-white'>
          <div className='max-w-7xl mx-auto px-4  sm:px-6 lg:px-8'>
               {/* headline  and description*/}
               <div className='flex flex-col md:flex-row gap-4 mb-12 md:w-2/3'>
                    <div className='shrink-0 bg-primary text-black py-2 px-16 rounded-md'>
                         <h2 className='text-2xl font-bold'>Our Team</h2>
                    </div>
                    <div className=''>
                         <p className='text-secondary md:w-2/3'>Step by stpe guide to achieve your business goals</p>
                    </div>
               </div>

               {/* team cards */}
               <div>
                    {
                         teamData.map((member, index)=> (
                              <div key={index}>
                                   <div className='relative mb-4'>
                                        <img src={member.image} alt="" />
                                   </div>
                              </div>
                         ))
                    }
               </div>

          </div>
     </section>
  )
}

export default Team
