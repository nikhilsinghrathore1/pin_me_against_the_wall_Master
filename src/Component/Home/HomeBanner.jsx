import React, { useEffect, useRef } from 'react'
import img1 from '../../assets/Images/Rectangle1.png'
import img2 from '../../assets/Images/Rectangle2.png'
import img3 from '../../assets/Images/Rectangle3.png'
import img4 from '../../assets/Images/Rectangle4.png'
import img5 from '../../assets/Images/Rectangle5.png'
import img6 from '../../assets/Images/Rectangle6.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function HomeBanner() {

  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(()=>{
    const text = textRef.current;
    const container = textRef.containerRef;

    gsap.fromTo(text,{
      x:0,
      y: 0,
    }, 
    {
      scrollTrigger:{
        trigger:text,
        start:"90% center",
        end:"600% center",
        pin:true,
        pinSpacing:false,
        scrub:true,
        // markers:true,
      },
      x:-2300,
      y: 0,
      duration:20,
      delay:1
    })

  },[])

  return (
    <div ref={containerRef} className='max-w-[1900px] relative overflow-x-hidden'>
        <div className='relative w-[82%] z-0 mt-[13.73%] flex justify-between left-[5.28%]'>
            <img className='rounded-[12px] w-[20.5%] h-[27.5%]' src={img1} alt="" />
            <img className='rounded-[12px] w-[20.5%] h-[27.5%] mt-[8.5%]' src={img2} alt="" />
        </div>
        <div className='absolute z-10 top-[6%] lg1:top-[8%] lgx:top-[10%] xl:top-[13%] xll:top-[15%] left-[78.2%]'>
          <h1 ref={textRef} className='text-[#ffce72] leading-[300px] font-poppins text-[120px] md3:text-[160px] lg1:text-[200px] xl:text-[250px] xl2:text-[280px] xll:text-[300px] z-10 font-medium'>IRL.MEDIA</h1>
        </div>
        <div className='relative z-20'>
        <div className='relative w-[66.18%] flex justify-between left-[10%]'>
            <img className='rounded-[12px] w-[28%] h-[333px] ml-[12.6%]' src={img3} alt="" />
            <img className='rounded-[12px] w-[33.6%] h-[33.6%] mt-[7.6%]' src={img4} alt="" />
        </div>
        <div className='w-[69.5%] flex justify-between mt-[8.3%] ml-[27.7%]'>
            <img className='rounded-[12px] w-[32%] h-[32%]' src={img5} alt="" />
            <img className='rounded-[12px] w-[24%] h-[400px] mt-[3.2%]' src={img6} alt="" />
        </div>
        </div>
    </div>
  )
}

export default HomeBanner