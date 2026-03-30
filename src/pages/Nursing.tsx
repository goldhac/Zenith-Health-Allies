import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Stethoscope,
  CheckCircle,
  Phone,
  ArrowRight,
  Heart,
  Shield,
  Clock,
  Users,
  Star,
  ChevronDown,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { ScrollAnimate } from '@/hooks/useScrollAnimation';
import nurseImage from '@/assets/nurse-portrait.jpg';
import homeCareImage from '@/assets/home-care.jpg';
import { useState } from 'react';

const nursingServices = [
  {
    icon: Stethoscope,
    title: 'Skilled Nursing Assessments',
    description:
      "Comprehensive health evaluations, care plan development, and ongoing monitoring tailored to each patient's needs.",
  },
  {
    icon: Heart,
    title: 'Medication Management',
    description:
      'Safe administration and oversight of medication regimens for individuals in home and DDA agency settings.',
  },
  {
    icon: Shield,
    title: 'Wound Care & Treatment',
    description:
      'Specialized wound care protocols delivered by trained nurses under physician-approved treatment plans.',
  },
  {
    icon: Clock,
    title: 'Chronic Disease Management',
    description:
      'Ongoing support for patients living with diabetes, hypertension, COPD, and other long-term conditions.',
  },
  {
    icon: Users,
    title: 'DDA Agency Nursing Support',
    description:
      'Expert nursing consultation and staff training for Developmental Disabilities Administration provider agencies in Maryland.',
  },
  {
    icon: Heart,
    title: 'Post-Hospitalization Care',
    description:
      'Transitional nursing care to support safe recovery at home and reduce the risk of hospital readmission.',
  },
];

const trustPoints = [
  'Maryland-licensed registered nurses',
  'DDA-experienced nursing professionals',
  'Credential verification on every placement',
  'Coordinated with physicians and care teams',
  'Available for both home and agency settings',
  'Flexible scheduling to match patient needs',
];

const process = [
  {
    step: '01',
    title: 'Initial Consultation',
    description:
      "We start with a no-obligation call to understand your needs — whether you're a family, a DDA agency, or a healthcare facility.",
  },
  {
    step: '02',
    title: 'Nurse Matching',
    description:
      'We identify a licensed nurse whose experience and specialization match your specific care requirements.',
  },
  {
    step: '03',
    title: 'Care Plan Development',
    description:
      'Your assigned nurse creates a personalized care plan in coordination with physicians and family members.',
  },
  {
    step: '04',
    title: 'Ongoing Care & Monitoring',
    description:
      'Skilled nursing begins on your schedule. We check in regularly to ensure quality and adjust as needs evolve.',
  },
];

