import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} className='mb-5 w-20' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus molestiae labore, enim repellat eius at nobis neque ipsam. Officia numquam nam inventore esse minus dignissimos perspiciatis asperiores. Praesentium quis laboriosam repudiandae voluptate repellat, nesciunt fugiat?</p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>takeany006@hulululu.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025@ eCart.com - All Rights are Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
