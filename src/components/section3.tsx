import React from "react";
import {
  MessageCircleQuestion,
  Lightbulb,
  MonitorCheck,
  UserRoundCog,
} from "lucide-react";
import lines from "@/assets/lines.png";
import { motion } from "motion/react";
import ImageCard from "./ImageCard";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-2">
      <div className="text-2xl">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-lg text-muted-foreground">{description}</p>
  </div>
);

export const Section3 = () => {
  return (
    <div className="mb-20 flex w-full flex-1 shrink-0 flex-col self-stretch">
      <div className="flex flex-1 shrink-0 flex-col self-stretch">
        <div className="flex flex-1 shrink-0 flex-col items-center self-stretch lg:flex-row">
          <div className="flex flex-1 flex-col gap-4">
            <p className="text-sm text-primary">Effortless migration</p>
            <div className="text-h2">
              Seamless transition,
              <br />
              maximum value
            </div>
            <p className="max-w-2xl text-xl">
              Your migration to Panoramic Optimize will be automatic, secure, and
              effortless. Your experience with Optimize will be just as smooth
              and rewarding
            </p>
          </div>
          <div className="relative flex flex-1 shrink-0 items-center justify-center self-stretch overflow-hidden">
            <div className="relative h-[470px] w-[470px] lg:h-full lg:w-full lg:overflow-hidden items-center flex justify-center">
              <motion.img
                src={lines}
                alt="bg"
                className="absolute left-0 top-0 w-full max-w-[470px] object-cover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
              />
              <ImageCard />
            </div>
          </div>
        </div>
        <div className="flex flex-1 shrink-0 items-center self-stretch">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<UserRoundCog />}
              title="All set, all yours"
              description="Processes, benchmarks, and alerts from Panoramic are already active"
            />
            <FeatureCard
              icon={<Lightbulb />}
              title="Guided transformation"
              description="Access tips and guides to maximize your Optimize experience"
            />
            <FeatureCard
              icon={<MonitorCheck />}
              title="Zero learning curve"
              description="Enjoy an intuitive UI designed for ease and efficiency"
            />
            <FeatureCard
              icon={<MessageCircleQuestion />}
              title="Always supported"
              description="Continuous help from your trusted partner every step of the way"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
