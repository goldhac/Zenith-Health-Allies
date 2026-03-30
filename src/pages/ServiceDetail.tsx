import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link, useParams, Navigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, ArrowLeft, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import nurseImage from '@/assets/nurse-portrait.jpg';
import trainingImage from '@/assets/training-class.jpg';
import homeCareImage from '@/assets/home-care.jpg';

const servicesData = {
  'nursing-services': {
    title: 'Nursing Services for DDA Agencies',
    subtitle: 'Expert nursing care in the comfort of home',
    description: 'Offering unparalleled expertise in nursing training to DDA provider agencies. Expert nursing care in the comfort of home, enhancing well-being with skill and compassion. Your health is our priority.',
    longDescription: `Our nursing services are designed to provide comprehensive healthcare support to individuals in their homes and DDA provider agencies throughout Maryland. We understand that quality healthcare should be accessible and personalized, which is why our team of skilled nurses delivers exceptional care tailored to each client's unique needs.

Our nurses are highly trained professionals who bring years of experience in various healthcare settings. They work closely with patients, families, and other healthcare providers to ensure coordinated and effective care delivery.`,
    features: [
      'Skilled nursing assessments and care planning',
      'Medication management and administration',
      'Wound care and treatment protocols',
      'Health monitoring and vital signs tracking',
      'Care plan development and coordination',
      'Family education and support services',
      'Chronic disease management',
      'Post-hospitalization care',
    ],
    benefits: [
      'Personalized care in familiar surroundings',
      'Reduced hospital readmissions',
      'Improved quality of life for patients',
      'Peace of mind for families',
      'Cost-effective healthcare solutions',
      'Flexible scheduling options',
    ],
    image: nurseImage,
  },
  'training-classes': {
    title: 'Training Classes',
    subtitle: 'Comprehensive healthcare education',
    description: 'We provide comprehensive trainings to equip individuals with life-saving skills and confidence in emergency situations. Empower through education with informative classes for enhanced healthcare knowledge.',
    longDescription: `Our comprehensive training programs are designed to empower healthcare professionals and individuals with the skills and knowledge they need to provide exceptional care. Whether you're looking to advance your career or ensure your team is equipped with the latest certifications, we offer a range of courses tailored to meet diverse needs.

All our training programs are conducted by certified instructors with extensive real-world experience. We combine theoretical knowledge with hands-on practice to ensure participants gain practical skills they can apply immediately.`,
    features: [
      'CPR and First Aid certification courses',
      'Medication administration training',
      'Patient care techniques and best practices',
      'Emergency response protocols',
      'Health and safety compliance training',
      'Continuing education units (CEUs)',
      'Specialized DDA training programs',
      'Online and in-person learning options',
    ],
    benefits: [
      'Industry-recognized certifications',
      'Hands-on practical training',
      'Flexible scheduling for busy professionals',
      'Expert instructors with real-world experience',
      'Small class sizes for personalized attention',
      'Career advancement opportunities',
    ],
    image: trainingImage,
  },
  'staffing-services': {
    title: 'Staffing Services',
    subtitle: 'Reliable staffing solutions',
    description: 'Reliable staffing solutions, ensuring seamless support for optimal healthcare services. Depend on us for reliable and qualified professionals who meet your healthcare facility needs.',
    longDescription: `Our healthcare staffing services provide facilities with access to qualified, vetted professionals ready to deliver exceptional patient care. We understand the challenges healthcare organizations face in maintaining adequate staffing levels, which is why we offer flexible solutions to meet your needs.

Our rigorous screening process ensures that every professional we place meets the highest standards of competence, professionalism, and compassion. We handle all aspects of recruitment, verification, and placement, allowing you to focus on what matters most – patient care.`,
    features: [
      'Temporary staffing solutions',
      'Permanent placement services',
      'Healthcare facility staffing',
      'Qualified and vetted professionals',
      'Flexible scheduling options',
      '24/7 availability and support',
      'Rapid response to staffing needs',
      'Comprehensive credentialing verification',
    ],
    benefits: [
      'Reduce recruitment time and costs',
      'Access to pre-screened qualified candidates',
      'Maintain consistent staffing levels',
      'Reduce overtime expenses',
      'Improve patient care quality',
      'Flexible contracts and arrangements',
    ],
    image: homeCareImage,
  },
};

/** Maps each legacy slug to the canonical dedicated service page. */
const canonicalMap: Record<string, string> = {
  'nursing-services': 'https://zenithhealthallies.org/nursing',
  'training-classes': 'https://zenithhealthallies.org/training',
  'staffing-services': 'https://zenithhealthallies.org/staffing',
};

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug as keyof typeof servicesData] : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const canonical = slug ? canonicalMap[slug] : undefined;

  return (
    <Layout>
      {canonical && (
        <Helmet>
          <link rel="canonical" href={canonical} />
        </Helmet>
      )}
      {/* Content Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-2xl shadow-medium w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-6">About This Service</h2>
              <div className="prose prose-lg text-muted-foreground mb-8">
                {service.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
                ))}
              </div>
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <div className="bg-card p-8 md:p-10 rounded-2xl shadow-soft">
              <h3 className="font-serif text-2xl text-foreground mb-6">What We Offer</h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-card p-8 md:p-10 rounded-2xl shadow-soft">
              <h3 className="font-serif text-2xl text-foreground mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-secondary-foreground mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-secondary-foreground/85 text-lg max-w-2xl mx-auto mb-10 font-light">
            Contact us today to discuss your needs and discover how our {service.title.toLowerCase()} can benefit you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="glass" size="lg" className="px-10" asChild>
              <a href="tel:240-278-1871">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
