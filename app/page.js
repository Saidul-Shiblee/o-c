import Image from 'next/image'
import React from 'react'
import Hero from '../public/hero1.png'
import Logo from '../public/logo_transparent_white.png'

import BP from '../public/bp.png'
import EQ from '../public/eq.png'
import DR from '../public/dr.png'
import OC from '../public/oc.png'
import PRICE from '../public/price.svg'
import LENS from '../public/lens.svg'
import FRAMES from '../public/frames.svg'
import LC from '../public/LC.svg'
import ED from '../public/ed.png'
import User1 from '../public/user1.png'
import User2 from '../public/user2.png'
import User3 from '../public/user3.png'
import Shop from '../public/shop.jpeg'
import Map from '../public/map.png'

import { MdPlace } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";


import { FaYoutube } from "react-icons/fa";

import { FaSquareThreads } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import Navbar from './_components/Navbar'
import { PiCheckFatDuotone } from "react-icons/pi";
import Link from 'next/link'


export default function LP() {
  return (
    <div className='w-full '>
      <Navbar/>
      <section as='hero' id='home' className='flex flex-col lg:flex-row justify-center lg:justify-between items-end w-full h-screen overflow-hidden gap-10'>
        <div className='w-full lg:w-1/2 place-self-center flex justify-center flex-col items-center h-[calc(100vh_-_/2)]  lg:h-full gap-4 lg:order-1 order-2'>
          <div className=' flex flex-col gap-4'>
            <p className='  text-blue-950 text-4xl lg:text-7xl font-semibold text-center'>Keep your eyes </p>
            <p className='  text-blue-400   text-4xl lg:text-6xl  font-style italic text-center'>Healthy </p>
            <p className='  text-blue-950  text-2xl lg:text-3xl font-brand text-center relative'> <span className=' inline-block absolute lg:mt-1'>with</span>
             <span className='  text-blue-950  text-4xl lg:text-6xl font-semibold uppercase font-brand inline-block ml-16 lg:ml-20 '>Optical Care</span></p>
          </div>
         

        </div>
        <div className='lg:order-2 order-1 w-full lg:w-1/2 h-[calc(100vh_-_/2)]  lg:h-full relative '>
          <Image height={600} src={Hero} alt='hero_image' className=' object-cover lg:absolute bottom-0 right-0' />
        </div>
      </section>
      <section as='our advantages' className='flex flex-col px-6 md:px-20 py-20'>
        <div className='w-full'>
          <h2 className='uppercase font-brand text-blue-400  text-center text-2xl'>Our Advantages</h2>
          <h3 className='text-5xl font-semibold text-center text-blue-950 py-10'>Good vision for many years</h3>

        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 py-6 gap-y-20 '>

          <div className='flex gap-2 justify-start md:justify-center items-center'>
            <Image src={PRICE} height={60} width={60} alt='Favaourable Price' />
            <p className='text-xl'>Favaourable Price</p>

          </div>

          
          <div className='flex gap-2 justify-start md:justify-center items-center'>
            <Image src={EQ} height={60} width={60} alt='>Newest equipment'/>
            <p className='text-xl'>Newest equipment</p>

          </div>
          <div className='flex gap-2 justify-start md:justify-center items-center'>
            <Image src={DR} height={60} width={60} alt='Doctors experience'/>
            <p className='text-xl'>Doctors experience</p>

          </div>
          <div className='flex gap-2 justify-start md:justify-center items-center'>
            <Image src={ED} height={60} width={60} alt='Thorough diagnosis'/>
            <p className='text-xl'>Thorough diagnosis</p>

          </div>

          <div className='flex gap-2 justify-start md:justify-center items-center'>
            <Image src={BP} height={60} width={60} alt='Best practices' />
            <p className='text-xl'>Best practices</p>

          </div>
          
          <div className='flex gap-2 justify-start md:justify-center items-center'>
            <Image src={FRAMES} height={60} width={60} alt='>Wide Varity of Frames' />
            <p className='text-xl'>Wide Varity of Frames</p>

          </div>
          <div className='flex gap-2 justify-start md:justify-center items-center'>
            <Image src={LENS} height={60} width={60} alt='Wide Varity of Lens' />
            <p className='text-xl'>Wide Varity of Lens</p>

          </div>
          <div className='flex gap-2 justify-start md:justify-center items-center'>
            <Image src={OC} height={60} width={60} alt='Thorough diagnosis' />
            <p className='text-xl'>Best Services</p>

          </div>


        </div>
        
      </section>
      <section as='about us' id='about-us' className='flex flex-col lg:flex-row  px-6 md:px-20 py-20 bg-[#F6F7F9] gap-8 lg:gap-0'>
        <div className='w-full flex flex-col items-start lg:pr-28 gap-6'>
          <h2 className='uppercase font-brand text-blue-400   text-2xl'>About Us</h2>
          <h3 className='text-4xl font-semibold  text-blue-950  '>A center specialized in examining and correcting eyesight, and providing the latest glasses and lenses.</h3>

        </div>
        <div className=' flex flex-col gap-4'>
          <div className='flex gap-4'>
            <div className='w-10 h-10 bg-white rounded-full shrink-0 flex justify-center items-center drop-shadow-lg'>
              <PiCheckFatDuotone  className='w-6 h-6 fill-blue-400 text-blue-950' />
            </div>
            <p>Performing all procedures at the highest professional level using the most modern methods.</p>

          </div>
          <div className='flex gap-4'>
            <div className='w-10 h-10 bg-white rounded-full shrink-0 flex justify-center items-center drop-shadow-lg'>
              <PiCheckFatDuotone className='w-6 h-6 fill-blue-400 text-blue-950' />
            </div>
            <p>Drawing up an individual treatment program for each patient.</p>

          </div>
          <div className='flex gap-4'>
            <div className='w-10 h-10 bg-white rounded-full shrink-0 flex justify-center items-center drop-shadow-lg'>
              <PiCheckFatDuotone className='w-6 h-6 fill-blue-400 text-blue-950' />
            </div>
            <p>Compliance of materials and equipment with international standards, the availability of all necessary certificates and permits.</p>

          </div>
          

          
          
          
          


        </div>
        
      </section>

      <section as='our location' className='flex flex-col px-6 md:px-20 py-20'>
        <div className='w-full'>
          <h2 className='uppercase font-brand text-blue-400  text-center text-2xl'>Our Location</h2>
          <h3 className='text-5xl font-semibold text-center text-blue-950 py-10'>Easy way to find us</h3>

        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2  gap-10 py-6  w-full'>

          <div className=' md:w-[calc((100vw_-_200px)_/_2)] h-[300px] md:h-[400px] relative'>

            <Image fill src={Shop} alt='shop image' className='absolute object-cover rounded-lg shadow-lg'/>

          </div>
          <div className=' md:w-[calc((100vw_-_200px)_/_2)] h-[300px] md:h-[400px] relative'>
            <Image fill src={Map} alt='map image' className='absolute object-cover rounded-lg shadow-lg' />

          </div>


        </div>

      </section>


      <section as='our services' id='services' className='flex flex-col px-6 md:px-20 py-20 bg-[#F6F7F9]'>
        <div className='w-full'>
          <h2 className='uppercase font-brand text-blue-400  text-center text-2xl'>Our Services</h2>
          <h3 className='text-4xl font-semibold text-center text-blue-950 py-10 hidden lg:block'>We offer a whole range of services<br /> for you, your family and friends</h3>
          <h3 className='text-4xl font-semibold  text-blue-950 py-10 lg:hidden block'>We offer a whole range of services for you,your family and friends</h3>

        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 py-6 gap-y-20 w-full'>

          <div className='flex flex-col items-start  gap-2 justify-between p-10 h-[200px] border-[1px] border-blue-950/30 shadow-lg hover:-translate-y-[20px] transition-all duration-150 ease-in-out cursor-pointer'>
            <Image src={DR} height={60} width={60} alt='Favaourable Price' />
            <p className='text-xl'>Comprehensive diagnosis of vision</p>

          </div>


          {/* <div className='flex flex-col items-start  gap-2 justify-between p-10 h-[200px] border-[1px] border-blue-950/30 shadow-lg hover:-translate-y-[20px] transition-all duration-150 ease-in-out cursor-pointer'>
            <Image src={LC} height={60} width={60} alt='>Newest equipment' />
            <p className='text-xl'>Laser Vision Correction</p>

          </div> */}
          <div className='flex flex-col items-start  gap-2 justify-between p-10 h-[200px] border-[1px] border-blue-950/30 shadow-lg hover:-translate-y-[20px] transition-all duration-150 ease-in-out cursor-pointer'>
            <Image src={LENS} height={60} width={60} alt='Doctors experience' />
            <p className='text-xl'>Lenses</p>

          </div>
          <div className='flex flex-col items-start  gap-2 justify-between p-10 h-[200px] border-[1px] border-blue-950/30 shadow-lg hover:-translate-y-[20px] transition-all duration-150 ease-in-out cursor-pointer'>
            <Image src={FRAMES} height={60} width={60} alt='Thorough diagnosis' />
            <p className='text-xl'>Frames</p>

          </div>

          


        </div>

      </section>
      <section as='customer review' id='testimonials' className='flex flex-col px-6 md:px-20 py-20 '>
        <div className='w-full'>
          <h2 className='uppercase font-brand text-blue-400  text-center text-2xl'>TESTIMONIALS</h2>
          <h3 className='text-4xl font-semibold text-center text-blue-950 py-10'>Don&apos;t take our word for it —<br/>
            hear what our customers are saying</h3>

        </div>
     

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 py-6 gap-y-20 w-full'>
        
          <div className='flex flex-col items-start  quote   relative gap-[20px] '>
            <div className='p-8 custom-shadow3  quote-description relative z-[1] bg-white h-min'>
              It is one of the best eyeglasses stores in terms of eye examination. It has distinguished eye specialists and their treatment is excellent in terms of explaining the types of lenses and the difference between them. It is better than Moroccan in this regard.
              The assortment of glasses is diverse
            </div>
            <div className='ml-[20px] flex justify-start items-center gap-3'>
              <div className='w-14 h-14  rounded-full relative overflow-hidden  '>
                <Image src={User2} alt='user' fill className="absolute object-cover " />
              </div>
              <div>
                <h4 className='font-bold text-lg text-blue-950 font-hero'>Adeeb Saleh</h4>
                
              </div>
            </div>
          </div>

          <div className='flex flex-col items-start  quote   relative gap-[20px] '>
            <div className='p-8 custom-shadow3  quote-description relative z-[1] bg-white h-min'>
              To be honest, I have been getting my lenses and glasses from them regularly for two years, their treatment is nice, the examination by the doctor is distinguished, his examination is accurate and nice, as many examinations as I have tried, they are the best people I have tried (the first time I bought glasses from them, I was shocked that I was supposed to be able to read the signs on the street).
              Their lenses are very good and fast, they take out a lot in a day or two, their support is nice and they are very cooperative.
            </div>
            <div className='ml-[20px] flex justify-start items-center gap-3'>
              <div className='w-14 h-14  rounded-full relative overflow-hidden  '>
                <Image src={User1} alt='user' fill className="absolute object-cover " />
              </div>
              <div>
                <h4 className='font-bold text-lg text-blue-950 font-hero'>Raghadm</h4>

              </div>
            </div>
          </div>

          <div className='flex flex-col items-start  quote   relative gap-[20px] '>
            <div className='p-8 custom-shadow3  quote-description relative z-[1] bg-white h-min'>
              Very excellent, I had glasses removed from them and were comfortable with them, unlike the ones I had had before from other stores that cracked in the head.
            </div>
            <div className='ml-[20px] flex justify-start items-center gap-3'>
              <div className='w-14 h-14  rounded-full relative overflow-hidden  '>
                <Image src={User3} alt='user' fill className="absolute object-cover " />
              </div>
              <div>
                <h4 className='font-bold text-lg text-blue-950 font-hero'>SALEH ALMUTAIRI</h4>
                
              </div>
            </div>
          </div>

        </div>

      </section>
      

      <section id="footer" className="w-full  md:h-[300px] overflow-hidden">

        <div className="w-full h-full flex justify-around items-center   bg-[#0e1633] md:overflow-hidden container-padding px-6 md:px-20 py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between  gap-8 md:gap-10   text-white">
            <div className="flex flex-row lg:flex-col w-[215px] gap-2">
              <div className="flex lg:place-items-center relative h-16  w-16">
                <Image alt="logo" fill src={Logo} className="absolute object-contain" />

              </div>
              <p className="font-brand uppercase lg:text-2xl text-white self-center">Optical Care</p>
            </div>

            <div className=" w-[1px] h-full bg-[#ffffff1a] relative hidden md:block md:h-[300px]">
              <div className="line w-full h-full hidden md:block">
              </div>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-4">Social</h5>
              <div className="flex justify-start items-start gap-6 ">
                <Link href="/" >
                  <MdFacebook className="w-8 h-8 hover:drop-shadow-lg hover:scale-105 cursor-pointer hover:-translate-y-1 transition-all duration-200" />
                </Link>
                <Link href="https://twitter.com/OpticareSA" >
                  <BsTwitterX className="w-7 h-8 hover:drop-shadow-lg hover:scale-105 cursor-pointer hover:-translate-y-1 transition-all duration-200" />
                </Link>
                <Link href="/" ><FaYoutube className="w-7 h-7 hover:drop-shadow-lg hover:scale-105 cursor-pointer hover:-translate-y-1 transition-all duration-200" /></Link>
                <Link href="/" ><AiFillInstagram className="w-7 h-7 hover:drop-shadow-lg hover:scale-105 cursor-pointer hover:-translate-y-1 transition-all duration-200" /></Link>
              </div>
            </div>

            <div className=" w-[1px] h-full bg-[#ffffff1a] relative hidden md:block md:h-[300px]">
              <div className="line w-full h-full hidden md:block">
              </div>
            </div>
            <div className='flex flex-col '>
              <p className='text-lg font-bold mb-4'>Open Hours </p>
              <div className='text-white text-sm flex flex-col gap-2'>
                <p>Saturday - Friday
                </p>
                <p>4:00PM - 12:00AM</p>
              </div>


            </div>
            <div className=" w-[1px] h-full bg-[#ffffff1a] relative hidden md:block md:h-[300px]">
              <div className="line w-full h-full hidden md:block">
              </div>
            </div>


            <div className="footer-contant">
              <h5 className="text-lg font-bold mb-4">Contact Info</h5>
              <div>
                <ul className=" flex flex-col gap-4">
                  <li className="flex justify-start items-start  gap-3">
                    <MdPlace className="w-6 h-6 shrink-0" />
                    <p className="leading-tight capitalize">
                      {" "}
                      4588, Al Wusta District, Unayzah 56466, Saudi Arabia

                    </p>
                  </li>
                  <li className="flex justify-start items-center  gap-3">
                    <MdPhone className="w-5 h-5 shrink-0" />
                    +966566696151
                  </li>
                  <li className="flex justify-start items-center  gap-3">
                    <MdEmail className="w-5 h-5 shrink-0" />
                    admin@opticalcare.net
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <div className="w-full h-12 bg-[#0a1026] flex justify-center items-center">
        <h6 className=" text-white">Copyright © 2023, All rights reserved.</h6>
      </div>
     
    </div>
  )
}
