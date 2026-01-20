import { Shield, Truck, RotateCcw, CreditCard, Headphones, Award } from "lucide-react";

const trustFeatures = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free delivery on orders over ৳5,000",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "7-day hassle-free return policy",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure payment gateway",
  },
  {
    icon: CreditCard,
    title: "EMI Available",
    description: "Easy monthly installments",
  },
  {
    icon: Award,
    title: "Genuine Products",
    description: "100% authentic guaranteed",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round the clock assistance",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Why Shop With Us?
          </h2>
          <p className="text-primary-foreground/70">
            Your trusted destination for quality tech products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-1 text-sm md:text-base">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-primary-foreground/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
