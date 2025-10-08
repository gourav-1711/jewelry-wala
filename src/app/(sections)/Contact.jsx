"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91-6378643867",
      subContent: "Mon-Fri, 9am-6pm EST",
      color: "bg-amber-50 text-amber-600",
      href: "tel:+916378643867",
    },
    {
      icon: Mail,
      title: "Email",
      content: "jewellerywalaonline@gmail.com",
      subContent: "We'll respond within 24 hours",
      color: "bg-yellow-50 text-yellow-600",
      href: "mailto:jewellerywalaonline@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Main Jhalamand Circle Jodhpur",
      subContent: "Jodhpur,Rajasthan",
      color: "bg-orange-50 text-orange-600",
      href: "https://maps.google.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <img
            src="/images/contact.jpg"
            alt="Contact background"
            className="absolute inset-0 w-full h-full object-contain md:object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[georgia] text-white mb-6 animate-fadeIn">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl font-serif text-gray-200 leading-relaxed max-w-2xl mx-auto">
              We're here to help. Please reach out with any questions or concerns.
              We will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>


      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none shadow-lg"
              >
                <CardContent className="p-6">
                  <a
                    href={info.href}
                    className="flex items-start gap-4"
                    target={info.icon === MapPin ? "_blank" : undefined}
                    rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                  >
                    <div
                      className={`${info.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                        {info.title}
                      </h3>
                      <p className="text-gray-700 font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        {info.icon === Phone && <Clock className="w-3 h-3" />}
                        {info.subContent}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you shortly.
                  </p>
                </div>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-fadeIn">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-800 text-sm">
                      Thank you! Your message has been sent successfully. We'll
                      respond within 24 hours.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="h-11 border-gray-200 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Your Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="h-11 border-gray-200 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-700 font-medium">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter the subject"
                      className="h-11 border-gray-200 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      rows={6}
                      className="border-gray-200 focus:border-amber-500 focus:ring-amber-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full md:w-auto bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Submit Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
