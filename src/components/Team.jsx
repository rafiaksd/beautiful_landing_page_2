import React, {useState} from 'react'
import teamData from '../utilities/teamData'
import { FaLinkedin } from 'react-icons/fa'

const Team = () => {
     const [visibleTeam, setVisibleTeam] = useState(6)

     const handleShowMore = () => {
          setVisibleTeam(prevCount => prevCount + 3)
     }

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
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                         {
                              teamData.slice(0,visibleTeam).map((member, index)=> (
                                   <div key={index} className='bg-white hover:bg-primary rounded-lg hover:border-primary shadow-lg p-6 cursor-pointer transition-all duration-150'>
                                        {/* first row */}
                                        <div className='relative mb-4'>
                                             <div className='flex flex-col sm:flex-row sm:items-end items-start gap-4 justify-start'>
                                                  <img src={member.image} alt="" className='rounded-full w-32 h-32 object-cover' />
                                                  <div>
                                                       <h3 className='text-xl font-semibold'>{member.name}</h3>
                                                       <p className='text-secondary'>{member.position}</p>
                                                  </div>
                                             </div>
                                             <a href="#" className='absolute top-0 right-0 bg-black hover:bg-primary hover:text-black text-white p-2 rounded-full cursor-pointer  transition-all duration-200'>
                                                  <FaLinkedin className='size-5' />
                                             </a>
                                        </div>

                                        {/* second row */}
                                        <div>
                                             <hr className='my-4 border-secondary' />
                                             <p className='text-black'>{member.description}</p>
                                        </div>
                                   </div>


                              ))
                         }
                    </div>

                    {/* show more button */}
                    {
                         visibleTeam < teamData.length && (
                              <div className='flex justify-end mt-8 w-full'>
                                   <button onClick={handleShowMore} className='inline-black px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-primary hover:text-black transition-all duration-150 cursor-pointer'>Sell All Team </button>
                              </div>         
                         )
                    }
               </div>
          </section>
  )
}

export default Team
