import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import mainDashboard from "@/assets/main-image-dashboard.png";
import mainMobile from "@/assets/main-mobile-app.png";

export function Section1() {
  return (
    <Card className="w-full border-none bg-background shadow-none">
      <CardContent className="p-0 flex flex-col items-center justify-center">
        <motion.div
          className="max-w-full sm:max-w-3xl flex flex-col items-center justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="mb-4 text-h1 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The next step in your energy management journey
          </motion.h1>

          <motion.p
            className="mb-6 text-xl text-muted-foreground text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Smarter tools, deeper insights, greater savings — discover how
            upgrading to Panoramic Optimize can transform your future of energy
            management.
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button size="lg" className="w-full sm:w-auto">
              Upgrade to Optimize
            </Button>
            <Button variant="ghost" className="w-full sm:w-auto">
              Why We Transformed →
            </Button>
          </motion.div>
        </motion.div>
        <div className="flex flex-col items-center gap-4 sm:flex-row my-10">
          <motion.div
            className="w-full max-w-container relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img src={mainDashboard} alt="Main Dashboard" />
            <img src={mainMobile} alt="Main Mobile" className="w-[222px] absolute right-0 top-0" />
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}
