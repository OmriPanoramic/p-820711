import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Stars from "./Stars";
import { FullStory } from "@fullstory/browser";

// Define the form schema with Zod
const demoFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  jobTitle: z.string().min(2, {
    message: "Job title must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  companyName: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
});

type DemoFormValues = z.infer<typeof demoFormSchema>;

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<DemoFormValues>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      fullName: "",
      jobTitle: "",
      phone: "",
      email: "",
      companyName: "",
    },
  });

  const onSubmit = async (data: DemoFormValues) => {
    FullStory("setIdentity", {
      anonymous: true,
      properties: {
        email: data.email,
        displayName: data.fullName,
        company: data.companyName,
        jobTitle: data.jobTitle,
        phone: data.phone,
      },
    });

    setIsSubmitting(true);
    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        body: JSON.stringify({
          formType: "demo",
          formData: data,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setShowSuccess(true);
    } catch (error) {
      console.error(error);
      // You might want to show an error message to the user here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[640px] overflow-y-auto max-h-[90vh]">
        <AnimatePresence mode="wait">
          {showSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center py-8 text-center"
            >
              <Stars />
              <motion.h2
                className="mb-2 text-2xl font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Demo request locked in!
              </motion.h2>
              <motion.p
                className="mb-6 text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                We'll schedule your demo shortly and reveal what Optimize can do
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  data-fs-track="got-it-button-demo-modal"
                  onClick={() => {
                    setShowSuccess(false);
                    onClose();
                  }}
                >
                  Got it
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col overflow-y-auto"
            >
              <DialogHeader className="mb-6">
                <DialogTitle>Book a Demo</DialogTitle>
                <DialogDescription>
                  Get in touch with your support provider to see how Panoramic Optimize can transform your energy future
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col gap-4"
                >
                  <div className="flex grow flex-col gap-4 sm:flex-row">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem className="grow">
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem className="grow">
                          <FormLabel>Job title</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="i.e Senior Engineer"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex grow flex-col gap-4 sm:flex-row">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="grow">
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 000-0000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="grow">
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john.smith@company.com"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
                    <Button type="button" variant="outline" onClick={onClose} data-fs-track="cancel-demo-button" className="w-full sm:w-auto">
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting} data-fs-track="schedule-demo-button" className="w-full sm:w-auto">
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
