import { useMotionValueEvent, useScroll, useTransform, motion, useMotionTemplate} from "motion/react";
import { useRef } from "react";

export default function MotionHooks() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Scroll Progress:", latest);
    })

    const translateContent = useTransform(scrollYProgress, [0, 1], [-200, 100]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

    const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
    const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

    const feature = [
        {
            title: 'Motion Hooks',
            description: 'Use motion hooks to create animations and transitions in your React components.',
            image: 'https://robohash.org/1'
        },
        {
            title: 'Framer Motion',
            description: 'Framer Motion is a popular library for creating animations in React applications.',
            image: 'https://robohash.org/2'
        },
        {
            title: 'React Spring',
            description: 'React Spring is another library that provides powerful animation capabilities for React.',
            image: 'https://robohash.org/3'
        }
    ]

    return (
        <div className="min-h-screen bg-neutral-900 flex items-center justify-center py-40">
            <div ref={ref} className="flex flex-col gap-10 max-w-4xl mx-auto p-8">
                {feature.map((feature) => (
                    <div key={feature.title} className="grid grid-cols-2 items-center gap-20 py-40">
                        <motion.div 
                            style={{
                                filter: useMotionTemplate`blur(${blur}px)`,
                                scale: scale,
                            }}
                            className="flex flex-col justify-center gap-4">
                            <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
                            <p className="text-neutral-400 text-lg">{feature.description}</p>
                        </motion.div>
                        <motion.div
                            style={{
                                y: translateContent,
                                opacity: opacityContent
                            }}
                        >
                            <img src={feature.image} alt={feature.title} className="w-full h-auto rounded-lg shadow-lg"/>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}