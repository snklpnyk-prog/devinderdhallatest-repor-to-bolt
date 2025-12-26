import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

interface AppointmentDialogProps {
  children: ReactNode;
}

const serviceOptions = [
  "Individual Counselling",
  "Couple & Relationship",
  "Stress, Anxiety & Depression",
  "Career Counselling",
  "Addiction Counselling",
  "Child & Adolescent Therapy",
  "Other",
];

export function AppointmentDialog({ children }: AppointmentDialogProps) {
  const [open, setOpen] = useState(false);
  const { mutate, isPending } = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    mutate(data, {
      onSuccess: () => {
        setOpen(false);
        form.reset();
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white/95 backdrop-blur-xl border-none shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-secondary">Book Your Session</DialogTitle>
          <DialogDescription>
            Take the first step towards better mental health. Fill out the form below and we will get back to you.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                {...form.register("name")}
                className="bg-background border-border focus:border-primary focus:ring-primary/20"
              />
              {form.formState.errors.name && (
                <p className="text-destructive text-xs">{form.formState.errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="+91 98765 43210"
                {...form.register("phone")}
                className="bg-background border-border focus:border-primary focus:ring-primary/20"
              />
              {form.formState.errors.phone && (
                <p className="text-destructive text-xs">{form.formState.errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...form.register("email")}
              className="bg-background border-border focus:border-primary focus:ring-primary/20"
            />
            {form.formState.errors.email && (
              <p className="text-destructive text-xs">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Service Required</Label>
            <Select onValueChange={(val) => form.setValue("serviceType", val)}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.formState.errors.serviceType && (
              <p className="text-destructive text-xs">
                {form.formState.errors.serviceType.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Tell us a bit about what you're going through..."
              className="h-24 bg-background border-border focus:border-primary focus:ring-primary/20"
              {...form.register("message")}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-6 rounded-xl shadow-lg shadow-secondary/20 mt-2"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
              </>
            ) : (
              "Confirm Booking"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
