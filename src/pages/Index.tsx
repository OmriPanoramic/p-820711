import React, { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { Header } from "@/components/Header";

import { Section1 } from "@/components/section1";
import { Section2 } from "@/components/section2";
import { Section3 } from "@/components/sections3";
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
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="relative" ref={scrollRef}>
      <Header />
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 z-[51] right-0 h-0.5 bg-primary"
      />
      <main className="pt-10">
        <Section color="container" id="section1">
          <Section1 />
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
