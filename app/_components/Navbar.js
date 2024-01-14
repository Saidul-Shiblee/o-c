'use client'

import React, { useState, useEffect } from "react";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../public/logo_transparent.png"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [scrollActive, setScrollActive] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
        });
    }, []);
    return (
        <>
            <header
                className={
                    "px-6 lg:px-20 fixed top-0 w-full  z-30  transition-all " +
                    (scrollActive ? " shadow-md pt-0 bg-blue-400/60 backdrop-blur-lg" : " pt-4")
                }
            >
                <nav className=" container-padding mx-auto flex justify-between items-center  !py-2  h-[80px] md:h-[90px]">

                    <div className="flex  items-center relative   gap-2">
                        <Image alt="logo" height={70} h={70} src={Logo} className="lg:block hidden" />
                        <Image alt="logo" height={50} h={50} src={Logo} className="block lg:hidden" />
                        <span className="font-brand uppercase lg:text-2xl  text-blue-950">Optical Care</span>
                    </div>
                    

                    <Sheet >
                        <SheetTrigger asChild>
                            <GiHamburgerMenu className="w-10 h-8 text-blue-950 md:hidden block" />

                        </SheetTrigger>
                        <SheetContent className='bg-white h-full flex justify-center items-center '>
                            <SheetHeader>

                            </SheetHeader>
                            <ul className="flex gap-6 flex-col   items-center uppercase text-blue-950">
                                <SheetClose asChild>
                                    <LinkScroll
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        duration={1000}
                                        onSetActive={() => {
                                            setActiveLink("home");
                                        }}
                                        className={
                                            "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                            (activeLink === "home"
                                                ? " text-blue-400 animation-active "
                                                : " text-blue-950 hover:text-blue-400 ")
                                        }
                                    >

                                        Home
                                    </LinkScroll>
                                </SheetClose>
                                <SheetClose asChild>
                                    <LinkScroll
                                        activeClass="active"
                                        to="about-us"
                                        spy={true}
                                        smooth={true}
                                        duration={1000}
                                        onSetActive={() => {
                                            setActiveLink("about-us");
                                        }}
                                        className={
                                            "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                            (activeLink === "about-us"
                                                ? " text-blue-400 animation-active "
                                                : " text-blue-950 hover:text-blue-400 ")
                                        }
                                    >
                                        About-Us
                                    </LinkScroll>
                                </SheetClose>

                                <SheetClose asChild>
                                    <LinkScroll
                                        activeClass="active"
                                        to="services"
                                        spy={true}
                                        smooth={true}
                                        duration={1000}
                                        onSetActive={() => {
                                            setActiveLink("services");
                                        }}
                                        className={
                                            "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                            (activeLink === "services"
                                                ? " text-blue-400 animation-active "
                                                : " text-blue-950 hover:text-blue-400 ")
                                        }
                                    >
                                        Services
                                    </LinkScroll>
                                </SheetClose>
                                
                                <SheetClose asChild>
                                    <LinkScroll
                                        activeClass="active"
                                        to="testimonials"
                                        spy={true}
                                        smooth={true}
                                        duration={1000}
                                        onSetActive={() => {
                                            setActiveLink("testimonials");
                                        }}
                                        className={
                                            "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                            (activeLink === "testimonials"
                                                ? " text-blue-400 animation-active "
                                                : " text-blue-950 hover:text-blue-400 ")
                                        }
                                    >
                                        Testimonials
                                    </LinkScroll>
                                </SheetClose>

                                <SheetClose asChild>
                                    <LinkScroll
                                        activeClass="active"
                                        to="footer"
                                        spy={true}
                                        smooth={true}
                                        duration={1000}
                                        onSetActive={() => {
                                            setActiveLink("footer");
                                        }}
                                        className={
                                            "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                            (activeLink === "footer"
                                                ? " text-blue-400 animation-active "
                                                : " text-blue-950 hover:text-blue-400 ")
                                        }
                                    >
                                        Contact Us
                                    </LinkScroll>
                                </SheetClose>


                            </ul>
                            <SheetFooter>

                            </SheetFooter>
                        </SheetContent>
                    </Sheet>



                    <div className=" font-medium hidden lg:flex justify-end items-center">
                        <ul className="flex gap-2    items-center uppercase text-blue-950">

                            <LinkScroll
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                onSetActive={() => {
                                    setActiveLink("home");
                                }}
                                className={
                                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                    (activeLink === "home"
                                        ? " text-blue-400 animation-active "
                                        : " text-blue-950 hover:text-blue-400 ")
                                }
                            >

                                Home
                            </LinkScroll>


                            <LinkScroll
                                activeClass="active"
                                to="about-us"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                onSetActive={() => {
                                    setActiveLink("about-us");
                                }}
                                className={
                                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                    (activeLink === "about-us"
                                        ? " text-blue-400 animation-active "
                                        : " text-blue-950 hover:text-blue-400 ")
                                }
                            >
                                About Us
                            </LinkScroll>



                            <LinkScroll
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                onSetActive={() => {
                                    setActiveLink("services");
                                }}
                                className={
                                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                    (activeLink === "services"
                                        ? " text-blue-400 animation-active "
                                        : " text-blue-950 hover:text-blue-400 ")
                                }
                            >
                                Services
                            </LinkScroll>



                            <LinkScroll
                                activeClass="active"
                                to="testimonials"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                onSetActive={() => {
                                    setActiveLink("testimonials");
                                }}
                                className={
                                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                    (activeLink === "testimonials"
                                        ? " text-blue-400 animation-active "
                                        : " text-blue-950 hover:text-blue-400 ")
                                }
                            >
                                Testimonials
                            </LinkScroll>



                            <LinkScroll
                                activeClass="active"
                                to="footer"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                onSetActive={() => {
                                    setActiveLink("footer");
                                }}
                                className={
                                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                    (activeLink === "footer"
                                        ? " text-blue-400 animation-active "
                                        : " text-blue-950 hover:text-blue-400 ")
                                }
                            >
                                Contact Us
                            </LinkScroll>
                        </ul>


                    </div>
                </nav>
            </header>

        </>
    );
};

export default Navbar;






           
                               