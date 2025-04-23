import React from 'react'
import Logo from '../assets/Logo.png'

 const Navbar = () => {
  return (
    <>
    <div className='flex justify-between py-5'>
        <span><img src={Logo} alt="byr" className='ml-5 content-center' /></span>
        <ul className='flex me-10 '>
        <li className='mr-12 content-center  text-goldenYellow font-bold cursor-pointer'>Home</li>
        <li className='mr-12 content-center font-bold hover:text-goldenYellow cursor-pointer'>Product</li>
        <li className='mr-12 content-center font-bold hover:text-goldenYellow cursor-pointer'>Contact Us</li>
        <li className='mr-12 content-center font-bold hover:text-goldenYellow cursor-pointer'>FAQ</li>
        <li className='mr-12 content-center font-bold hover:text-goldenYellow cursor-pointer'>Page</li>
        <button class="mr-12 content-center font-bold bg-goldenYellowlight rounded-full  my-3 px-8 hover:bg-goldenYellow cursor-pointer" >Partnership</button>
    </ul>
    </div>
    
    

    </>
  )
}
 export default Navbar