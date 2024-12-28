




import { cn } from "@/lib/utils";
import CCC from "../../images/CCC.png";
import { motion } from "framer-motion";

export default function Orbit2({
  className,
  reverse,
  duration = 20,
  delay = 10,
  radius = 80,
  path = true
}) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 w-full h-full"
        >
          {/* First Circle with increased border width */}
          {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 w-full h-full"
        >
          {/* First Circle with increased border width */}
          <circle
            className="stroke-gray-500 stroke-16 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            // style={{ strokeWidth: 3 }}
          />
          {/* Second Circle with increased border width */}
          <circle
            className="stroke-gray-500 stroke-8 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius + 100}
            fill="none"
            // style={{ strokeWidth: 3 }}
          />
          {/* Third Circle with increased border width */}
          <circle
            className="stroke-gray-500 stroke-8 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius + 200}
            fill="none"
            // style={{ strokeWidth: 3 }}
          />
        </svg>
      )}

        </svg>
      )}

      {/* Rotating "Think" text on the first circle */}
      <div
        style={{
          "--duration": duration,
          "--radius": radius,
          "--delay": -delay,
        }}
        className={cn(
          "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full  [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
          { "[animation-direction:reverse]": reverse },
          className
        )}
      >
        <span className="text-center text-xs dark:text-white font-bold text-white h-16 w-16 bg-violet-600 rounded-full flex justify-center items-center">
          Think
        </span>
      </div>

      <div
        style={{
          "--duration": duration,
          "--radius": radius + 100, 
          "--delay": -delay + 2, // Slight delay for "Develop"
        }}
        className={cn(
          "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full  [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
          { "[animation-direction:reverse]": reverse },
          className
        )}
      >
        <span className="text-center text-xs dark:text-white font-bold text-white h-16 w-16 bg-violet-600 rounded-full flex justify-center items-center">
          Develop
        </span>
      </div>

    
      <div
        style={{
          "--duration": duration,
          "--radius": radius + 200, 
          "--delay": -delay + 4, 
        }}
        className={cn(
          "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full  [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
          { "[animation-direction:reverse]": reverse },
          className
        )}
      >
        <span className="text-center text-xs dark:text-white font-bold text-white h-16 w-16 bg-violet-600 rounded-full flex justify-center items-center">
          Deploy
        </span>
      </div>
      <div className="absolute flex items-center justify-center inset-0 z-10">
        <motion.div 
         initial={{ rotate: 0 }} 
         animate={{ rotate: 360 }}
         transition={{
           duration: 15, 
           repeat: Infinity, 
           ease: "linear", 
         }}
        >
        {/* <img src={CCC} className="h-14" alt="CCC" /> */}
        </motion.div>
        
      </div>
    </>
  );
}

