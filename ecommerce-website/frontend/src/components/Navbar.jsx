import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { ShopContext } from '../context/ShopContext'

function Navbar() {

    const [visible, setVisible] = useState(false)

    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }


    return (
        <div className='flex items-center justify-between py-3 font-medium'>

            <Link to='/'><img src={assets.logo} className='w-20' alt="" /></Link>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p className='hover:bg-gray-300 transition-all ease-in-out p-2 rounded-2xl'>Home</p>
                    <hr className='w-2/4 hidden border-none h-[1.5px] bg-gray-700' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p className='hover:bg-gray-300 transition-all ease-in-out p-2 rounded-2xl'>COLLECTION</p>
                    <hr className='w-2/4 hidden border-none h-[1.5px] bg-gray-700' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p className='hover:bg-gray-300 transition-all ease-in-out p-2 rounded-2xl'>ABOUT</p>
                    <hr className='w-2/4 hidden border-none h-[1.5px] bg-gray-700' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p className='hover:bg-gray-300 transition-all ease-in-out p-2 rounded-2xl'>CONTACT US</p>
                    <hr className='w-2/4 hidden border-none h-[1.5px] bg-gray-700' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
                <div className="group relative">
                    <img onClick={()=> token ? null : navigate('/login')} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                {/* DropDown */}
                    {token &&
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                        <p className="cursor-pointer hover:text-black">My Profile</p>
                        <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
                        <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
                    </div>
                </div>}
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisible(true)} className='w-5 sm:hidden cursor-pointer' src={assets.menu_icon} alt="" />
            </div>
            <div className={`absolute top-0 bg-white bottom-0 right-0 overflow-hidden  transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
