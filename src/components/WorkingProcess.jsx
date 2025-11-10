import React, {useState} from 'react'
import processSteps from '../utilities/processSteps'
import { FaMinus, FaPlus } from 'react-icons/fa'

const WorkingProcess = () => {

     const [openIndex,setOpenIndex] = useState(0)

     const handleToggle = (index) => {
          setOpenIndex(openIndex === index ? -1 : index)
     }

     return (
     <section className='pt-12  bg-white mb-12'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
               {/* headline  and description*/}
               <div className='flex flex-col md:flex-row gap-4 mb-12 md:w-2/3'>
                    <div className='shrink-0 bg-primary text-black py-2 px-16 rounded-md'>
                         <h2 className='text-2xl font-bold'>Our Working Process</h2>
                    </div>
                    <div className=''>
                         <p className='text-secondary md:w-2/3'>Step by stpe guide to achieve your business goals</p>
                    </div>
               </div>

               {/* accordion section */}
               <div>
                    {
                         processSteps.map((step, i)=>(
                              <div key={i} className={`border rounded-md mb-4 overflow-hidden ${openIndex === i ? "border-primary" : "border-gray-300"}`}>
                                   <button 
                                   onClick={()=>handleToggle(i)}
                                   className={`w-full text-left p-4 flex justify-between items-center ${openIndex === i ? 'bg-primary' : 'bg-tartiary'}`}>
                                        <div className='flex items-center'>
                                             <span className='text-secondary font-extrabold mr-4 text-2xl'>{step.number}</span>
                                             <h3 className='text-lg font-semibold'>{step.question}</h3>
                                        </div>

                                        <div className='bg-white text-black border p-1.5 rounded-full'>
                                             {
                                                  openIndex === i ? (<FaMinus/>) : (<FaPlus/>)
                                             }
                                        </div>
                                   </button>

                                   {
                                        openIndex === i && (
                                             <div className='p-4 bg-primary text-secondary'>
                                                  <hr className='mt-0 mb-5 border-black' />
                                                  <p>{step.answer}</p>
                                             </div>
                                        )
                                   }
                              </div>
                         ))
                    }
               </div>     
          </div>
     </section>
     )
}

export default WorkingProcess