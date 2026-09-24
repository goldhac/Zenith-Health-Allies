import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import homeCareImage from '@/assets/home-care.jpg';

const features = [
  'Compassionate and personalized support',
  'Expert care ensuring comfort and well-being',
  'Services tailored to your unique needs',
  'Holistic approach to health',
  'Experienced and dedicated team',
];

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-medium">
              <img
                src={homeCareImage}
                alt="Home healthcare services"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Decorative Elements - hidden on mobile */}
            <div className="hidden md:block absolute -top-6 -left-6 w-32 h-32 gradient-hero rounded-2xl -z-10 opacity-20" />
            <div className="hidden md:block absolute -bottom-6 -right-6 w-40 h-40 gradient-warm rounded-2xl -z-10 opacity-20" />

            {/* Floating Card */}
            <div className="absolute -bottom-4 right-4 md:-bottom-8 md:-right-8 bg-card p-4 md:p-6 rounded-xl md:rounded-2xl shadow-medium z-20 max-w-[200px] md:max-w-[240px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 gradient-warm rounded-xl flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-base md:text-lg">10+</span>
                </div>
                <div>
                  <p className="font-serif text-base md:text-lg text-foreground">Years</p>
                  <p className="text-xs md:text-sm text-muted-foreground">of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              About Zenith Health Allies
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 md:mb-6 leading-tight">
              Start Your Home Health Care Journey With Us
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              At Zenith Health Allies, we invite you to commence your healthcare,
              training, and staffing journey with a commitment to compassionate and personalized
              support. Our dedicated team stands ready to guide you through a pathway of expert care,
              ensuring comfort and well-being in the familiarity of your home.
            </p>

            {/* Features List */}
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
