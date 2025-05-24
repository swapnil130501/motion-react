import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineMessage } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Card() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <AnimatePresence>
                {isOpen &&
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.98,
                            filter: "blur(10px)",
                        }}

                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                        }}

                        exit={{
                            opacity: 0,
                            scale: 0.98,
                            filter: "blur(10px)",
                        }}

                        transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                        }}

                        className="w-72 min-h-[26rem] h-[26rem] rounded-xl bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border border-gray-200 rounded-lg flex flex-col p-6">
                        <h2 className="font-bold text-[10px] ">Aceternity UI component</h2>
                        <span className="text-neutral-600 mt-2 text-[10px]">A collection of beautiful UI components, lets get on with it</span>
                        <div className="flex items-center justify-center">
                            <button onClick={() => setIsOpen(false)} className="flex items-center gap-1 text-[10px] mt-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border border-gray-200 rounded-md px-2 py-1">
                                <img className="h-5 w-5" src="src/assets/logo.png" />
                                Aceternity
                                <RxCross2 className="h-4 w-4 text-neutral-400" />
                            </button>
                        </div>

                        <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
                            {/* motion divs start here */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.98,
                                    filter: "blur(10px)",
                                }}

                                whileHover={{
                                    opacity: 1,
                                    scale: 1.05,
                                    filter: "blur(0px)",
                                }}

                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut"
                                }}

                                className="absolute inset-0 h-full w-full bg-white border border-neutral-200 divide-y divide-neutral-200 rounded-lg ">
                                <div className="flex gap-2 p-4">
                                    <div className="w-7 h-7 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border border-gray-200 rounded-md flex items-center justify-center">
                                        <BiMessageDetail className="h-4 w-4 text-neutral-600" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[8px] font-bold text-neutral-600">Message Detail</p>
                                        <p className="text-[8px] text-neutral-400 mt-1">View individual message insights</p>
                                    </div>
                                </div>

                                <div className="flex gap-2 p-4">
                                    <div className="w-7 h-7 shadow-[0_4px_32px_rgba(0,0,0,0.08)] backdrop-blur-[30px] bg-opacity-60 border border-gray-200 rounded-md flex items-center justify-center">
                                        <MdOutlineMessage className="h-4 w-4 text-neutral-600" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[8px] font-bold text-neutral-600">Chat Overview</p>
                                        <p className="text-[8px] text-neutral-400 mt-1">Summarize all your messages</p>
                                    </div>
                                </div>

                                <div className="flex gap-2 p-4">
                                    <div className="w-7 h-7 shadow-[0_4px_32px_rgba(0,0,0,0.08)] backdrop-blur-[30px] bg-opacity-60 border border-gray-200 rounded-md flex items-center justify-center">
                                        <RxCross2 className="h-4 w-4 text-neutral-600" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[8px] font-bold text-neutral-600">Dismiss Notification</p>
                                        <p className="text-[8px] text-neutral-400 mt-1">Clear alerts from your inbox</p>
                                    </div>
                                </div>

                                <div className="flex gap-2 p-4">
                                    <div className="w-7 h-7 shadow-[0_4px_32px_rgba(0,0,0,0.08)] backdrop-blur-[30px] bg-opacity-60 border border-gray-200 rounded-md flex items-center justify-center">
                                        <MdOutlineMessage className="h-4 w-4 text-neutral-600 rotate-180" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[8px] font-bold text-neutral-600">Reply Shortcut</p>
                                        <p className="text-[8px] text-neutral-400 mt-1">Quickly respond with one click</p>
                                    </div>
                                </div>
                            </motion.div>
                            {/* motion divs end here */}
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}