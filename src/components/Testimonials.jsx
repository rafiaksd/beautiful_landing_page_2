/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import { BsChatQuote } from 'react-icons/bs'
import testimonialsData from '../utilities/testimonialsData'
import { IoArrowBack } from 'react-icons/io5'
import { IoMdArrowForward } from 'react-icons/io'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(1)

    // makes caraousel auto move to the next testimonial every 2 seconds
  useEffect(()=>{
    const interval = setInterval(()=>{
      handleNext()
    }, 2000);

    return () => clearInterval(interval)
  },[currentIndex])

  useEffect(()=> {
    const handleResize = () => {
      if(window.innerWidth >= 768){
        setItemsToShow(3)
      } else {
        setItemsToShow(1)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNext = () => {
    setCurrentIndex((prevIndex)=> (prevIndex + itemsToShow) % testimonialsData.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex)=> (prevIndex - itemsToShow + testimonialsData.length) % testimonialsData.length)
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section id='testimonials' className='pt-24 pb-8 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        {/* headline  and description*/}
          <div className='flex flex-col md:flex-row gap-4 mb-12 md:w-2/3'>
                <div className='shrink-0 bg-primary text-black py-2 px-16 rounded-md'>
                    <h2 className='text-2xl font-bold'>Testimonials</h2>
                </div>
                <div className='md:w-2/3'>
                    <p className='text-secondary md:w-2/3'>Our satisfied clients: Read the testimonials and see what our clients had to say!</p>
                </div>
          </div>

          {/* testimonials slider */}
          <div className='relative mb-12'>
            {/* slide */}
            <div className='flex flex-col md:flex-row max-w-7xl mx-auto overflow-hidden gap-3'>
              {
                testimonialsData.slice(currentIndex,currentIndex+itemsToShow).map((testimonial, index) => (
                  <div key={index} className='w-full relative py-5 md:max-w-md px-2'>
                    <div className='absolute top-0 left-0 z-30'>
                      <BsChatQuote className='size-8' />
                    </div>
                    <div className='h-48 bg-white hover:bg-primary rounded-lg border border-gray-300 hover:border-primary shadow-lg p-6 cursor-pointer transition-all duration-300'>
                        <p className='text-base font-medium mb-4'>{testimonial.text}</p>
                        <p className='text-sm font-semibold text-gray-700'>{testimonial.author}</p>
                    </div>
                  </div>
                ))
              }
            </div>

            {/* dot navigation */}
            <div className='absolute mt-5 left-1/2 transform -translate-x-1/2 flex items-center space-x-5 z-10'>
              <button className='text-black'>
                <IoArrowBack/>
              </button>

              {/* dots */}
              <div>
                dots
              </div>

              {/* next button */}
              <button>
                <IoMdArrowForward className='text-black' />
              </button>

            </div>

          </div>

          
      </div>
    </section>
  )
}

export default Testimonials