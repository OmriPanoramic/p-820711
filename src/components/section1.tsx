import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

export function Section1() {
  return (
    <Card className="w-full bg-background border-none shadow-none">
      <CardContent className="p-0">
        <motion.div
          className="sm:max-w-3xl max-w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-h1 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The next step in your energy management journey
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-6"
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
            className="flex flex-col sm:flex-row items-center gap-4"
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
      </CardContent>
    </Card>
  );
}
