import { useEffect, useState, useRef } from 'react';
import { ArrowRight, CheckCircle2, XCircle, Zap, Search, Wrench, Target, Shield, Gauge, Cpu } from 'lucide-react';

const Background = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0a0a]">
      <div className="noise-overlay" />
      <div className="absolute inset-0 bg-grid-white bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Animated Blobs */}
      <div
        className="absolute top-0 -left-4 w-72 h-72 bg-[#4a90e2] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      />
      <div
        className="absolute top-0 -right-4 w-72 h-72 bg-[#61a5ef] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob [animation-delay:2000ms]"
        style={{ transform: `translateY(${offsetY * 0.15}px)` }}
      />
      <div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-[#4a90e2] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob [animation-delay:4000ms]"
        style={{ transform: `translateY(${-offsetY * 0.1}px)` }}
      />

      {/* Floating Shapes with Parallax */}
      <div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#4a90e2] rounded-full animate-float opacity-20"
        style={{ animationDuration: '8s', transform: `translateY(${offsetY * -0.05}px)` }}
      />
      <div
        className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#61a5ef] rounded-full animate-float opacity-10"
        style={{ animationDuration: '12s', animationDelay: '2s', transform: `translateY(${offsetY * -0.1}px)` }}
      />
    </div>
  );
};

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Visibility logic
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(currentScrollY < lastScrollY);
      }
      setLastScrollY(currentScrollY);

      // Active section logic
      const sections = ['hero', 'about', 'roi', 'process', 'stats', 'audit'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: 'Hero', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'ROI', id: 'roi' },
    { label: 'Process', id: 'process' },
    { label: 'Stats', id: 'stats' },
    { label: 'Audit', id: 'audit' }
  ];

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-full max-w-fit px-4 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
        }`}
    >
      <div className="nav-glass px-6 py-3 rounded-2xl flex items-center gap-8">
        <div className="flex items-center gap-2 pr-4 border-r border-white/10">
          <Zap className="w-5 h-5 text-[#4a90e2]" />
          <span className="font-bold tracking-tight text-sm">AA AUDIT</span>
        </div>
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
              className={`text-sm font-medium transition-all duration-300 hover:text-[#4a90e2] ${activeSection === item.id ? 'text-[#4a90e2]' : 'text-white/50'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#4a90e2] hover:bg-[#3a7bc8] text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-all ml-2"
        >
          Free Audit
        </button>
      </div>
    </nav>
  );
};
const ROICalculator = () => {
  const [teamSize, setTeamSize] = useState(10);
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(60);

  const yearlyHoursLost = teamSize * hoursPerWeek * 52;
  const yearlyCost = yearlyHoursLost * hourlyRate;
  const potentialSavings = yearlyCost * 0.4; // 40% efficiency gain

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group border-white/20">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#4a90e2] opacity-5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold uppercase tracking-widest text-[#4a90e2]">Team Size</label>
              <span className="text-2xl font-bold text-white">{teamSize} people</span>
            </div>
            <input
              type="range" min="1" max="100" value={teamSize}
              onChange={(e) => setTeamSize(parseInt(e.target.value))}
              className="w-full [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(74,144,226,0.5)]"
            />
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold uppercase tracking-widest text-[#4a90e2]">Manual Hours / Person / Week</label>
              <span className="text-2xl font-bold text-white">{hoursPerWeek} hrs</span>
            </div>
            <input
              type="range" min="1" max="40" value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
              className="w-full [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(74,144,226,0.5)]"
            />
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold uppercase tracking-widest text-[#4a90e2]">Avg. Hourly Rate</label>
              <span className="text-2xl font-bold text-white">{formatCurrency(hourlyRate)}/hr</span>
            </div>
            <input
              type="range" min="20" max="500" step="10" value={hourlyRate}
              onChange={(e) => setHourlyRate(parseInt(e.target.value))}
              className="w-full [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(74,144,226,0.5)]"
            />
          </div>
        </div>

        <div className="grid gap-6">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#4a90e2]/30 transition-colors">
            <p className="text-sm text-white/40 uppercase tracking-widest font-bold mb-2">Yearly Hours Lost</p>
            <h4 className="text-4xl font-bold text-white">{yearlyHoursLost.toLocaleString()} hrs</h4>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#4a90e2]/30 transition-colors">
            <p className="text-sm text-white/40 uppercase tracking-widest font-bold mb-2">Yearly Financial Cost</p>
            <h4 className="text-4xl font-bold text-white">{formatCurrency(yearlyCost)}</h4>
          </div>
          <div className="p-8 rounded-[2rem] bg-[#4a90e2]/10 border-2 border-[#4a90e2]/50 shadow-[0_0_30px_rgba(74,144,226,0.2)]">
            <p className="text-sm text-[#4a90e2] uppercase tracking-widest font-bold mb-2">Potential Annual Savings</p>
            <h4 className="text-5xl md:text-6xl font-black text-white">{formatCurrency(potentialSavings)}</h4>
            <p className="text-xs text-white/30 mt-4 italic font-medium">*Based on average 40% efficiency gains through systematic automation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does an automation audit typically take?",
      a: "A standard audit takes about 5-7 business days. We spend the first few days mapping your workflows and the remaining time identifying bottlenecks and drafting ROI-focused recommendations."
    },
    {
      q: "Do I need a technical team to implement your recommendations?",
      a: "Not necessarily. We design solutions that range from low-code automations you can manage yourself to complex systems. We can also handle the implementation for you if needed."
    },
    {
      q: "Which tools do you specialize in?",
      a: "We are tool-agnostic, but we frequently work with Make.com, Zapier, Retool, OpenAI, and various CRM/ERP systems. We choose the best tool for your specific operational needs."
    },
    {
      q: "What kind of ROI can I expect?",
      a: "Most clients see a 30-50% reduction in manual task time within the first 90 days. The long-term ROI comes from improved data accuracy and the ability to scale without linear headcount growth."
    },
    {
      q: "How do you ensure the security of our business data?",
      a: "Security is our priority. We follow industry best practices for API integrations and never store your sensitive business data on our servers. We build systems that you own and control."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`glass rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden ${openIndex !== null && openIndex !== i ? 'opacity-40 scale-[0.98]' : 'opacity-100 scale-100'
            }`}
          onClick={() => setOpenIndex(openIndex === i ? null : i)}
        >
          <div className="p-6 md:p-8 flex items-center justify-between gap-4">
            <h3 className="text-xl font-bold">{faq.q}</h3>
            <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-500 ${openIndex === i ? 'rotate-180 bg-[#4a90e2]/20' : ''}`}>
              <Cpu className={`w-4 h-4 transition-colors ${openIndex === i ? 'text-[#4a90e2]' : 'text-white/20'}`} />
            </div>
          </div>
          <div
            className="transition-all duration-500 ease-in-out"
            style={{
              maxHeight: openIndex === i ? '200px' : '0',
              opacity: openIndex === i ? 1 : 0
            }}
          >
            <div className="px-6 pb-6 md:px-8 md:pb-8 text-lg text-white/50 leading-relaxed border-t border-white/5 pt-6">
              {faq.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const LogoTicker = () => {
  const logos = [
    'VERTAX', 'NEXUS', 'ORBIT', 'LUMINA', 'AETHER', 'PRISM',
    'VERTAX', 'NEXUS', 'ORBIT', 'LUMINA', 'AETHER', 'PRISM'
  ];

  return (
    <div className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden group">
      <div className="flex animate-scroll whitespace-nowrap">
        {logos.map((logo, i) => (
          <div key={i} className="flex items-center mx-12">
            <span className="text-2xl font-bold tracking-[0.2em] text-white/20 hover:text-white/40 transition-colors cursor-default">
              {logo}
            </span>
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {logos.map((logo, i) => (
          <div key={`${i}-dup`} className="flex items-center mx-12">
            <span className="text-2xl font-bold tracking-[0.2em] text-white/20 hover:text-white/40 transition-colors cursor-default">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.1 });

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`}
    >
      {children}
    </div>
  );
};

const MouseGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(74, 144, 226, 0.05), transparent 80%)`
      }}
    />
  );
};

const Counter = ({ value, duration = 2000 }: { value: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const targetValue = parseInt(value) || 0;
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasStarted.current) {
        hasStarted.current = true;
        let start = 0;
        const increment = targetValue / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= targetValue) {
            setCount(targetValue);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }
    }, { threshold: 0.1 });

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [targetValue, duration]);

  return <div ref={elementRef}>{value.replace(/\d+/, count.toString())}</div>;
};

function App() {
  const processRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (processRef.current) {
        const rect = processRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Start progress when top hits 80% of window, end when bottom hits 20%
        const start = windowHeight * 0.8;
        const end = windowHeight * 0.2;
        const total = rect.height + start - end;
        const current = start - rect.top;
        const progress = Math.max(0, Math.min(1, current / total));
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAudit = () => {
    const auditSection = document.getElementById('audit');
    auditSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white/90 selection:bg-[#4a90e2]/30 selection:text-[#4a90e2]">
      <Background />
      <Navbar />
      <MouseGlow />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
            <div className="absolute -top-20 -left-20 w-96 h-96 opacity-20 pointer-events-none blur-sm hidden lg:block">
              <img
                src="/hero-visual.png"
                alt="AI Automation Visual Decor"
                className="w-full h-full object-contain animate-float"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[#4a90e2] mb-8 animate-reveal stagger-1">
              <Zap className="w-4 h-4" />
              <span>Powering the next generation of operations</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[1.1] animate-reveal stagger-2 max-w-5xl">
              Your operations shouldn't feel like <span className="text-gradient drop-shadow-[0_0_15px_rgba(74,144,226,0.3)]">firefighting</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 mb-12 leading-relaxed max-w-4xl mx-auto animate-reveal stagger-3">
              AI automation isn't magic—it's systematic problem-solving. We help businesses eliminate operational friction by connecting disconnected tools and creating reliable workflows.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-reveal stagger-4">
              <button
                onClick={scrollToAudit}
                className="glow-button bg-[#4a90e2] hover:bg-[#3a7bc8] text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3"
              >
                Request an Automation Audit
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4 text-white/40 text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-white/10" />
                  ))}
                </div>
                <span>Trusted by 50+ companies</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <LogoTicker />

      <div className="h-24 bg-gradient-to-b from-transparent to-[#0a0a0a]" />

      {/* Qualifications Section */}
      <section id="about" className="py-32 px-6">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
              <div className="glass p-10 rounded-3xl animate-reveal group">
                <h2 className="text-3xl font-bold mb-8 text-[#4a90e2] inline-block relative">
                  This is for you if...
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#4a90e2] group-hover:w-full transition-all duration-500" />
                </h2>
                <div className="space-y-6">
                  {[
                    'Your team spends hours on repetitive manual tasks',
                    'You have multiple tools that don\'t talk to each other',
                    'You\'re curious about AI but want clarity before investing',
                    'You run a business with real operations and processes',
                    'You value systematic improvements over quick fixes'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group stagger-1">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#4a90e2]/10 flex items-center justify-center group-hover:bg-[#4a90e2]/20 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-[#4a90e2]" />
                      </div>
                      <p className="text-lg text-white/70 group-hover:text-white/90 transition-colors">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass p-10 rounded-3xl animate-reveal stagger-2 group">
                <h2 className="text-3xl font-bold mb-8 text-white/40 inline-block relative">
                  This isn't for you if...
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white/20 group-hover:w-full transition-all duration-500" />
                </h2>
                <div className="space-y-6">
                  {[
                    'You\'re looking for magic button solutions',
                    'This is a hobby project or experiment',
                    'You expect instant, overnight transformations',
                    'You want to automate before understanding your processes',
                    'You\'re not ready to examine how your business works'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                        <XCircle className="w-4 h-4 text-white/20" />
                      </div>
                      <p className="text-lg text-white/40">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ROI Calculator Section */}
      <section id="roi" className="py-32 px-6">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Automation ROI Calculator</h2>
              <p className="text-2xl text-white/50">See how much operational friction is costing your business</p>
            </div>
            <ROICalculator />
          </div>
        </ScrollReveal>
      </section>

      <div className="h-24 bg-gradient-to-t from-transparent to-[#0a0a0a]" />

      {/* Process Section */}
      <section id="process" ref={processRef} className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_100%)]">
          <img src="/process-visual.png" alt="Process Decor" className="w-full h-full object-cover scale-110" />
        </div>

        <ScrollReveal>
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
              <div className="h-1.5 w-24 bg-[#4a90e2] mx-auto rounded-full" />
            </div>

            <div className="relative">
              {/* Vertical Progress Line */}
              <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-white/5 hidden md:block">
                <div
                  className="absolute top-0 left-0 w-full bg-[#4a90e2] transition-all duration-300 shadow-[0_0_15px_rgba(74,144,226,0.5)]"
                  style={{ height: `${scrollProgress * 100}%` }}
                />
              </div>

              <div className="grid gap-12">
                {[
                  {
                    title: 'Understand Your Current System',
                    description: 'We map out how work actually flows through your business—not how you think it should work.',
                    icon: Search,
                    tag: 'Analysis'
                  },
                  {
                    title: 'Identify Bottlenecks and Waste',
                    description: 'We pinpoint where time gets lost, where errors happen, and where manual work creates friction.',
                    icon: Target,
                    tag: 'Strategy'
                  },
                  {
                    title: 'Design Practical Automations',
                    description: 'We create solutions that fit your existing operations, not the other way around.',
                    icon: Wrench,
                    tag: 'Solution'
                  },
                  {
                    title: 'Decide Together What Makes Sense',
                    description: 'You get clear, actionable recommendations and decide exactly what to implement, when, and how to maximize your ROI.',
                    icon: Zap,
                    tag: 'Action'
                  }
                ].map((step, index) => {
                  const isActive = scrollProgress > (index / 4);
                  return (
                    <div key={index} className={`flex flex-col md:flex-row gap-8 items-start group relative transition-all duration-500 md:min-h-[150px] ${isActive ? 'opacity-100' : 'opacity-30'}`}>
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-500 z-10 ${isActive ? 'bg-[#4a90e2] border-[#4a90e2] scale-110 shadow-[0_0_20px_rgba(74,144,226,0.4)]' : 'bg-[#0a0a0a] border-white/10 group-hover:border-[#4a90e2]/50'
                        }`}>
                        <step.icon className={`w-7 h-7 transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/20'}`} />
                      </div>
                      <div className="pt-2">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded border transition-all duration-500 ${isActive ? 'bg-[#4a90e2]/20 border-[#4a90e2] text-[#4a90e2]' : 'bg-white/5 border-white/10 text-white/30'
                            }`}>
                            0{index + 1}
                          </span>
                          <h3 className={`text-2xl font-bold transition-all duration-500 ${isActive ? 'text-white' : 'text-white/40'}`}>{step.title}</h3>
                        </div>
                        <p className={`text-lg transition-all duration-500 leading-relaxed max-w-2xl ${isActive ? 'text-white/70' : 'text-white/20'}`}>{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <div className="h-24 bg-gradient-to-b from-transparent to-[#0a0a0a]" />

      {/* Stats Section */}
      <section id="stats" className="py-32 px-6">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <div className="glass p-16 rounded-[3rem] text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#4a90e2] opacity-5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />

              <h2 className="text-4xl font-bold mb-16 relative z-10">Experience You Can Trust</h2>

              <div className="grid md:grid-cols-3 gap-12 relative z-10">
                {[
                  { value: '8+', label: 'years building systems and analyzing data flows', icon: Shield },
                  { value: '200+', label: 'automations running reliably in production', icon: Cpu },
                  { value: 'Multiple', label: 'industries from manufacturing to services', icon: Gauge }
                ].map((stat, index) => (
                  <div key={index} className="space-y-4 animate-reveal">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-6">
                      <stat.icon className="w-6 h-6 text-[#4a90e2]" />
                    </div>
                    <div className="text-5xl font-bold text-gradient">
                      <Counter value={stat.value} />
                    </div>
                    <p className="text-lg text-white/50 leading-relaxed px-4">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Audit Section */}
      <section id="audit" className="py-32 px-6 relative">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute -top-24 -right-24 w-64 h-64 opacity-50 hidden md:block">
              <img src="/audit-visual.png" alt="Audit Accent" className="w-full h-full object-contain animate-float" style={{ animationDelay: '1s' }} />
            </div>
            <div className="text-center mb-16 animate-reveal">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">The Automation Audit</h2>
              <p className="text-2xl text-white/70 mb-8 max-w-2xl mx-auto">
                A clear picture of your automation opportunities—no strings attached
              </p>
            </div>

            <div className="glass p-12 md:p-16 rounded-[2.5rem] relative group border-white/20 animate-reveal">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4a90e2] to-[#61a5ef] rounded-[2.6rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <div className="relative">
                <h3 className="text-2xl font-bold mb-10 text-center">What's included in your custom report:</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    'Current workflow analysis',
                    'Bottleneck identification',
                    'Specific automation opportunities',
                    'Implementation priority recommendations',
                    'Clear next steps (that you control)',
                    'ROI project estimations'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/[0.08] transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-[#4a90e2] flex-shrink-0" />
                      <p className="text-white/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <div className="h-24 bg-gradient-to-t from-transparent to-[#0a0a0a]" />

      {/* FAQ Section */}
      <section className="py-32 px-6">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-2xl text-white/50">Everything you need to know about the audit process</p>
            </div>
            <FAQ />
          </div>
        </ScrollReveal>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 text-center">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto animate-reveal">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Ready to see what's possible?</h2>
            <p className="text-2xl text-white/50 mb-12">
              Get a clear picture of your automation opportunities. No commitment required.
            </p>

            <button
              onClick={scrollToAudit}
              className="glow-button bg-[#4a90e2] hover:bg-[#3a7bc8] text-white px-12 py-6 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:scale-[1.05] active:scale-[0.95] flex items-center gap-4 mx-auto shadow-2xl shadow-[#4a90e2]/20"
            >
              Request Your Free Audit
              <ArrowRight className="w-6 h-6 animate-float" />
            </button>
          </div>
        </ScrollReveal>
      </section>

      <footer className="py-12 px-6 border-t border-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-white/30 text-sm">
          <p>&copy; 2024 AI Automation Agency. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p>Built for businesses ready to work smarter.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
