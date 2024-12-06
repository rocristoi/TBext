import { useEffect, useState } from 'react'
import './App.css'
import UnderlineText from "./UnderlineText";
import { motion, useAnimation } from "framer-motion";
import { script, widget } from './assets';
import { useInView } from 'react-intersection-observer';



const DesktopPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      controls.start({
        strokeDashoffset: 0,
        opacity: 1,
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      });

      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, [controls]);
  return (
<div className="h-screen w-screen flex flex-col">
  <div className="mt-80 ml-40 flex flex-row  ">
    <div className="flex flex-col w-2/3">
      <h2 className="font-black text-[40px] ">
        Having realtime transport data is cool, <UnderlineText text="isn't it?" />
      </h2>
      <p className="relative w-2/3">
        Isn't it cool to have real-time bus, tram, and public transport data right in your pocket? No more waiting at stops, guessing when the next ride will arrive, or stressing about delays.
      </p>
    </div>

    <motion.div
      className="flex flex-col gap-0 align-center text-center justify-center relative w-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeOut",
        duration: 1,
        staggerChildren: 0.5, 
      }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        10 in 5 min
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeOut",
          duration: 1,
          delay: 0.5,
        }}
      >
        11 in 60 sec
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeOut",
          duration: 1,
          delay: 1,
        }}
      >
        25 in 17 min
      </motion.span>
    </motion.div>
  </div>

  <motion.svg
    className="absolute top-[25%] left-[40%] z-[-1] overflow-x-hidden" 
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 1422 800"
    width="1000"
    height="auto"
    initial={{ strokeDasharray: 1500, strokeDashoffset: 1500 }}
    animate={{
      strokeDashoffset: 0,
      transition: { duration: 2, ease: "easeInOut" },
    }}
  >
    <motion.g
      strokeWidth="10"
      stroke="hsl(227, 71%, 57%)"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="matrix(-0.12186934340514737,0.9925461516413221,-0.9925461516413221,-0.12186934340514737,1262.6675638175886,-256.9525764549211)"
    >
      <motion.path
        d="M402 104.97583770751953Q667 -20.02416229248047 711 413.97583770751953Q720 697.9758377075195 1020 722.9758377075195"
        markerEnd="url(#SvgjsMarker2207)"
      />
    </motion.g>
    <defs>
      <motion.marker
        markerWidth="3.5"
        markerHeight="3.5"
        refX="1.75"
        refY="1.75"
        viewBox="0 0 3.5 3.5"
        orient="auto"
        id="SvgjsMarker2207"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut", delay: 1 },
        }}
      >
        <polygon
          points="0,3.5 1.1666666666666667,1.75 0,0 3.5,1.75"
          fill="hsl(227, 71%, 57%)"
        ></polygon>
      </motion.marker>
    </defs>
  </motion.svg>
  <div className='flex text-center justify-center items-center mt-[450px]'>
        <h2 className='font-black text-[40px]'>What if you had it on your <span className='text-blue-500'><UnderlineText text="iPhone's" /> </span>lock screen?</h2>
  </div>

  <div className='flex flex-row h-[1920px] '>
        <div className='w-1/3 mt-20 flex flex-col items-center justify-center'>
        <h2 className='font-black text-xl'>Now you can!</h2>
        <p className='w-[350px] text-center mt-5'>The TBext widget for iPhone lets you view live Bucharest transport data directly on your home screen, eliminating the need to open the InfoTB app. Stay updated with ease!</p>
        </div>


        <motion.div className='mt-10 w-1/3 flex items-center justify-center '
         ref={ref}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: inView ? 1 : 0 }} 
                      transition={{
                        ease: "easeOut",
                        duration: 1,
                        delay: 0.5,
                      }}
        >
        <div className='w-[300px] flex flex-col items-center justify-center  rounded-xl '>


        <h2 className='font-medium mt-10' >Sunday, 1 December</h2>
        <h2 className='text-[60px] font-black leading-tight'>10:24</h2>
        <div className='flex flex-row gap-8 ml-4'>
          <div className='flex flex-col items-center'>
                <motion.span
            initial={{ color: "#FFFFFF" }}  
            animate={{ color: ["#3b82f6", "#FFFFFF"] }}  
            transition={{
              ease: "easeOut",
              duration: 1,
              repeat: Infinity,
              repeatDelay: 1,
              delay: 0.5,
            }}
           >
              10 in 5 min
            </motion.span>
            <motion.span
                        initial={{ color: "#FFFFFF" }} 
                        animate={{ color: ["#3b82f6", "#FFFFFF"] }}  
                        transition={{
                          ease: "easeOut",
                          duration: 1,
                          repeat: Infinity,
                          repeatDelay: 1,
                          delay: 1,
                        }}
            >
              11 in 60 sec
            </motion.span>
            <motion.span
                                    initial={{ color: "#FFFFFF" }}  
                                    animate={{ color: ["#3b82f6", "#FFFFFF"] }} 
                                    transition={{
                                      ease: "easeOut",
                                      duration: 1,
                                      repeat: Infinity,
                                      repeatDelay: 1,
                                      delay: 1.5,
                                    }}
            >
              25 in 17 min
            </motion.span>

          </div>
          <div className='flex flex-col'>
            <h2>No events today</h2>
            <h2>Mostly Cloudy</h2>
            <h2>H: 6° L: 3°</h2>
            
            </div>
        </div>
        <div className='mt-[300px] flex flex-row justify-center items-center mb-10 '>
          <div className='flex flex-col gap-0 items-center'>
            <h2 className='font-bold text-[12px] '>• 5 notifications</h2>
          <div className='w-[100px] h-[3px] bg-white rounded-xl'></div>
          </div>
            </div>
        </div>


        </motion.div>
        <div className='w-1/3 mt-20 flex flex-col items-center justify-center'>
        <h2 className='font-black text-xl'>How?</h2>
        <p className='w-[350px] text-center mt-5'>Installing the TBext widget on your iPhone is easy – no programming skills required. Scroll down to see the steps!</p>
        </div>
  </div>


      <div className='flex flex-col mt-40 '>
      <div className='flex text-center justify-center items-center mb-40'>
        <span className='text-blue-500 font-black text-[40px]'><UnderlineText text="Steps to intall" /> </span>
  </div>

        <div className='flex flex-row ml-40'>
          <div className='flex flex-col w-1/2 '>
          <h2 className='font-bold text-4xl'>Download Scriptable</h2>
          <span className='mt-4'>Scriptable is a tool designed to simplify and enhance the user experience with the TBext Widget, allowing users to easily access and interact with its features. By downloading Sacriptable, users ensure they have the necessary environment and configurations to run TBext seamlessly, which eliminates compatibility issues. The tool is optimized for better performance, meaning faster loading times and more stable operation when using the widget. </span>
        </div>
        <div className='ml-80'>
        <img className="w-[150px] h-[150px] rounded-xl " src="https://scriptable.app/assets/appicon.png" alt="" />
        </div>
                                    
