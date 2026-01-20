import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-accent/10 text-accent mb-6">
            <Mail className="h-8 w-8" />
          </div>

          {/* Content */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Stay in the Loop
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to get exclusive deals, flash sale alerts, and new
            arrivals straight to your inbox.
          </p>

          {/* Form */}
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                className="pl-11 h-12 rounded-xl border-2 focus:border-accent"
              />
            </div>
            <Button variant="default" size="lg" className="gap-2 shrink-0">
              Subscribe
              <Send className="h-4 w-4" />
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe
            anytime.
          </p>
        </div>
      </div>
    </section>
  );
};
