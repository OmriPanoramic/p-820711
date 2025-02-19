import React, { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { Section1 } from "@/components/section1";
import { Section2 } from "@/components/section2";
import { Header } from "@/components/Header";
import { Section3 } from "@/components/Section3";

const Section = ({
  color,
  children,
}: {
  color: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.section
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
      <main>
        <Section color="container">
          <Section1 />
        </Section>
        <Section color="container">
          <Section2 />
        </Section>
        <Section color="container">
          <Section3 />
        </Section>
      </main>
    </div>
  );
};

export default Index;