</div>
<div className='flex flex-row mt-40 ml-40'>
        <div className='w-1/3 flex items-center '>
        <img className="w-[80px] h-[80px] rounded-xl invert flex  " src={script} alt="" />
        </div>
          <div className='flex flex-col w-1/2 text-end'>
          <h2 className='font-bold text-4xl'>Configure the script</h2>
          <span className='mt-4'>Copy the script from GitHub, and make sure to obtain your station ID from transport-live.cristoi.ro. Insert the ID into the script, add it to Scriptable, then save and close the app. </span>
        </div>
                                    
</div>
<div className='flex flex-row ml-40 mt-40'>
          <div className='flex flex-col w-1/2 '>
          <h2 className='font-bold text-4xl'>Insert the script & go!</h2>
          <span className='mt-4'>Insert the updated script, making sure to replace it with your desired station ID, into Scriptable. Once you've done that, create a medium-sized widget on your lock screen by adding a new widget from the Scriptable app. Then, select the name of the script you just added from the list of available scripts in Scriptable. After you've set it up, give it a little time to load. Once it's done, TBext will be fully functional and ready to display the information you need directly on your lock screen.</span>
        </div>
        <div className='ml-80 flex items-center'>
        <img className="w-[150px] h-[75px] rounded-xl " src={widget} alt="" />
        </div>
                                    
</div>

  </div>

  <motion.div className="mt-40 flex flex-col justify-end items-center  left-0 right-0"
                  initial={{ opacity:  0.5 }}
                  animate={{ opacity:  1 }}
                  exit={{  opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                  >
                  <div className="flex flex-col items-center leading-tight">
                    <h2>Developed by <span className="text-red-500">@rocristoi</span></h2>
                   <a href="https://github.com/rocristoi/TBext"> <h2 className="text-blue-500">Contribute to this project on Github</h2></a>
                  </div>
          </motion.div>
</div>

  )
}

const  getTransportMethod =  () => {
  return (
    <div>

    </div>
  )
}


