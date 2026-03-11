import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Activity, Heart, Shield, ChevronDown, Menu, X, Star, CheckCircle2, ArrowUpRight, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { LightRays } from './components/LightRays';
import { CTAButton } from './components/CTAButton';

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300";
  const variants = {
    primary: "bg-accent-primary hover:bg-accent-secondary text-white glow-orange",
    secondary: "bg-white/5 hover:bg-white/10 text-white border border-white/10",
    ghost: "text-text-muted hover:text-white"
  };
  return (
    <button className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-bg-primary/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent-primary flex items-center justify-center glow-orange">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight">Be Limitless</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          <a href="#manifesto" className="hover:text-white transition-colors">Our Manifesto</a>
          <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
          <a href="#blog" className="hover:text-white transition-colors">Blogs</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          
          <CTAButton className="text-sm px-6 py-2.5">
            Apply For An Exploratory Call
          </CTAButton>
        </div>

        <button className="md:hidden text-text-muted hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-20 left-0 w-full bg-bg-section border-b border-white/5 p-6 flex flex-col gap-4"
          >
            <a href="#manifesto" className="text-text-muted hover:text-white">Our Manifesto</a>
            <a href="#reviews" className="text-text-muted hover:text-white">Reviews</a>
            <a href="#blog" className="text-text-muted hover:text-white">Blogs</a>
          
            <div className="h-px bg-white/10 my-2" />
            
            <CTAButton className="w-full">Apply For An Exploratory Call</CTAButton>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Background Glow and LightRays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <LightRays
        raysOrigin="top-center"
        raysColor="#FF6A2B"
        raysSpeed={1.5}
        lightSpread={1.2}
        rayLength={1.8}
        followMouse={true}
        mouseInfluence={0.3}
        noiseAmount={0.03}
        distortion={0.08}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6"
          >
            Healthcare is broken.<br />
            <span className="text-gradient">Your body isn't.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-text-muted mb-8 font-light"
          >
            From Dysfunction to Vitality
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-text-muted mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            Longevity | Functional Medicine | Root Cause Healing
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <CTAButton className="text-lg w-full sm:w-auto">
              Apply For An Exploratory Call
            </CTAButton>
            <p className="text-sm text-text-muted flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-primary" />
              6 Month Precision Longevity Protocol
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Conditions = () => {
  const cards = [
    {
      title: "Metabolic Dysfunction",
      icon: <Activity className="w-6 h-6 text-accent-primary" />,
      items: ["Type 2 Diabetes", "Hypertension", "PCOS", "Fatty Liver", "Obesity"]
    },
    {
      title: "Gut Health & Autoimmune",
      icon: <Shield className="w-6 h-6 text-accent-primary" />,
      items: ["Acid Reflux", "Hashimoto's Thyroiditis", "Psoriasis"]
    },
    {
      title: "Age & Longevity",
      icon: <Heart className="w-6 h-6 text-accent-primary" />,
      items: ["Fatigue", "Reduced Strength & Mobility", "Chronic Inflammation"]
    }
  ];

  return (
    <section className="py-24 bg-bg-section relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Conditions We Support</h2>
          <p className="text-lg text-text-muted">
            Target the root causes of chronic conditions. Don't mask the symptoms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-bg-card border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-6">{card.title}</h3>
              <ul className="space-y-3">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-primary/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Metrics = () => {
  return (
    <section className="py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="py-8 md:py-0">
            <div className="text-5xl font-semibold text-white mb-2 glow-text-orange">5000+</div>
            <div className="text-text-muted uppercase tracking-wider text-sm font-medium">Lives Transformed</div>
          </div>
          <div className="py-8 md:py-0">
            <div className="text-5xl font-semibold text-white mb-2 glow-text-orange">12+</div>
            <div className="text-text-muted uppercase tracking-wider text-sm font-medium">Countries Reached</div>
          </div>
          <div className="py-8 md:py-0">
            <div className="text-5xl font-semibold text-white mb-2 flex items-center justify-center gap-2 glow-text-orange">
              4.9 <Star className="w-8 h-8 fill-accent-primary text-accent-primary" />
            </div>
            <div className="text-text-muted uppercase tracking-wider text-sm font-medium">Google Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const testimonials = [
    {
      quote: "I had a concentration of fat around my belly, and my goal was to shed that fat without losing muscle. The personalized attention I have received from the team in the program has been vital. In addition to losing fat, I learned the science of staying fit.",
      author: "Raghav Singal",
      role: "Professor, The Tuck School of Business"
    },
    {
      quote: "In my journey of going from fat to fit, I have realized that you just need to be health educated to form the right habits. My real aim of enrolling in the Biomarked program was to take charge of my health, build the right habits, and execute.",
      author: "Subham Barnwal",
      role: "Associate, Goldman Sachs"
    },
    {
      quote: "I enrolled my mother in the Diabetes Care program, and I'm very happy with her results. In 6 months, she has seen a significant improvement in her HbA1c and blood sugar levels. She feels more energetic, and I'm really satisfied with the personal attention my mother received in the program.",
      author: "Amit Anand",
      role: "CEO, Trixno Labs"
    },
    {
      quote: "I tried different measures to reverse my thyroid issues, but nothing really worked for me. After enrolling in the Biomarked Thyroid Care Program, I'm glad to see improvement in my thyroid biomarkers. I liked the personal attention I received - my meals were monitored and regularly adjusted. I also managed to reverse my Fatty Liver issue.",
      author: "Rahul Punia",
      role: "JP Morgan, IIT Bombay"
    },
    {
      quote: "When nothing was working in my favor to tone my body, I came across Biomarked. With proper diet, workouts, and guidance, I was able to lose a considerable amount of weight and simultaneously gain muscle. The knowledge I have gained is still helping me maintain my health.",
      author: "Rohit Gaur",
      role: "IES Officer, IIT Roorkee"
    },
    {
      quote: "It has only been 20 days on the program, and my bloating issues have completely vanished. I have gained clarity on which foods are healthy versus unhealthy. I'm feeling really confident about what I'm eating NOW! Looking forward to understanding more about body science.",
      author: "Kuldeep",
      role: "PhD IIT Roorkee"
    },
    {
      quote: "I was inspired to enroll in the program after witnessing the successful transformation of my close friend. Not only did I undergo a physical transformation, but I also experienced improved productivity at work and greater clarity of thought. I took control of my health.",
      author: "Karan Mange",
      role: "Head Marketing IISM, Mumbai"
    },
    {
      quote: "Preparing for competitive exams can take a toll on one's mind and body. I tried multiple times to lose weight, but none of my efforts yielded results. It just felt hard to stick to a schedule. Consistent guidance from Biomarked has helped me to turn the clock backwards and erase the effects of the sedentary lifestyle I had for years.",
      author: "Kartikay Kaushik",
      role: "AIR 01 UPSC ESE"
    },
    {
      quote: "My mom was diagnosed with diabetes. Her HbA1c was 6.5. After enrolling in the Diabetes Care Program, she lost 4 kilograms in a month, which was a turning point for her. She was encouraged to continue the program and work on her health. With Biomarked as my go-to advisor, I feel really confident about my mom's health.",
      author: "Achin Garg",
      role: "IPS, Delhi"
    },
    {
      quote: "I have lost 10+ kilos on the program, and I have learned so much about the science of the body. I feel empowered with the basics of nutrition, and I feel confident that I'll be able to maintain my toned physique.",
      author: "Ruchi Goil",
      role: "Director, Lead School, Delhi"
    }
  ];

  return (
    <section className="py-24 bg-bg-primary" id="reviews">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Be Limitless is changing thousands of lives across the globe.
          </h2>
        </div>

        <div className="overflow-hidden mask-edges relative w-full py-4">
          <div className="flex gap-8 pr-8 w-max animate-marquee">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="bg-bg-card p-8 rounded-2xl border border-white/5 relative overflow-hidden w-[350px] md:w-[450px] shrink-0 flex flex-col"
              >
                <Star className="absolute top-8 right-8 w-12 h-12 text-white/5" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-accent-primary text-accent-primary" />
                  ))}
                </div>
                <p className="text-lg text-text-muted mb-8 leading-relaxed flex-grow">"{t.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div>
                    <div className="font-medium text-white">{t.author}</div>
                    <div className="text-sm text-accent-primary">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <CTAButton>
            Apply For An Exploratory Call
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      num: "Step 1",
      title: "Discovery",
      desc: "Comprehensive root-cause diagnostics combined with lifestyle mapping and a deep functional health assessment to identify the true drivers of dysfunction."
    },
    {
      num: "Step 2",
      title: "Protocol Design",
      desc: "A personalized protocol designed using the GENOMES-X Framework - targeting gut health, emotional resilience, nutrition, oral health, movement, epidermal health, and sleep."
    },
    {
      num: "Step 3",
      title: "Longevity Habit Building",
      desc: "Transformation only lasts when biology and behavior evolve together. We integrate medicine with habit systems to help you build lifelong foundations for vitality."
    }
  ];

  return (
    <section className="py-32 bg-bg-section relative" id="how-it-works">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">How It Works</h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Our systematic approach to reversing dysfunction and building lifelong vitality.
          </p>
        </div>
        
        <div className="flex flex-col gap-12 pb-32">
          {steps.map((step, i) => (
            <div
              key={i}
              className="sticky w-full bg-bg-card rounded-[2.5rem] border border-white/5 p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center"
              style={{ 
                top: `calc(120px + ${i * 30}px)`,
                zIndex: 10 + i
              }}
            >
              <div className="flex-shrink-0 w-20 h-20 md:w-32 md:h-32 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl md:text-5xl font-semibold text-accent-primary shadow-[0_0_30px_rgba(255,106,43,0.1)]">
                0{i + 1}
              </div>
              <div className="flex-1">
                <div className="text-accent-primary font-medium tracking-wider uppercase text-sm mb-3">
                  {step.num}
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold mb-4">{step.title}</h3>
                <p className="text-lg text-text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="manifesto">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/nature/1920/1080?blur=10')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/80 to-bg-primary" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold mb-8 tracking-tight">
          Ditch the sick-care trap.
        </h2>
        <p className="text-xl text-text-muted mb-12 leading-relaxed font-light">
          Healthcare needs a revolution. From symptom management to root-cause healing. 
          From lifelong prescriptions to lifelong vitality. 
        </p>
        <p className="text-xl text-text-muted mb-12 leading-relaxed font-light">
          Join our WhatsApp community and be part of the movement to Be Limitless.
        </p>

        <Button variant="secondary" className="px-8 py-4 text-lg">
          Join WhatsApp Community
        </Button>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "How do I enroll in the protocol?",
      a: "You can begin by applying for an exploratory call. During this conversation, we will discuss your health history, current challenges, and long-term goals. If we determine that the program is the right fit for your needs, you will be invited to enroll for the protocol."
    },
    {
      q: "How do I know if this protocol is right for me?",
      a: "This protocol is designed for individuals who want to address the root cause of chronic health issues and build long-term vitality. The exploratory call helps determine whether our services align with your health goals and whether our approach is the right fit for you."
    },
    {
      q: "What is the duration of the protocol?",
      a: "The protocol typically runs for four to six months, as meaningful biological change requires time and consistency. However, the exact duration may vary depending on the complexity of the condition and individual health goals. Our approach is always personalized rather than one-size-fits-all."
    },
    {
      q: "How does the protocol work?",
      a: "This is a high-touch, 1:1 guided coaching. You will work closely with functional medicine practitioners and functional health coaches who support you throughout the journey, from diagnostics and protocol design to implementation and habit building. Every protocol is fully personalized and designed around your unique biology and lifestyle."
    },
    {
      q: "What kind of health conditions do you typically work with?",
      a: "We work with individuals experiencing issues such as: Chronic fatigue, Gut health disorders, Hormonal imbalances, Metabolic dysfunction, Thyroid disorders and Autoimmune conditions. Our approach focuses on identifying and addressing the underlying biological drivers behind these conditions."
    },
    {
      q: "Will I need to undergo lab tests?",
      a: "In many cases, yes. Functional diagnostics may be recommended to uncover root causes that conventional testing often misses. These insights allow us to design a highly targeted and personalized protocol."
    },
    {
      q: "How much does the protocol cost?",
      a: "The investment for the protocol varies depending on the complexity of the case, recommended diagnostics, and level of support required. Because every individual’s biology and health goals are different, the exact structure and costs are discussed during the exploratory call once we understand your situation in depth."
    },
    {
      q: "How soon can I expect to see results?",
      a: "Many participants begin noticing improvements in areas such as energy, digestion, sleep, and overall well-being within the first few weeks. However, deeper biological healing takes time. The protocol is designed to create sustainable, long-term improvements in health and vitality rather than quick, temporary fixes."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-bg-section">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-bg-card border border-white/5 rounded-2xl overflow-hidden">
              <button 
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="font-medium text-lg">{faq.q}</span>
                {openIdx === i ? <Minus className="w-5 h-5 text-accent-primary" /> : <Plus className="w-5 h-5 text-text-muted" />}
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-text-muted">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-text-muted font-light mb-1">Still have questions?</p>
          <p className="text-sm text-text-muted font-light mb-8">Start with an exploratory conversation to see if the protocol is the right fit for you.</p>
          <CTAButton>
            Apply For An Exploratory Call
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const posts = [
    {
      title: "The Seed Oils Debate: What Science Actually Says",
      category: "Nutrition",
      image: "https://picsum.photos/seed/oil/600/400"
    },
    {
      title: "Muscle as an Organ of Longevity",
      category: "Movement",
      image: "https://picsum.photos/seed/muscle/600/400"
    },
    {
      title: "Nervous System Regulation for Autoimmune Healing",
      category: "Resilience",
      image: "https://picsum.photos/seed/nervous/600/400"
    }
  ];

  return (
    <section className="py-24 bg-bg-section" id="blog">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Latest Insights</h2>
            <p className="text-text-muted">Explore the science of longevity.</p>
          </div>
          <Button variant="ghost" className="hidden md:flex">
            View All <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <a key={i} href="#" className="group block bg-bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all">
              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-accent-primary uppercase tracking-wider mb-3">
                  {post.category}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-accent-primary transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center text-sm text-text-muted font-medium">
                  Read Article <ArrowUpRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bg-primary pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-accent-primary flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight">Be Limitless</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              A premium root-cause longevity protocol. From dysfunction to vitality.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><a href="#" className="hover:text-white transition-colors">Our Manifesto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join Be Limitless</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p>© {new Date().getFullYear()} Be Limitless. All rights reserved.</p>
          <p>Designed for Longevity.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-white font-sans selection:bg-accent-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Conditions />
        <SocialProof />
        <Metrics />
        <HowItWorks />
        <Philosophy />
        <FAQ />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
