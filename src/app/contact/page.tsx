'use client';

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/utilities/ScrollToTop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
const contactSchema = z.object({
  name: z.string().min(2, "Le nom complet doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  company: z.string().min(2, "Le nom de l'entreprise doit contenir au moins 2 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "Vous devez accepter les conditions"
  })
});
type ContactFormData = z.infer<typeof contactSchema>;
const Contact = () => {
  const {
    toast
  } = useToast();
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    setValue
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });
  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les 24 heures."
    });
  };
  return <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 flex items-center justify-center">
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in duration-1000">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Contactez{" "}
                <span className="text-primary">
                  Notre Équipe
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Nous sommes là pour répondre à toutes vos questions et vous accompagner dans votre projet
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Contact Form */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="text-center space-y-2">
                  <CardTitle className="text-3xl">Envoyez-nous un message</CardTitle>
                  <p className="text-muted-foreground">Nous vous répondrons dans les meilleurs délais.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input id="name" placeholder="Jean Dupont" {...register("name")} className={errors.name ? "border-destructive" : ""} />
                      {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="jean.dupont@example.com" {...register("email")} className={errors.email ? "border-destructive" : ""} />
                        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input id="phone" type="tel" placeholder="+33 6 12 34 56 78" {...register("phone")} className={errors.phone ? "border-destructive" : ""} />
                        {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Entreprise *</Label>
                      <Input id="company" placeholder="Nom de votre entreprise" {...register("company")} className={errors.company ? "border-destructive" : ""} />
                      {errors.company && <p className="text-sm text-destructive">{errors.company.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" rows={6} placeholder="Décrivez-nous votre projet..." {...register("message")} className={errors.message ? "border-destructive" : ""} />
                      {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox id="acceptTerms" onCheckedChange={checked => setValue("acceptTerms", checked as boolean)} />
                      <Label htmlFor="acceptTerms" className="text-sm leading-relaxed cursor-pointer">
                        J'accepte que mes données soient traitées conformément à la politique de confidentialité et au RGPD *
                      </Label>
                    </div>
                    {errors.acceptTerms && <p className="text-sm text-destructive">{errors.acceptTerms.message}</p>}

                    <Button type="submit" size="lg" className="w-full bg-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
                      <Send className="mr-2 w-4 h-4" aria-hidden="true" />
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>;
};
export default Contact;