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
      "Enjoy a smoother, faster, and more intuitive user experience across the platform.",
    gridClass: "col-span-1 row-span-1 md:col-span-1",
    image: imgNavigation,
    mobileImage: imgNavigation, // Same image for both
  },
  {
    title: "Unlimited customizable dashboards",
    description:
        "Easily design, personalize, and distribute dynamic dashboards, suited to your requirements.\n Create tailored dashboards for team collaboration and display performance dashboards for public access",
    gridClass: "col-span-1 row-span-1 md:col-span-2",
    image: imgDashboardsDesktop,
    mobileImage: imgDashboardsMobile,
  },
  {
    title: "Collaborate on event management",
    description:
      "Enhance event management by delegating tasks, overseeing alerts, and capturing insights in real-time across multiple team members",
    gridClass: "col-span-1 row-span-1 md:col-span-2",
    image: imgEventsDesktop,
    mobileImage: imgEventsMobile,
  },
  {
    title: "Customizable categories and device types",
    description:
      "Adapt categories and build widgets to perfectly match your unique operational requirements for targeted monitoring and management.",
    gridClass: "col-span-1 row-span-1 md:col-span-1",
    image: imgCategories,
    mobileImage: imgCategories, // Same image for both
  },
  {
    title: "Groups: New ways to manage your assets",
    description:
      "Easily organize assets into meaningful groups and track tailored analytics in specialized widgets, for informed, strategic decisions.",
    gridClass: "col-span-1 row-span-1 md:col-span-1",
    image: imgGroups,
    mobileImage: imgGroups, // Same image for both
  },
  {
    title: "Schedules: New ways for time management and data presentation",
    description:
      "Create customized schedules, working hours, and shifts, and overlay them onto your Timeview insights for more informed and effective decision-making.",
    gridClass: "col-span-1 row-span-1 md:col-span-2",
    image: imgSchedulesDesktop,
    mobileImage: imgSchedulesMobile,
  },
  {
    title: "The new Timeview: Real-time insights for your daily needs",
    description:
      "Dive deeper into detailed metrics, live device data, and save custom views for easy team sharing and collaboration.",
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
            className={`relative flex min-h-[240px] cursor-pointer flex-col overflow-hidden rounded-lg bg-[#F7F7F5] border border-[#222222]/10 ${item.gridClass}`}
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
                  y: hoveredIndex === index ? "25%" : 0,
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
