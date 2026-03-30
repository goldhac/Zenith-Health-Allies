import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Users,
  Building2,
  CheckCircle,
  Clock,
  Shield,
  Phone,
  ArrowRight,
  Star,
  ChevronDown,
  Briefcase,
} from 'lucide-react';
import nurseImage from '@/assets/nurse-portrait.jpg';
import homeCareImage from '@/assets/home-care.jpg';
import { ScrollAnimate } from '@/hooks/useScrollAnimation';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

const staffingTypes = [
  {
    icon: Clock,
    title: 'Temporary Staffing',
    description:
      'Short-term healthcare professionals to cover immediate needs, vacations, sudden leaves of absence, or seasonal demand spikes.',
  },
  {
    icon: Briefcase,
    title: 'Permanent Placement',
    description:
      'Find the right long-term addition to your healthcare team with our thorough screening, credential verification, and matching process.',
  },
  {
    icon: Users,
    title: 'Contract Staffing',
    description:
      'Flexible contract arrangements for project-based needs, facility expansions, or ongoing supplemental staffing requirements.',
  },
  {
    icon: Star,
    title: 'Travel Nursing',
    description:
      'Experienced nurses available for travel assignments and extended placements throughout Maryland and surrounding areas.',
  },
];

const professionalsPlaced = [
  'Registered Nurses (RN)',
  'Licensed Practical Nurses (LPN)',
  'Certified Nursing Assistants (CNA)',
  'Home Health Aides (HHA)',
  'Medication Technicians',
  'Direct Support Professionals (DSP)',
  'Healthcare Administrators',
  'DDA Support Staff',
];

const whyUs = [
  {
    icon: Shield,
    title: 'Thorough Credential Verification',
    description:
      'Every professional is license-verified, background-checked, and competency-assessed before placement.',
  },
  {
    icon: Clock,
    title: 'Rapid Response',
    description:
      'We understand staffing emergencies. Our team works quickly to fill urgent gaps without compromising quality.',
  },
  {
    icon: Building2,
    title: 'Maryland Healthcare Network',
    description:
      'Access to a deep pool of pre-screened healthcare talent across all specialties, built over years in the Maryland market.',
  },
  {
    icon: Users,
    title: 'Dedicated Account Management',
    description:
      'A single point of contact who knows your facility, your standards, and your culture — for every placement.',
  },
];

const process = [
  {
    step: '01',
    title: 'Submit Your Request',
    description:
      'Tell us your staffing needs — specialty, schedule, duration, and any specific requirements. A consultant will respond within hours.',
  },
  {
    step: '02',
    title: 'Candidate Matching',
    description:
      'We search our vetted network to identify qualified candidates that match your clinical and cultural requirements.',
  },
  {
    step: '03',
    title: 'Credential Review',
    description:
      'Licenses, certifications, and background checks are confirmed before any professional is presented to your facility.',
  },
  {
    step: '04',
    title: 'Placement & Support',
    description:
      'Your new staff member begins on your schedule. We stay involved to ensure the placement is working well for everyone.',
  },
];

