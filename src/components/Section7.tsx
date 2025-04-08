import { useState, useEffect } from "react";
import { motion } from "motion/react";

// Import images
import imgNavigation from "@/assets/section7/img-navigation.png";
import imgDashboardsDesktop from "@/assets/section7/img-dashbords-desktop.png";
import imgDashboardsMobile from "@/assets/section7/img-dashbords-mobile.png";
import imgEventsDesktop from "@/assets/section7/img-events-desktop.png";
import imgEventsMobile from "@/assets/section7/img-events-mobile.png";
import imgCategories from "@/assets/section7/img-categories.png";
import imgGroups from "@/assets/section7/img-groups.png";
import imgSchedulesDesktop from "@/assets/section7/img-schedules-desktop.png";
import imgSchedulesMobile from "@/assets/section7/img-schedules-mobile.png";
import imgTimeviewDesktop from "@/assets/section7/img-timeview-desktop.png";
import imgTimeviewMobile from "@/assets/section7/img-timeview-mobile.png";

// Feature items matching the image with detailed descriptions
const featureItems = [
  {
    title: "Enhanced user interface and navigation",
    description:
      "The new Panoramic Optimize interface has been reimagined to offer a smoother, faster, and more intuitive experience.",
    gridClass: "col-span-1 row-span-1 md:col-span-1",
    image: imgNavigation,
    mobileImage: imgNavigation, // Same image for both
  },
  {
    title: "Unlimited customizable dashboards",
    description:
      "1. Transform any category, group, or device type into a dynamic, real-time widget tailored to your needs\n2. Easily design dashboards with drag-and-drop widgets to match your requirements and daily processes\n3. Share dashboards seamlessly with team members and executives for enhanced collaboration and efficiency\n4. Display dashboards automatically for public viewing and broadcast them to large screens for all employees to watch",
    gridClass: "col-span-1 row-span-1 md:col-span-2",
    image: imgDashboardsDesktop,
    mobileImage: imgDashboardsMobile,
  },
  {
    title: "Collaborate on event management",
    description:
      "1. Create actionable alerts and assign tasks to the right team members\n2. Add important notes\n3. Track events with real-time status updates, and document lessons learned for future reference",
    gridClass: "col-span-1 row-span-1 md:col-span-2",
    image: imgEventsDesktop,
    mobileImage: imgEventsMobile,
  },
  {
    title: "Customizable categories and device types",
    description:
      "Add new categories and device types completely customized to your needs. Adapt the system to your unique operational requirements.\n\nCreate widgets that serve your categories and device types. Display relevant data, enabling real-time monitoring and actionable insights specific to your customized setup.",
    gridClass: "col-span-1 row-span-1 md:col-span-1",
    image: imgCategories,
    mobileImage: imgCategories, // Same image for both
  },
  {
    title: "Groups: New ways to manage your assets",
    description:
      "Organize devices into tailored groups—based on shifts, line numbers, production lines, or any operational need.\n\nGenerate actionable analytics for your tailored groups—track consumption, costs, carbon footprints, and more for each group.",
    gridClass: "col-span-1 row-span-1 md:col-span-1",
    image: imgGroups,
    mobileImage: imgGroups, // Same image for both
  },
  {
    title: "Schedules: New ways for time management and data presentation",
    description:
      "1. Create personalized time schedules for various needs, including shifts, working hours, off-work hours, and more. Take full control to design schedules that fit your workflow\n2. Display time-sensitive data across schedules. Effortlessly align your Timeview insights with your schedules, making data and decision-making easier than ever",
    gridClass: "col-span-1 row-span-1 md:col-span-2",
    image: imgSchedulesDesktop,
    mobileImage: imgSchedulesMobile,
  },
  {
    title: "The new Timeview: Real-time insights for your daily needs",
    description:
      "1. Dive into detailed data insights, including energy consumption, costs, carbon emissions, and more\n2. See device performance across different time frames, see the power type and communication quality of every device\n3. Interact seamlessly with data and compare metrics for deeper, actionable insights\n4. Click on any point to instantly view a consolidated breakdown of that specific moment\n5. Save any screen view as a personalized or group preset, to share and use across your people and teams",
    gridClass: "col-span-1 row-span-1 md:col-span-3",
    image: imgTimeviewDesktop,
    mobileImage: imgTimeviewMobile,
  },
];

export const Section7 = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile-sized
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="flex w-full flex-col items-start gap-4 px-4 pb-20">
      <h3 className="text-sm text-primary">New in Panoramic Optimize</h3>
      <h2 className="mb-12 w-full text-4xl text-h2 font-bold leading-[50px]">
        Seamless. Powerful. Intelligent.
      </h2>

      <div className="mx-auto grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        {featureItems.map((item, index) => (
          <motion.div
            key={index}
            className={`relative flex min-h-[240px] cursor-pointer flex-col overflow-hidden rounded-lg bg-[#F7F7F5] ${item.gridClass}`}
            initial={{ scale: 1 }}
            animate={{
              scale:
                hoveredIndex === null
                  ? 1
                  : hoveredIndex === index
                    ? 1.03
                    : 0.98,
              zIndex: hoveredIndex === index ? 10 : 0,
              boxShadow:
                hoveredIndex === index
                  ? "0px 10px 25px rgba(0,0,0,0.12)"
                  : "none",
              opacity:
                hoveredIndex === null ? 1 : hoveredIndex === index ? 1 : 0.85,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <h3 className="mb-4 p-6 text-h5 text-[#222222]">{item.title}</h3>

            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-md">
              {/* Container for image with slide down animation */}
              <motion.div
                className="h-full w-full"
                animate={{
                  y: hoveredIndex === index ? "30%" : 0,
                  opacity: hoveredIndex === index ? 0.6 : 1,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={isMobile ? item.mobileImage : item.image}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
              </motion.div>

              {/* Description that slides in from top */}
              <motion.div
                className="absolute inset-0 flex items-start justify-start px-2"
                initial={{ opacity: 0, y: "-100%" }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? "0%" : "-100%",
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="rounded-lg p-4 text-[#222222] backdrop-blur-sm">
                  {item.description.split("\n").map((line, i) => (
                    <p
                      key={i}
                      className={`${line.match(/^\d+\./) ? "mt-1 text-left font-medium" : ""} ${i > 0 && !line.match(/^\d+\./) ? "mt-4" : ""}`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Section7;