const MobilePage = () => {
  const handleScroll = (pixels) => {
    window.scrollBy({ top: pixels, behavior: "smooth" });
  };

  const controls = useAnimation(); // Animation controller
  const { ref, inView } = useInView({ threshold: 0.5 }); // Detects when in view
  const delay = 0.5; // Delay in seconds

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const spanVariants = {
    hidden: { opacity: 0, y: 20 }, // Hidden state
    visible: { opacity: 1, y: 0 }, // Visible state
  };

  return (
    <div className='max-w-screen overflow-hidden '>
    <div className="mt-[110px]  flex flex-col items-center justify-center text-center p-8">
      <h2 className="text-2xl font-bold ">Having realtime transport data is cool, <UnderlineText text="isn't it?" /></h2>
      <p className="mt-4">
      Isn't it cool to have real-time bus, tram, and public transport data right in your pocket?
      </p>
    </div>
      <div className='mt-52 flex items-center flex-col'>
      <span className='font-bold text-[15px]'>What if you had it</span>
      <span className='font-medium text-[20px]'>On your <UnderlineText text="lock screen?" /></span>
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className='w-[40px] flex flex-col items-center h-[30px] rounded-full  mt-4 '
        onClick={(e) => { e.preventDefault(); handleScroll(700); }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#000000"
          height="800px"
          width="800px"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 330 330"
          xmlSpace="preserve"
          className='invert'
        >
          <path
            id="XMLID_225_"
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
          />
        </svg>

      </motion.div>
      </div>
    <div className='mt-10 h-screen flex flex-col items-center'>

      <div className=' flex flex-col items-center justify-center  rounded-xl '>


<h2 className='font-medium mt-10' >Sunday, 1 December</h2>
<h2 className='text-[60px] font-black leading-tight'>10:24</h2>
<div className='flex flex-row gap-8 ml-4'>
  <div className='flex flex-col items-center'>
        <motion.span
    initial={{ color: "#FFFFFF" }}  
    animate={{ color: ["#3b82f6", "#FFFFFF"] }}  
    transition={{
      ease: "easeOut",
      duration: 1,
      repeat: Infinity,
      repeatDelay: 1,
      delay: 0.5,
    }}
   >
      10 in 5 min
    </motion.span>
    <motion.span
                initial={{ color: "#FFFFFF" }} 
                animate={{ color: ["#3b82f6", "#FFFFFF"] }}  
                transition={{
                  ease: "easeOut",
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 1,
                  delay: 1,
                }}
    >
      11 in 60 sec
    </motion.span>
    <motion.span
                            initial={{ color: "#FFFFFF" }}  
                            animate={{ color: ["#3b82f6", "#FFFFFF"] }} 
                            transition={{
                              ease: "easeOut",
                              duration: 1,
                              repeat: Infinity,
                              repeatDelay: 1,
                              delay: 1.5,
                            }}
    >
      25 in 17 min
    </motion.span>

  </div>
  <div className='flex flex-col'>
    <h2>No events today</h2>
    <h2>Mostly Cloudy</h2>
    <h2>H: 6° L: 3°</h2>
    
    </div>
</div>
<div className='mt-[300px] flex flex-row justify-center items-center mb-10 '>
  <div className='flex flex-col gap-0 items-center'>
    <h2 className='font-bold text-[12px] '>• 5 notifications</h2>
  <div className='w-[100px] h-[3px] bg-white rounded-xl'></div>
  </div>
    </div>
</div>

      <div>
      <motion.span
      ref={ref} 
      initial="hidden"
      animate={controls} 
      variants={spanVariants}
      transition={{
        delay, 
        duration: 0.8, 
        ease: "easeOut",
      }}
      className='font-medium text-blue-500 text-lg'
    >Something like this?</motion.span>
         
         </div>
         <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className='w-[30px] flex flex-col items-center h-[50px] rounded-full  mt-4 '
        onClick={(e) => { e.preventDefault(); handleScroll(650); }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#000000"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 330 330"
          xmlSpace="preserve"
          className='fill-blue-500'
        >
          <path
            id="XMLID_225_"
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
          />
        </svg>

      </motion.div>


    </div>
    <div className='mt-10'>
      <div className='w-max-screen flex flex-col items-center justify-center'>
      <span className='font-black text-[30px]'>How to <UnderlineText text="install?" /></span> 
      </div>
      <div className='mt-10 flex flex-col p-4'>
        <h2 className='font-bold text-blue-500 text-[20px]'>Install the app.</h2>
        <span className='mt-2'>Download <span className='font-bold text-blue-500'>Scriptable</span> from the app store. Scriptable is a tool designed to simplify and enhance the user experience with the TBext Widget, allowing users to easily access and interact with its features. By downloading Sacriptable, users ensure they have the necessary environment and configurations to run TBext seamlessly, which eliminates compatibility issues. </span>
        <div className='flex flex-col items-end text-end mt-10'>
        <h2 className='font-bold text-blue-500 text-[20px]'>Configure the script.</h2>
        <span className='mt-2'>Copy the script from GitHub, and make sure to obtain your station ID from transport-live.cristoi.ro. Insert the ID into the script, add it to Scriptable, then save and close the app.</span>
      </div>
        <h2 className='font-bold text-blue-500 text-[20px] mt-10'>Insert the script & go!</h2>
        <span className='mt-2'>Create a medium-sized widget on your lock screen by adding a new widget from the Scriptable app. Then, select the name of the script you just added from the list of available scripts in Scriptable. After you've set it up, give it a little time to load. Once it's done, TBext will be fully functional and ready to display the information you need directly on your lock screen.</span>

      </div>
      <motion.div className="mt-20 mb-20 flex flex-col justify-end items-center  left-0 right-0"
                  initial={{ opacity:  0.5 }}
                  animate={{ opacity:  1 }}
                  exit={{  opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                  >
                  <div className="flex flex-col items-center leading-tight">
                    <h2>Developed by <span className="text-red-500">@rocristoi</span></h2>
                   <a href="https://github.com/rocristoi/TBext"> <h2 className="text-blue-500">Contribute to this project on Github</h2></a>
                  </div>
          </motion.div>
        </div>
    </div>
  );
};

const App = () =>  {
  const [isDesktop, setIsDesktop] = useState(false);



  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isDesktop ? <DesktopPage /> : <MobilePage />;
}

export default App
