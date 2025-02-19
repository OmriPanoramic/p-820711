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
      <h3 className="font-semibold text-xl">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const Section3 = () => {
  return (
    <div className="">
      <div className="space-y-16">
        <div className="space-y-4">
          <p className="text-primary">Effortless migration</p>
          <h2 className="text-5xl font-medium">
            Seamless transition,
            <br />
            maximum value
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Your migration to Panoramic Optimize was automatic, secure, and
            effortless. Your experience with Optimize will be just as smooth and
            rewarding
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
  );
};
