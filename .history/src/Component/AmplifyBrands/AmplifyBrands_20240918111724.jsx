import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AmplifyBrands.css";

gsap.registerPlugin(ScrollTrigger);

const AmplifyBrands = () => {
  const mainCont_Ref = useRef(null);
  const innerRef = useRef(null);
  const circleCont_ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        innerRef.current,
        { filter: "blur(8px)" },
        {
          filter: "blur(0px)",
          scrollTrigger: {
            trigger: mainCont_Ref.current,
            start: "top 40%",
            end: "40% top",
            scrub: true,
            markers: true,
          },
        }
      );

      gsap.fromTo(
        circleCont_ref.current,
        { scale: 0.6 },
        {
          scale: 1.8,
          scrollTrigger: {
            trigger: circleCont_ref.current,
            start: "top 40%",
            end: "top 10%",
            scrub: true,
            markers: true,
          },
        }
      );

    }, []);
    return () => ctx.revert();
  }, []);

  return (
    <div className="AmplifyBrands_mainCont">
      <div className="AmplifyBrands_Cont inria-serif-bold" ref={mainCont_Ref}>
        <div className="AmplifyBrands_innerCont" ref={innerRef}>
          <h1>Amplify</h1>
          <h1>Your Brand</h1>
        </div>
        <div className="circle_cont" ref={circleCont_ref}>
          <div className="outerCircle">
            <div className="innerCircle1">
              <div className="innerCircle2"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmplifyBrands;
