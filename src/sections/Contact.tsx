import { Button } from "@/components/ui/button"; // Asumsi pakai shadcn/ui atau button custom
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sendEmailSchema, type SendEmailSchemaValue } from "@/schema/sendEmailSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const formFields: { name: keyof SendEmailSchemaValue; label: string; placeholder: string }[] = [
  { name: "fullname", label: "Full Name", placeholder: "Your name..." },
  { name: "email", label: "Email Address", placeholder: "email@example.com" },
  { name: "message", label: "Message", placeholder: "Hi, I'm interested in..." },
];

export const ContactSection = () => {
  const [isDissabled, setIsDisabled] = useState<boolean>(false);

  const sendEmailForm = useForm<SendEmailSchemaValue>({
    resolver: zodResolver(sendEmailSchema),
  });

  const onSubmitSendEmailForm = async (data: SendEmailSchemaValue) => {
    setIsDisabled(true);
    const endpoint = import.meta.env.VITE_SEND_EMAIL_ENDPOINT;
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Your message has been sent.");
      } else {
        toast.error("Failed to send message. Please try again later.");
        console.error("Failed to send message:", response.statusText);
      }
    } catch (error) {
      console.log(error);
    } finally {
      sendEmailForm.reset({
        fullname: "",
        email: "",
        message: "",
      });
      setIsDisabled(false);
    }
  };

  return (
    <section className="section relative overflow-hidden" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* SISI KIRI: Pesan & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="header-section-title mb-3 md:mb-5 lg:mb-7">Let's Work Together</h2>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                I'm currently available for editorial, runway, and commercial bookings. Feel free to reach out
                for collaborations or inquiries.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="contact-list">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Email Me</p>
                  <a
                    href="mailto:maysithasucipto556@gmail.com"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    maysithasucipto556@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="contact-list">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Location</p>
                  <p className="font-medium">Jakarta, Indonesia (Available to Travel)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SISI KANAN: Form Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-secondary/30 backdrop-blur-[3px] p-6 md:p-8 lg:p-10 rounded-3xl border border-border shadow-md"
          >
            <Form {...sendEmailForm}>
              <form className="space-y-6" onSubmit={sendEmailForm.handleSubmit(onSubmitSendEmailForm)}>
                {formFields.map((fieldForm) => (
                  <FormField
                    key={fieldForm.name}
                    control={sendEmailForm.control}
                    name={fieldForm.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel />
                        <FormControl>
                          <Label className="text-[10px] uppercase tracking-[0.2em] ml-1 flex flex-col items-start gap-3">
                            {fieldForm.label}
                            <Input
                            autoComplete="off"
                            autoCorrect="off"
                            
                              {...field}
                              placeholder={fieldForm.placeholder}
                              className="border border-accent-foreground focus:border-primary invalid:border-destructive"
                            />
                          </Label>
                        </FormControl>
                        <FormDescription />
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                ))}
                <Button
                  type="submit"
                  disabled={isDissabled}
                  className="w-full py-6 rounded-full group flex justify-center items-center"
                >
                  {isDissabled ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
