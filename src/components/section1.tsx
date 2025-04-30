import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import mainDashboard from "@/assets/main-image-dashboard.png";
import mainMobile from "@/assets/main-mobile-app.png";
import { UpgradeModal } from "./UpgradeModal";
import { useEffect, useState } from "react";
import trendUp from "@/assets/trend-up.svg";
import NumberFlow from "@number-flow/react";

export function Section1({
  scrollRef,
}: {
  scrollRef: React.RefObject<HTMLDivElement>;
}) {
  const [currentAlertValue, setCurrentAlertValue] = useState(18);

  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    container: scrollRef,
    target: scrollRef,
    offset: ["start start", "end end"],
    layoutEffect: true,
  });

  // if the screen is mobile width we need to change the amount of move on y axis
  const isMobile = window.innerWidth < 768;

  const mobilePosY = useTransform(
    scrollYProgress,
    [0, 0.1],
    isMobile ? [-10, 10] : [60, 100],
  );
  const mobileOpacity = useTransform(scrollYProgress, [0.1, 0.2], [1, 0]);

  const dashboardPosY = useTransform(scrollYProgress, [0, 0.1], [0, -100]);
  const dashboardOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    scrollYProgress.on("change", (value) => {
      const newValue = Math.round(99 - value * 99);
      setCurrentAlertValue(newValue);
    });
  }, [scrollYProgress]);

  return (
    <>
      <Card className="w-full border-none bg-transparent shadow-none">
        <CardContent className="flex flex-col items-center justify-center p-0">
          <motion.div
            className="mt-16 flex max-w-full flex-col items-center justify-center sm:max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[18px] text-[#FF7110]" translate="no">
              From PowerRadar to Panoramic Optimize
            </p>
            <motion.h1
              className="mb-4 text-center text-h3 md:text-h1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Unlock the Power of Smarter Energy Management
            </motion.h1>

            <motion.p
              className="mb-6 text-center text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              As a valued PowerRadar user, you're now using the trial version of
              Panoramic Optimize—our enhanced platform with smarter tools,
              deeper insights, and improved decision-making. See how it can
              transform the future of your energy management
            </motion.p>

            <motion.div
              className="flex flex-col items-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => setIsUpgradeModalOpen(true)}
                data-fs-track="upgrade-button"
              >
                Contact your Support Provider
              </Button>
              <Button
                size="lg"
                data-fs-track="why-we-transformed-button"
                variant="ghost"
                className="w-full border border-[#EBEBEB] sm:w-auto"
                onClick={() =>
                  window.open(
                    "/Optimize Trial Customer Letter.pdf",
                    "_blank",
                  )
                }
              >
                Why We Transformed{" "}
                <img src={trendUp} alt="Trend Up" className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
          <div className="my-10 flex w-full flex-col items-center gap-4 sm:flex-row">
            <motion.div
              className="relative mx-auto flex w-full max-w-[1126px] items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div
                className="relative bg-contain bg-center bg-no-repeat"
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                style={{
                  backgroundImage: `url(${mainDashboard})`,
                  y: dashboardPosY,
                  opacity: dashboardOpacity,
                }}
              >
                <motion.img
                  src={mainDashboard}
                  alt="Main Dashboard"
                  className="w-full"
                  initial={{ opacity: 0 }}
                />
                <motion.div className="absolute left-0 top-0 hidden h-full w-full origin-left xl:block">
                  <div className="absolute left-[67px] top-[130px] h-[88px] overflow-hidden bg-white text-[71px] leading-none">
                    <NumberFlow value={currentAlertValue} />
                  </div>
                  <div className="absolute left-[127px] top-[350px] overflow-hidden bg-white text-[32px] leading-none">
                    <NumberFlow
                      value={currentAlertValue * Math.random()}
                      format={{
                        maximumFractionDigits: 1,
                        minimumFractionDigits: 1,
                      }}
                      style={{
                        fontVariantNumeric: "tabular-nums",
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
              <motion.img
                src={mainMobile}
                alt="Main Mobile"
                className="absolute right-0 top-0 w-[100px] lg:w-[222px]"
                style={{
                  y: mobilePosY,
                  opacity: mobileOpacity,
                }}
              />
            </motion.div>
          </div>
        </CardContent>
      </Card>
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
      />
    </>
  );
}
