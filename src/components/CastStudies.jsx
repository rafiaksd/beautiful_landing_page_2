import React from 'react'
import caseStudies from '../utilities/caseStudies'
import { MdOutlineArrowOutward } from 'react-icons/md'

const CastStudies = () => {
  return (
    <div>
          <section className='pt-24 pb-16 bg-white' id='use-cases'>
               <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    {/* headline  and description*/}
                    <div className='flex flex-col md:flex-row gap-4 mb-12 md:w-2/3'>
                         <div className='shrink-0 bg-primary text-black py-2 px-16 rounded-md'>
                              <h2 className='text-2xl font-bold'>Case Studies</h2>
                         </div>
                         <div className=''>
                              <p className='text-secondary'>Explore real life examples of our proven digital marketing through our case studies.</p>
                         </div>
                    </div>

                    {/* Case Study Cards */}
                    <div className='bg-black text-white p-8 rounded-md'>
                         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                              {
                                   caseStudies.map((study, index) => (
                                        <div key={index} className='p-4 border border-gray-700 rounded-md'>
                                             <h3 className='font-semibold text-xl mb-2'>{study.title}</h3>
                                             <p className='mb-4'>{study.description}</p>
                                             <a href='#' className='text-primary flex items-center'>
                                                  Learn more <MdOutlineArrowOutward className='ml-2' />
                                             </a>
                                        </div>
                                   ))
                              }
                         </div>
                    </div>
               </div>
          </section>
    </div>
  )
}

export default CastStudies