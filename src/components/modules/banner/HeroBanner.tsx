"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Zap, Truck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "./Banner.module.css";
const bannerSlides = [
  {
    id: 1,
    title: "Flash Sale",
    subtitle: "Up to 50% Off",
    description: "Premium smartwatches & accessories",
    cta: "Shop Now",
    highlight: "Limited Time",
    image:
      "https://res.cloudinary.com/dvc8ipxdj/image/upload/v1764680538/yp8au72gpkl-1764680506246-images-s3-silver-001-500x500.webp",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Wireless Earbuds",
    description: "Experience true wireless freedom",
    cta: "Explore",
    highlight: "Just Launched",
    image:
      "https://res.cloudinary.com/dvc8ipxdj/image/upload/v1764680538/uj0livrq1wn-1764680506246-images-s3-05-500x500.webp",
  },
  {
    id: 3,
    title: "New Arrivals",
    subtitle: "Wireless Earbuds",
    description: "Experience true wireless freedom",
    cta: "Explore",
    highlight: "Just Launched",
    image:
      "https://res.cloudinary.com/dvc8ipxdj/image/upload/v1764680538/uj0livrq1wn-1764680506246-images-s3-05-500x500.webp",
  },
];

const features = [
  { icon: Truck, text: "Free Delivery", sub: "Over ৳5000" },
  { icon: Clock, text: "24/7 Support", sub: "Always Here" },
  { icon: Zap, text: "Fast Shipping", sub: "Same Day" },
];

export const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  const slide = bannerSlides[currentSlide];

  return (
    <section className="relative my-8">
      {/* Main Banner */}
      <div
        className={`${styles.bgrad} rounded-t-3xl flex-1 overflow-hidden bg-[#10192D] px-4`}
      >
        <div className="container py-8 md:py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[400px] md:min-h-[450px]">
            {/* Content */}
            <div className="space-y-6 text-center lg:text-left animate-fade-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <Zap className="h-4 w-4 text-accent animate-pulse text-orange-400" />
                <span className="text-sm font-semibold text-accent text-orange-400">
                  {slide.highlight}
                </span>
              </div>

              {/* Titles */}
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient text-orange-400">
                  {slide.subtitle}
                </p>
              </div>

              <p className="text-lg text-white/70 max-w-md mx-auto lg:mx-0">
                {slide.description}
              </p>

              {/* Countdown */}
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-white/60 text-sm">Ends in:</span>
                <div className="flex gap-2">
                  {[
                    { value: timeLeft.hours, label: "H" },
                    { value: timeLeft.minutes, label: "M" },
                    { value: timeLeft.seconds, label: "S" },
                  ].map((unit, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <span className="bg-white/10 backdrop-blur-sm text-white font-bold text-lg px-3 py-1.5 rounded-lg min-w-[48px] text-center animate-countdown">
                        {String(unit.value).padStart(2, "0")}
                      </span>
                      <span className="text-white/40 text-xs">
                        {unit.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ">
                <Button
                  variant="default"
                  size="lg"
                  className="group bg-orange-400"
                >
                  {slide.cta}
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="default" size="lg" className="text-orange-400 bg-gray-800">
                  View All Deals
                </Button>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative animate-float">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-75" />

                <img
                  src={slide.image}
                  alt={slide.title}
                  className="relative z-10 w-64 md:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl"
                />

                {/* Price Tag */}
                <div className="absolute -right-4 top-1/4 glass-dark px-4 py-2 rounded-xl animate-bounce-subtle">
                  <p className="text-accent font-bold text-lg">৳3,353</p>
                  <p className="text-white/50 text-xs line-through">৳4,790</p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-8 bg-accent" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-background border-b">
        <div className="container p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent bg-orange-400">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {feature.text}
                  </p>
                  <p className="text-xs text-muted-foreground">{feature.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
