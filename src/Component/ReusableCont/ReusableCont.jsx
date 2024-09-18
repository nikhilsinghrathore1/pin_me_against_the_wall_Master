import React, { useEffect, useRef } from 'react';
import './ReusableCont.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ReusableCont = ({ colors, headings, paragraphs }) => {
  const mainCont_Ref = useRef(null);
  const paragraphRefs = useRef([]);
  const head1_Ref = useRef(null);
  const head2_Ref = useRef(null);
  const img_Ref=useRef(null)
  const head3_Ref = useRef(null);
  const scrollDiv_Ref = useRef(null);

  useEffect(() => {
    const mainCont = mainCont_Ref.current;
    const scrollDiv = scrollDiv_Ref.current;

    // GSAP context for cleanup
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: mainCont,
        start: 'top 80%',
        end: 'bottom top',
        // markers: true,
        onEnter: () => {
          gsap.timeline()
            .fromTo(
              [head1_Ref.current, head2_Ref.current],
              { width: '0%', opacity: 0 },
              { width: '110%', opacity: 1, duration: 2, ease: 'power2.inOut' }
            );

          // Smooth scroll to the next section
          gsap.to(window, {
            scrollTo: window.scrollY + window.innerHeight,
            duration: 1,
            ease: 'power1',
          });
        },
      });

      ScrollTrigger.create({
        trigger: scrollDiv,
        start: 'top 70%',
        // markers: true,
        onEnter: () => {
          gsap.timeline()
            .fromTo(
              head3_Ref.current,
              { width: '0%', opacity: 0 },
              { width: '110%', opacity: 1, duration: 2, ease: 'power2.inOut' }
            )
            .fromTo(
              paragraphRefs.current,
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 1, ease: 'power2.inOut', stagger: 0.3 }
            );

            gsap.fromTo(
                img_Ref.current,
                { opacity: 0 },
                {  opacity: 1, duration: 2, ease: 'power2.inOut' }
            )
        },
        
      });
    }, mainCont_Ref);

    // Cleanup on component unmount
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={mainCont_Ref}
      className="mainCont "    
    >
      <div className="innerCont inria-serif-bold">
        <h1 ref={head1_Ref} className="typing-text">{headings[0]}</h1>
        <div className="heading-Cont">
          <h1 ref={head2_Ref} className="typing-text">
            <img ref={img_Ref} src="src/assets/Images/Group.svg" alt="icon" /> {headings[1]}
          </h1>
          <div ref={scrollDiv_Ref}></div>
          <h1 ref={head3_Ref} className="typing-text">{headings[2]}</h1>
        </div>
        <div className="paragraph-Cont inria-serif-light">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              ref={(el) => (paragraphRefs.current[index] = el)}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReusableCont;