const faqs = [
  {
    question: 'What areas of Maryland do your nursing services cover?',
    answer:
      'We serve all areas throughout Maryland, including Columbia, Baltimore, Silver Spring, Rockville, and surrounding counties. Contact us to confirm availability in your specific location.',
  },
  {
    question: 'Do you provide nursing services for DDA provider agencies?',
    answer:
      'Yes. We specialize in nursing support for DDA (Developmental Disabilities Administration) agencies across Maryland. Our nurses have direct experience serving individuals with developmental disabilities and understand DDA compliance requirements.',
  },
  {
    question: 'Are your nurses licensed and credentialed in Maryland?',
    answer:
      'All nurses placed through Zenith Health Allies are Maryland-licensed and have undergone thorough credential verification, background checks, and competency assessments before beginning any assignment.',
  },
  {
    question: 'Can I request a specific nurse for ongoing care?',
    answer:
      "Yes. We encourage continuity of care whenever possible. Once a nurse has built a rapport with a patient or agency, we do our best to maintain that relationship for consistent, high-quality service.",
  },
  {
    question: 'What types of nursing services are available?',
    answer:
      'We provide skilled nursing assessments, medication management, wound care, chronic disease management, post-hospitalization transitional care, care plan development, and specialized DDA nursing support.',
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
        aria-expanded={open}
      >
        <span className="font-medium text-foreground pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-muted-foreground leading-relaxed text-sm border-t border-border pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function NursingPage() {
  return (
    <Layout>
      <Helmet>
        <title>Nursing Services in Maryland | Zenith Health Allies</title>
        <meta
          name="description"
          content="Expert home nursing and DDA nursing services throughout Maryland. Skilled nurses for medication management, wound care, and chronic disease support. Call (240) 278-1871."
        />
        <link rel="canonical" href="https://zenithhealthallies.org/nursing" />
        <meta property="og:title" content="Nursing Services in Maryland | Zenith Health Allies" />
        <meta
          property="og:description"
          content="Expert home nursing and DDA nursing services throughout Maryland. Skilled nurses available now. Call (240) 278-1871."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zenithhealthallies.org/nursing" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative py-24 md:py-32 bg-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-transparent to-accent/5" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimate animation="slide-left">
              <div>
                <span className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-up">
                  Maryland Nursing Services
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 leading-tight opacity-0 animate-fade-up stagger-1">
                  Expert Nursing Services in Maryland
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-4 opacity-0 animate-fade-up stagger-2">
                  Skilled, compassionate nursing care for individuals at home and DDA provider
                  agencies throughout Maryland — tailored to every patient's unique needs.
                </p>
                {/* Visible phone above fold */}
                <a
                  href="tel:+12402781871"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-lg mb-8 hover:underline opacity-0 animate-fade-up stagger-2"
                >
                  <Phone className="w-5 h-5" />
                  (240) 278-1871
                </a>
                <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up stagger-3">
                  <Button variant="default" size="lg" className="group" asChild>
                    <Link to="/contact?service=nursing">
                      Request a Nurse
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+12402781871">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollAnimate>

            <ScrollAnimate animation="slide-right">
              <div className="relative">
                <img
                  src={nurseImage}
                  alt="Licensed nurse providing home nursing care in Maryland"
                  className="rounded-3xl shadow-strong w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-5 rounded-2xl shadow-medium">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-serif text-xl text-foreground">Maryland</p>
                      <p className="text-sm text-muted-foreground">Statewide Coverage</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollAnimate>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Nursing Services
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                Comprehensive Nursing Care
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                From skilled assessments and medication management to specialized DDA support,
                we deliver clinical excellence in every care setting across Maryland.
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nursingServices.map((service, index) => (
              <ScrollAnimate key={index} delay={index * 80}>
                <div className="bg-card p-6 rounded-2xl shadow-soft border border-border/50 group hover:shadow-medium transition-all h-full">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE + TRUST POINTS ── */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimate animation="slide-left">
              <div>
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                  Who We Serve
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6 leading-tight">
                  Nursing Care for Individuals, Families & DDA Agencies
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Whether you're a family seeking skilled care for a loved one at home, or a DDA
                  provider agency in Maryland needing reliable nursing consultation and staff
                  support — Zenith Health Allies is your trusted partner.
                </p>
                <ul className="space-y-3">
                  {[
                    'Individuals requiring skilled home nursing',
                    'Families supporting a loved one with complex care needs',
                    'DDA provider agencies needing nursing oversight',
                    'Patients transitioning from hospital to home',
                    'Adults managing chronic conditions long-term',
                    'Healthcare facilities requiring nursing expertise',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimate>

            <ScrollAnimate animation="slide-right">
              <div>
                <img
                  src={homeCareImage}
                  alt="Home nursing care in Maryland"
                  className="rounded-2xl shadow-medium w-full h-72 sm:h-80 object-cover mb-8"
                />
                <div className="bg-card p-6 rounded-2xl shadow-soft">
                  <h3 className="font-serif text-xl text-foreground mb-4">Why Families Trust Us</h3>
                  <ul className="space-y-2">
                    {trustPoints.map((point, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollAnimate>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
                How It Works
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                Getting Started Is Simple
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                From your first call to ongoing care, we keep the process straightforward and transparent.
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <ScrollAnimate key={index} delay={index * 100}>
                <div className="relative bg-card p-6 rounded-2xl shadow-soft border border-border/50 h-full">
                  <span className="text-5xl font-serif text-primary/10 font-bold leading-none mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4">
          <ScrollAnimate>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Frequently Asked Questions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
                Common Questions About Our Nursing Services
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Can't find your answer here? Call us directly at{' '}
                <a href="tel:+12402781871" className="text-primary hover:underline font-medium">
                  (240) 278-1871
                </a>
                .
              </p>
            </div>
          </ScrollAnimate>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <ScrollAnimate key={index} delay={index * 60}>
                <FaqItem question={faq.question} answer={faq.answer} />
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-20 md:py-28 gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimate>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-secondary-foreground mb-6">
              Ready to Request a Nurse in Maryland?
            </h2>
            <p className="text-secondary-foreground/85 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-light">
              Contact our team today to discuss your care needs. We match you with the right
              licensed nurse, fast — serving all areas of Maryland including Columbia, Baltimore,
              and beyond.
            </p>
            <a
              href="tel:+12402781871"
              className="inline-flex items-center gap-2 text-secondary-foreground font-semibold text-xl mb-10 hover:underline"
            >
              <Phone className="w-5 h-5" />
              (240) 278-1871
            </a>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-10" asChild>
                <Link to="/contact?service=nursing">
                  Request Nursing Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" className="px-10" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
            <p className="text-secondary-foreground/60 text-sm mt-8">
              Also explore:{' '}
              <Link to="/staffing" className="underline hover:text-secondary-foreground">
                Healthcare Staffing
              </Link>{' '}
              ·{' '}
              <Link to="/training" className="underline hover:text-secondary-foreground">
                Training Classes
              </Link>{' '}
              ·{' '}
              <Link to="/about" className="underline hover:text-secondary-foreground">
                About Us
              </Link>
            </p>
          </ScrollAnimate>
        </div>
      </section>
    </Layout>
  );
}
