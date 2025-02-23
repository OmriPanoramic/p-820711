import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Header } from "@/components/Header";

import { Section1 } from "@/components/section1";
import { Section2 } from "@/components/section2";
import { Section3 } from "@/components/section3";
import { Section4 } from "@/components/section4";
import { Section5 } from "@/components/section5";
import { Section6 } from "@/components/section6";
import { Footer } from "@/components/footer/footer";

const Section = ({
  color,
  children,
  id,
}: {
  color: string;
  children?: React.ReactNode;
  id?: string;
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      //viewport={{ amount: "all" }}
      className={`min-h-screen ${color} flex items-center justify-center`}
    >
      {children}
    </motion.section>
  );
};

const Index = () => {
  const [isRefReady, setIsRefReady] = useState(false);

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
      offset: ["start start", "end end"],
    container: scrollRef,
  });
  
  useEffect(() => {
    if (scrollRef.current) {
      setIsRefReady(true);
    }
  }, [scrollRef.current]);

  const rightCirclePosY = useTransform(scrollYProgress, [0, .5], [200, -1000]);
  const leftCirclePosY = useTransform(scrollYProgress, [0, .5], [-100, -500]);
  return (
    <div className="relative overflow-hidden h-screen" >
      <Header />
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 right-0 top-0 z-[51] h-0.5 bg-primary"
      />
      <div className="absolute w-full h-full overflow-hidden pointer-events-none opacity-10">
        {/* Right circle */}
        <motion.div 
          className="absolute  w-[1767.744px] h-[1767.744px] rounded-[1767.744px] border border-[#FFAA46]"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 144, 55, 0.50) 0%, rgba(255, 144, 55, 0.08) 100%)',
            zIndex: -1,
            top: rightCirclePosY,
            left: '50%',
            transform: 'translateX(-30%)'
          }}
        />
        
        <motion.div 
          className="absolute w-[1767.744px] h-[1767.744px] rounded-[1767.744px] border border-[#FFB45C]"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 144, 55, 0.56) 0%, rgba(255, 247, 237, 0.20) 100%)',
            top: leftCirclePosY,
            right: '50%',
            transform: 'translateX(0%)'
          }}
        />
      </div>
      <main className="h-[calc(100vh)] absolute top-0 pt-[64px] overflow-y-auto w-full" ref={scrollRef} id="main">
      

        <Section color="container" id="section1">
          {isRefReady && <Section1 scrollRef={scrollRef} />}
        </Section>
        <Section color="container" id="section2">
          <Section2 />
        </Section>
        <Section color="container" id="section3">
          <Section3 />
        </Section>
        <Section color="container" id="section4">
          <Section4 />
        </Section>
        <Section color="container" id="section5">
          <Section5 />
        </Section>
        <Section color="container" id="section6">
          <Section6 />
        </Section>
        <Footer />
      </main>
    </div>
  );
};

export default Index;
