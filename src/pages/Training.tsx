import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  CheckCircle,
  Phone,
  ArrowRight,
  ExternalLink,
  Clock,
  ChevronDown,
  Star,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { ScrollAnimate } from '@/hooks/useScrollAnimation';
import trainingImage from '@/assets/training-class.jpg';
import nurseImage from '@/assets/nurse-portrait.jpg';
import { useState } from 'react';

const LMS_URL = 'https://www.zenithmastery.org/';

const programs = [
  {
    title: 'Home Health Aide (HHA)',
    description:
      'Comprehensive training for entry-level healthcare professionals providing in-home care to individuals with disabilities and the elderly.',
    duration: '75 Hours',
    certification: 'State Certified',
    highlight: true,
  },
  {
    title: 'Certified Nursing Assistant (CNA)',
    description:
      'Prepare for a rewarding nursing career assisting patients with daily activities, basic care, and clinical observation.',
    duration: '120 Hours',
    certification: 'State Certified',
    highlight: false,
  },
  {
    title: 'CPR & First Aid',
    description:
      'Life-saving skills certification for healthcare professionals and non-healthcare individuals. AHA-approved curriculum.',
    duration: '8 Hours',
    certification: 'AHA Certified',
    highlight: false,
  },
  {
    title: 'Medication Technician',
    description:
      'Learn safe medication administration techniques, documentation procedures, and safety protocols for assisted-living settings.',
    duration: '16 Hours',
    certification: 'State Certified',
    highlight: false,
  },
];

const benefits = [
  {
    icon: GraduationCap,
    title: 'Expert Instructors',
    description: 'Learn from licensed healthcare professionals with real-world clinical experience.',
  },
  {
    icon: Clock,
    title: 'Flexible Schedules',
    description: 'Day, evening, and weekend classes available to fit your work and life commitments.',
  },
  {
    icon: Award,
    title: 'State-Approved Programs',
    description: 'All certifications are Maryland state-approved and nationally recognized.',
  },
  {
    icon: Users,
    title: 'Job Placement Support',
    description: 'Career guidance and connections to Maryland healthcare employers after graduation.',
  },
  {
    icon: BookOpen,
    title: 'Hands-On Training',
    description: 'Practical, skills-based learning so you can apply what you know from day one.',
  },
  {
    icon: Star,
    title: '500+ Graduates',
    description: 'A proven track record of preparing healthcare professionals across Maryland.',
  },
];

const enrollmentSteps = [
  {
    step: '01',
    title: 'Choose Your Program',
    description:
      'Browse our full course catalog on the Zenith Mastery Learning Portal and select the certification that fits your career goal.',
  },
  {
    step: '02',
    title: 'Register Online',
    description:
      'Complete your registration through the online portal. Pick a schedule that works for you — day, evening, or weekend.',
  },
  {
    step: '03',
    title: 'Attend & Learn',
    description:
      'Attend your in-person or blended-learning sessions led by experienced instructors. Gain hands-on skills and clinical knowledge.',
  },
  {
    step: '04',
    title: 'Get Certified & Hired',
    description:
      'Pass your certification exam, receive your credentials, and tap into our job placement network across Maryland healthcare facilities.',
  },
];

