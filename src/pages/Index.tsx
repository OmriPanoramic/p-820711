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
import { FullStory } from "@fullstory/browser";

const Section = ({
  children,
  id,
}: {
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
      className="min-h-auto container flex items-center justify-center lg:min-h-screen"
    >
      {children}
    </motion.section>
  );
};

const Index = () => {
  const [isRefReady, setIsRefReady] = useState(false);

  const scrollRef = useRef(null);

  useEffect(() => {
    // Extract URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");
    const scope = urlParams.get("scope");
    const scopeId = urlParams.get("scopeId");
    const userId = urlParams.get("userId");
    const email = urlParams.get("email");

    // remove commas from userId
    const userIdWithoutCommas = userId?.replace(/,/g, "");


    // if we have the data  can we update Fullstory 
    if (name && scope && scopeId && userId && email) {
      FullStory('setIdentity', {
        uid: userIdWithoutCommas,
        properties: {
          displayName: name,
          email: email,
          baseScope: scope,
          baseScopeId: scopeId,
        },
      });
    }
    // Log the parameters
    console.log("URL Parameters:", {
      name,
      scope,
      scopeId,
      userId: userIdWithoutCommas,
      email,
    });
  }, []); // Run once when component mounts

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    container: scrollRef,
  });

  useEffect(() => {
    if (scrollRef.current) {
      setIsRefReady(true);
    }
  }, [scrollRef.current]);

  const rightCirclePosY = useTransform(scrollYProgress, [0, 0.5], [200, -1000]);
  const leftCirclePosY = useTransform(scrollYProgress, [0, 0.5], [-100, -500]);
  return (
    <div className="relative h-screen overflow-hidden">
      {isRefReady && <Header scrollRef={scrollRef} />}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 right-0 top-0 z-[51] h-0.5 bg-primary"
      />
      <div className="pointer-events-none absolute h-full w-full overflow-hidden opacity-10">
        {/* Right circle */}
        <motion.div
          className="absolute h-[1767.744px] w-[1767.744px] rounded-[1767.744px] border border-[#FFAA46]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 144, 55, 0.50) 0%, rgba(255, 144, 55, 0.08) 100%)",
            zIndex: -1,
            top: rightCirclePosY,
            left: "50%",
            transform: "translateX(-30%)",
          }}
        />

        <motion.div
          className="absolute h-[1767.744px] w-[1767.744px] rounded-[1767.744px] border border-[#FFB45C]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 144, 55, 0.56) 0%, rgba(255, 247, 237, 0.20) 100%)",
            top: leftCirclePosY,
            right: "50%",
            transform: "translateX(0%)",
          }}
        />
      </div>
      <main
        className="absolute top-0 h-[calc(100vh)] w-full overflow-y-auto pt-[64px]"
        ref={scrollRef}
        id="main"
      >
        <Section id="section1">
          {isRefReady && <Section1 scrollRef={scrollRef} />}
        </Section>
        <Section id="section2">
          <Section2 />
        </Section>
        <Section id="section3">
          <Section3 />
        </Section>
        <Section  id="section4">
          <Section4 />
        </Section> 
        <Section id="section5">
          <Section5 />
        </Section>
        <Section id="section6">
          <Section6 />
        </Section>
        <Footer />
      </main>
    </div>
  );
};

export default Index;
