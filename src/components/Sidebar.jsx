import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { IoAnalytics, IoHomeOutline, IoSettingsOutline } from "react-icons/io5"
import { m, motion } from 'motion/react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const links = [
        {
            name: "Home",
            href: "/",
            icon: <IoHomeOutline />
        },
        {
            name: "Analytics",
            href: "/analytics",
            icon: <IoAnalytics />
        },
        {
            name: "Users",
            href: "/users",
            icon: <HiOutlineUsers />
        },
        {
            name: "Settings",
            href: "/settings",
            icon: <IoSettingsOutline />
        }
    ]

    const sidebarVariant = {
        open: {
            width: '16rem'
        },
        closed: {
            width: '4.5rem'
        }
    }

    const childVariant = {
        open: {
            opacity: 1,
            y: 0
        },
        closed: {
            opacity: 0,
            y: -10
        }
    }

    const parentVariant = {
        open: {
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.2 
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    }

    return (
        <motion.div 
            initial={false}
            animate={isOpen ? "open" : "closed"}
            transiton={{
                duration: 0.3,
            }}
            className="h-full bg-gray-100 border-r border-neutral-100">
            <motion.nav
                variants={sidebarVariant}
                className="bg-white shadow-md h-full">
                <div className="flex items-center justify-between p-4">
                    <h2 className={`text-xl font-semibold ${!isOpen && "sr-only"}`}>
                        Dashboard
                    </h2>

                    <button onClick={() => setIsOpen(!isOpen)}
                        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none">
                        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
                    </button>
                </div>

                <div className="relative">
                    <nav className="p-4">
                        <motion.ul 
                        variants={parentVariant}
                        className="space-y-2">
                            {links.map((link) => (
                                <motion.li 
                                variants={childVariant}
                                key={link.name}>
                                    <a
                                        href={link.href}
                                        className="flex items-center p-2 text-gray-700 rounded-md hover:bg-gray-200"
                                        title={!isOpen ? link.name : ""}
                                    >
                                        <span className="flex items-center gap-2">
                                            {link.icon}
                                            {isOpen && link.name}
                                        </span>
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </nav>
                </div>
            </motion.nav>
        </motion.div>
    )
}