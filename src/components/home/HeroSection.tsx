import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroImage from '@/assets/hero-healthcare.jpg';
import nurseImage from '@/assets/nurse-portrait.jpg';
import homeCareImage from '@/assets/home-care.jpg';

const heroSlides = [
  {
    image: heroImage,
    title: 'Compassionate Care',
    subtitle: 'For Your Loved Ones',
    description: 'Premier nursing services and personalized healthcare solutions for families throughout Maryland.',
  },
  {
    image: nurseImage,
    title: 'Expert Training',
    subtitle: 'For Healthcare Careers',
    description: 'Comprehensive certification programs to launch or advance your healthcare career.',
  },
  {
    image: homeCareImage,
    title: 'Professional Staffing',
    subtitle: 'For Healthcare Facilities',
    description: 'Qualified healthcare professionals ready to support your organization\'s needs.',
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setIsTransitioning(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-cream">
      {/* Background Images with Ken Burns effect */}
      {heroSlides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={s.image}
              alt={s.title}
              className={`w-full h-full object-cover ${index === currentSlide ? 'animate-ken-burns' : ''
                }`}
            />
          </div>
          {/* Light overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/85 to-cream/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream/40 via-transparent to-transparent" />
        </div>
      ))}

      {/* Decorative Elements */}
      <div className="hidden lg:block absolute top-24 right-24 w-80 h-80 border border-primary/10 rounded-full animate-pulse-soft" />
      <div className="hidden lg:block absolute bottom-32 right-48 w-56 h-56 border border-accent/10 rounded-full" />

      <div className="container mx-auto px-4 relative z-10 py-20 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Slide Indicators */}
            <div className="flex gap-3 mb-8 opacity-0 animate-fade-up">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentSlide(index);
                      setIsTransitioning(false);
                    }, 300);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${index === currentSlide
                      ? 'w-12 bg-primary'
                      : 'w-6 bg-foreground/20 hover:bg-foreground/30'
                    }`}
                />
              ))}
            </div>

            {/* Heading */}
            <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-2 opacity-0 animate-fade-up stagger-1">
                {slide.title}
              </h1>
              <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] mb-8 opacity-0 animate-fade-up stagger-2">
                {slide.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className={`text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl opacity-0 animate-fade-up stagger-3 transition-all duration-500 ${isTransitioning ? 'opacity-0' : ''}`}>
              {slide.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-up stagger-4">
              <Button variant="default" size="lg" className="w-full sm:w-auto text-base px-8 group" asChild>
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8" asChild>
                <Link to="/contact">
                  <Play className="w-4 h-4 mr-2" />
                  Book Consultation
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 opacity-0 animate-fade-up stagger-5">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-secondary border-2 border-cream flex items-center justify-center">
                      <span className="text-xs font-medium text-foreground">{i}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">1000+ Families</p>
                  <p className="text-xs text-muted-foreground">Trust our care</p>
                </div>
              </div>
              <div className="h-10 w-px bg-border hidden sm:block" />
              <div>
                <p className="text-sm font-medium text-foreground">24/7 Support</p>
                <p className="text-xs text-muted-foreground">Always available</p>
              </div>
              <div className="h-10 w-px bg-border hidden sm:block" />
              <div>
                <p className="text-sm font-medium text-foreground">Maryland</p>
                <p className="text-xs text-muted-foreground">Statewide coverage</p>
              </div>
            </div>
          </div>

          {/* Right side - Feature card (visible on lg+) */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Floating stats card */}
              <div className="absolute -top-8 -left-8 bg-card p-6 rounded-2xl shadow-medium z-10 opacity-0 animate-fade-up stagger-3">
                <p className="text-4xl font-serif text-primary mb-1">10+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>

              {/* Main image card */}
              <div className="relative rounded-3xl overflow-hidden shadow-strong">
                <img
                  src={heroSlides[(currentSlide + 1) % heroSlides.length].image}
                  alt="Healthcare"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-accent-foreground/80 text-sm mb-2">Next</p>
                  <p className="text-accent-foreground font-serif text-2xl">
                    {heroSlides[(currentSlide + 1) % heroSlides.length].title}
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
