import React from "react";
import {
  MessageCircleQuestion,
  Lightbulb,
  MonitorCheck,
  UserRoundCog,
} from "lucide-react";

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
    <div className="flex flex-1 shrink-0 flex-col self-stretch">
      <div className="flex flex-1 shrink-0 flex-col self-stretch">
        <div className="flex flex-col justify-center">
          <div className="flex flex-1 flex-col gap-4 space-y-4">
            <p className="text-sm text-primary">Effortless migration</p>
            <div className="text-h2">
              Seamless transition,
              <br />
              maximum value
            </div>
            <p className="max-w-2xl text-xl">
              Your migration to Panoramic Optimize was automatic, secure, and
              effortless. Your experience with Optimize will be just as smooth
              and rewarding
            </p>
          </div>
        </div>
        <div className="flex flex-1 shrink-0 items-center self-stretch">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<UserRoundCog />}
              title="All set, all yours"
              description="Processes, benchmarks, and alerts from PowerRadar are already active"
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