const faqs = [
  {
    question: 'What healthcare training classes do you offer in Maryland?',
    answer:
      'We offer Home Health Aide (HHA), Certified Nursing Assistant (CNA), CPR & First Aid, and Medication Technician training. All programs are state-approved and designed for aspiring or advancing healthcare professionals in Maryland.',
  },
  {
    question: 'Are your training programs approved by the State of Maryland?',
    answer:
      'Yes. Our HHA, CNA, and Medication Technician programs are approved by the Maryland Department of Health. Our CPR program follows the American Heart Association (AHA) curriculum.',
  },
  {
    question: 'How do I enroll in a training class?',
    answer:
      "You can enroll directly through our online Learning Management System at zenithmastery.org. You'll find the full course catalog, available schedules, and registration details there. You can also contact us at (240) 278-1871 for assistance.",
  },
  {
    question: 'How long does each training program take?',
    answer:
      'It depends on the program. CPR & First Aid is 8 hours. Medication Technician is 16 hours. Home Health Aide (HHA) is 75 hours and CNA is 120 hours. All are designed to fit into working schedules.',
  },
  {
    question: 'Do you offer CPR training in Maryland for non-healthcare workers?',
    answer:
      "Yes. Our CPR & First Aid certification is open to both healthcare and non-healthcare professionals. It's ideal for teachers, coaches, parents, and anyone who wants life-saving skills.",
  },
  {
    question: 'Will Zenith help me find a job after I complete training?',
    answer:
      'Yes. We provide job placement support and connect graduates with Maryland healthcare employers. Many of our graduates go on to work directly with Zenith Health Allies or partnered facilities.',
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

export default function TrainingPage() {
  return (
    <Layout>
      <Helmet>
        <title>Healthcare Training Classes Maryland | Zenith Health Allies</title>
        <meta
          name="description"
          content="State-approved HHA, CNA, CPR, and Medication Technician training classes in Maryland. Flexible schedules, expert instructors. Enroll today and launch your healthcare career."
        />
        <link rel="canonical" href="https://zenithhealthallies.org/training" />
        <meta
          property="og:title"
          content="Healthcare Training Classes Maryland | Zenith Health Allies"
        />
        <meta
          property="og:description"
          content="State-approved HHA, CNA, CPR & First Aid, and Medication Technician classes in Maryland. Enroll now at Zenith Health Allies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zenithhealthallies.org/training" />
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
                  Maryland Healthcare Training
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 leading-tight opacity-0 animate-fade-up stagger-1">
                  Healthcare Training & Certification Classes in Maryland
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-2 opacity-0 animate-fade-up stagger-2">
                  Launch or advance your healthcare career with state-approved HHA, CNA, CPR, and
                  Medication Technician programs — taught by experienced Maryland healthcare professionals.
                </p>
                <p className="text-muted-foreground text-sm mb-4 opacity-0 animate-fade-up stagger-2">
                  Serving Columbia, Baltimore, Silver Spring, and communities throughout Maryland.
                </p>
                <a
                  href="tel:+12402781871"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-lg mb-8 hover:underline opacity-0 animate-fade-up stagger-2"
                >
                  <Phone className="w-5 h-5" />
                  (240) 278-1871
                </a>
                <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up stagger-3">
                  <Button variant="default" size="lg" className="group" asChild>
                    <a href={LMS_URL} target="_blank" rel="noopener noreferrer">
                      Enroll Now
                      <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact?service=training">Request Info</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimate>

            <ScrollAnimate animation="slide-right">
              <div className="relative">
                <img
                  src={trainingImage}
                  alt="Healthcare training class in Maryland"
                  className="rounded-3xl shadow-strong w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-5 rounded-2xl shadow-medium">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-serif text-xl text-foreground">500+</p>
                      <p className="text-sm text-muted-foreground">Certified Graduates</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATION PROGRAMS ── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollAnimate>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Certification Programs
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                State-Approved Training Courses
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Every program is taught by licensed professionals and recognized by Maryland state
                agencies and national healthcare organizations.
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {programs.map((program, index) => (
              <ScrollAnimate key={index} delay={index * 100}>
                <div
                  className={`p-6 rounded-2xl border h-full flex flex-col group hover:shadow-medium transition-all ${
                    program.highlight
                      ? 'bg-primary text-primary-foreground border-primary shadow-medium'
                      : 'bg-card border-border/50 shadow-soft'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        program.highlight
                          ? 'bg-primary-foreground/20 text-primary-foreground'
                          : 'bg-teal/10 text-teal'
                      }`}
                    >
                      {program.duration}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        program.highlight
                          ? 'bg-primary-foreground/20 text-primary-foreground'
                          : 'bg-accent/10 text-accent'
                      }`}
                    >
                      {program.certification}
                    </span>
                  </div>
                  <h3
                    className={`font-serif text-xl mb-3 ${
                      program.highlight ? 'text-primary-foreground' : 'text-foreground'
                    }`}
                  >
                    {program.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed flex-1 ${
                      program.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}
                  >
                    {program.description}
                  </p>
                  <Button
                    variant={program.highlight ? 'accent' : 'ghost'}
                    size="sm"
                    className={`mt-4 group/btn ${program.highlight ? '' : 'p-0 h-auto'}`}
                    asChild
                  >
                    <a href={LMS_URL} target="_blank" rel="noopener noreferrer">
                      View Course
                      <ExternalLink className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          {/* LMS CTA Banner */}
          <ScrollAnimate>
            <div className="bg-primary p-8 md:p-12 rounded-3xl text-center">
              <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground mb-4">
                Ready to Start Your Healthcare Journey?
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                Access our complete course catalog, choose your schedule, and register online
                through the Zenith Mastery Learning Portal.
              </p>
              <Button variant="accent" size="lg" className="group" asChild>
                <a href={LMS_URL} target="_blank" rel="noopener noreferrer">
                  Access Training Portal
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* ── WHY TRAIN WITH US ── */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollAnimate>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                Why Train With Zenith Health Allies?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                We don't just hand out certifications — we prepare you for a real healthcare career
                in Maryland.
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollAnimate key={index} delay={index * 80}>
                <div className="bg-card p-6 md:p-8 rounded-2xl shadow-soft text-center group hover:shadow-medium transition-all h-full">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform bg-primary/10 text-primary">
                    <benefit.icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-base md:text-lg text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW ENROLLMENT WORKS ── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollAnimate>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
                How Enrollment Works
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
                From Registration to Certification in Four Steps
              </h2>
            </div>
          </ScrollAnimate>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enrollmentSteps.map((step, index) => (
              <ScrollAnimate key={index} delay={index * 100}>
                <div className="bg-card p-6 rounded-2xl shadow-soft border border-border/50 h-full">
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
                Questions About Our Training Programs
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Have a question not listed here? Call{' '}
                <a href="tel:+12402781871" className="text-primary hover:underline font-medium">
                  (240) 278-1871
                </a>{' '}
                or{' '}
                <Link to="/contact?service=training" className="text-primary hover:underline font-medium">
                  send us a message
                </Link>
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
              Enroll in a Training Class Today
            </h2>
            <p className="text-secondary-foreground/85 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-light">
              State-certified healthcare training in Maryland. Flexible schedules, experienced
              instructors, and career support from day one. Start your enrollment online or contact
              us for guidance.
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
                <a href={LMS_URL} target="_blank" rel="noopener noreferrer">
                  Enroll Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="glass" size="lg" className="px-10" asChild>
                <Link to="/contact?service=training">Ask a Question</Link>
              </Button>
            </div>
            <p className="text-secondary-foreground/60 text-sm mt-8">
              Also explore:{' '}
              <Link to="/nursing" className="underline hover:text-secondary-foreground">
                Nursing Services
              </Link>{' '}
              ·{' '}
              <Link to="/staffing" className="underline hover:text-secondary-foreground">
                Healthcare Staffing
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