const faqs = [
  {
    question: 'What types of healthcare professionals do you staff in Maryland?',
    answer:
      'We place Registered Nurses (RN), Licensed Practical Nurses (LPN), Certified Nursing Assistants (CNA), Home Health Aides (HHA), Medication Technicians, Direct Support Professionals (DSP), and other allied health professionals throughout Maryland.',
  },
  {
    question: 'How quickly can Zenith fill a staffing request?',
    answer:
      'We prioritize urgent requests and can often provide qualified professionals within 24–48 hours for temporary positions. Permanent placements typically take longer due to thorough screening, but we work as efficiently as possible without sacrificing quality.',
  },
  {
    question: 'Do you staff for DDA provider agencies in Maryland?',
    answer:
      'Yes. We have deep experience staffing DDA provider agencies with Direct Support Professionals, nurses, and other qualified staff who understand the specific requirements and compliance standards of serving individuals with developmental disabilities.',
  },
  {
    question: 'How do you verify the credentials of healthcare staff?',
    answer:
      'Every professional in our network goes through a thorough credentialing process — including license verification with the Maryland Board of Nursing, criminal background checks, employment history checks, and competency assessments before any placement.',
  },
  {
    question: 'Do you offer both temporary and permanent staffing solutions?',
    answer:
      'Yes. We offer temporary, permanent, contract, and travel nursing placements. Whether you need a nurse for a single shift or a permanent full-time hire, we have flexible options designed for Maryland healthcare facilities.',
  },
  {
    question: 'What areas of Maryland do you serve?',
    answer:
      'We serve healthcare facilities throughout Maryland, including Columbia, Baltimore, Silver Spring, Rockville, Annapolis, and surrounding areas. Contact us to confirm availability for your specific location.',
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

export default function StaffingPage() {
  return (
    <Layout>
      <Helmet>
        <title>Healthcare Staffing Agency Maryland | Zenith Health Allies</title>
        <meta
          name="description"
          content="Trusted healthcare staffing agency serving Maryland facilities. Temporary, permanent, and contract nursing staff — thoroughly vetted and credentialed. Call (240) 278-1871."
        />
        <link rel="canonical" href="https://zenithhealthallies.org/staffing" />
        <meta
          property="og:title"
          content="Healthcare Staffing Agency Maryland | Zenith Health Allies"
        />
        <meta
          property="og:description"
          content="Qualified, credentialed healthcare professionals for Maryland facilities. Temporary, contract, and permanent staffing solutions. Call (240) 278-1871."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zenithhealthallies.org/staffing" />
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
                  Maryland Healthcare Staffing
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 leading-tight opacity-0 animate-fade-up stagger-1">
                  Healthcare Staffing Solutions in Maryland
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-4 opacity-0 animate-fade-up stagger-2">
                  We connect Maryland healthcare facilities with thoroughly vetted, credentialed
                  nursing and allied health professionals — for temporary, contract, or permanent
                  placements.
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
                    <Link to="/contact?service=staffing">
                      Request Staff Now
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
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={nurseImage}
                  alt="Healthcare professional staffed by Zenith Health Allies"
                  className="rounded-2xl shadow-medium h-64 sm:h-72 md:h-80 object-cover w-full"
                />
                <img
                  src={homeCareImage}
                  alt="Maryland healthcare facility staffing"
                  className="rounded-2xl shadow-medium h-64 sm:h-72 md:h-80 object-cover mt-8 w-full"
                />
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* ── STAFFING SERVICES WE OFFER ── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollAnimate>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Staffing Services We Offer
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                Flexible Staffing for Every Facility Need
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Whether you need a nurse tomorrow or a permanent hire next month, we have a
                model that fits — designed for Maryland's healthcare landscape.
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffingTypes.map((type, index) => (
              <ScrollAnimate key={index} delay={index * 100}>
                <div className="bg-card p-6 rounded-2xl shadow-soft border border-border/50 group hover:shadow-medium transition-all h-full">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <type.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{type.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{type.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE STAFF FOR ── */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimate animation="slide-left">
              <div>
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                  Who We Staff For
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6 leading-tight">
                  Serving Maryland Healthcare Facilities
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  At Zenith Health Allies, we understand the staffing challenges Maryland healthcare
                  organizations face. Our staffing solutions connect your facility with qualified,
                  compassionate professionals ready to make a difference — without the lengthy
                  recruitment timelines.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Hospitals and acute care centers',
                    'Nursing homes and long-term care facilities',
                    'Assisted living and memory care communities',
                    'DDA provider agencies',
                    'Home health agencies',
                    'Outpatient and specialty clinics',
                    'Rehabilitation centers',
                    'School-based health programs',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-teal flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimate>

            <ScrollAnimate animation="slide-right">
              <div className="bg-card p-6 md:p-8 rounded-2xl shadow-medium">
                <h3 className="font-serif text-xl text-foreground mb-6">
                  Professionals We Place
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {professionalsPlaced.map((role, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl"
                    >
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground font-medium">{role}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <Button variant="default" size="lg" className="w-full" asChild>
                    <Link to="/contact?service=staffing">
                      Request Staffing
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollAnimate>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                The Zenith Staffing Advantage
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                We don't fill shifts — we protect your patients and your reputation with
                professionals you can trust.
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => (
              <ScrollAnimate key={index} delay={index * 100}>
                <div className="bg-card p-6 md:p-8 rounded-2xl shadow-soft text-center group hover:shadow-medium transition-all h-full">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform bg-primary/10 text-primary">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-base md:text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLACEMENT PROCESS ── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4">
          <ScrollAnimate>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Placement Process
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
                From Request to Ready — Fast
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                We make the staffing process simple, transparent, and effortless for your team.
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
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
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollAnimate>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Frequently Asked Questions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
                Common Questions About Our Staffing Services
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Have a specific question about staffing your facility? Call us directly at{' '}
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
        <div className="container mx-auto px-4">
          <div className="bg-card p-8 md:p-12 rounded-3xl shadow-medium">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimate animation="slide-left">
                <div>
                  <div className="w-16 h-16 gradient-warm rounded-2xl flex items-center justify-center mb-6">
                    <Building2 className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                    Partner With Zenith Health Allies
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Whether you're a Maryland healthcare facility with an urgent staffing gap or
                    planning ahead, our team is ready to help you quickly and efficiently.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Quick turnaround on staffing requests',
                      'Credential verification and compliance',
                      'Flexible contract terms',
                      'Dedicated account management',
                      'DDA agency staffing specialists',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-teal flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimate>

              <ScrollAnimate animation="slide-right">
                <div className="bg-secondary/50 p-6 md:p-8 rounded-2xl">
                  <h3 className="font-serif text-xl text-foreground mb-4">Get Staffing Support</h3>
                  <p className="text-muted-foreground mb-6">
                    Contact us to discuss your facility's staffing needs. We typically respond
                    within a few hours.
                  </p>
                  <div className="space-y-4 mb-6">
                    <a
                      href="tel:+12402781871"
                      className="flex items-center gap-3 p-4 bg-card rounded-xl hover:shadow-soft transition-shadow"
                    >
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Call us directly</p>
                        <p className="text-lg font-medium text-primary">(240) 278-1871</p>
                      </div>
                    </a>
                    <a
                      href="tel:+12406101390"
                      className="flex items-center gap-3 p-4 bg-card rounded-xl hover:shadow-soft transition-shadow"
                    >
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Alternate line</p>
                        <p className="text-lg font-medium text-primary">(240) 610-1390</p>
                      </div>
                    </a>
                  </div>
                  <Button variant="default" size="lg" className="w-full" asChild>
                    <Link to="/contact?service=staffing">
                      Request Staffing
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </ScrollAnimate>
            </div>
          </div>
          <p className="text-secondary-foreground/60 text-sm mt-8 text-center">
            Also explore:{' '}
            <Link to="/nursing" className="underline hover:text-secondary-foreground">
              Nursing Services
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
        </div>
      </section>
    </Layout>
  );
}
