import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sequi eligendi rem ex ad, adipisci nam asperiores illum inventore sapiente libero voluptates, molestiae accusamus nihil!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex distinctio blanditiis, consequatur est cumque?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos reprehenderit numquam architecto libero veritatis vel. </p>
        </div>
      </div>

      <div className="py-4 text-2xl">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="sm:grid-cols-3 grid text-sm mb-20">
        <div className="border px-5  lg:px-16 py-8 lg:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, laudantium!</p>
        </div>
        <div className="border px-5  lg:px-16 py-8 lg:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam consequatur repudiandae ut quo nemo dolorem officia, quos tempore.</p>
        </div>
        <div className="border px-5  lg:px-16 py-8 lg:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, doloribus.</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About
