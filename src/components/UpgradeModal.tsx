import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  accountName: z.string().min(2, {
    message: "Account/Site name must be at least 2 characters.",
  }),
  jobTitle: z.string().min(2, {
    message: "Job title must be at least 2 characters.",
  }),
  moreInfo: z.string().optional(),
});

type UpgradeFormValues = z.infer<typeof formSchema>;

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UpgradeModal({ isOpen, onClose }: UpgradeModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<UpgradeFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      accountName: "",
      jobTitle: "",
      moreInfo: "",
    },
  });

  async function onSubmit(values: UpgradeFormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        body: JSON.stringify({
          formType: "upgrade",
          formData: values,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      onClose();
    } catch (error) {
      console.error(error);
      // You might want to show an error message to the user here
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[640px]">
        <DialogHeader>
          <DialogTitle>Upgrade to Optimize</DialogTitle>
          <DialogDescription>
            Take the next step towards smarter energy management
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
                      <Input placeholder="i.e Senior Engineer" {...field} />
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
              name="accountName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account/Site Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your existing PowerRadar account name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="moreInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your energy management needs (optional)"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-4 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Request Upgrade"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
