import { ArrowRight, CheckCircle2, XCircle, Zap, Search, Wrench, Target, Shield, Gauge, Cpu } from 'lucide-react';

const Background = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0a0a]">
    <div className="absolute inset-0 bg-grid-white bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    <div className="absolute top-0 -left-4 w-72 h-72 bg-[#4a90e2] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob" />
    <div className="absolute top-0 -right-4 w-72 h-72 bg-[#61a5ef] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob [animation-delay:2000ms]" />
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#4a90e2] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob [animation-delay:4000ms]" />
  </div>
);

function App() {
  const scrollToAudit = () => {
    const auditSection = document.getElementById('audit');
    auditSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white/90 selection:bg-[#4a90e2]/30 selection:text-[#4a90e2]">
      <Background />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[#4a90e2] mb-8 animate-reveal stagger-1">
            <Zap className="w-4 h-4" />
            <span>Powering the next generation of operations</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[1.1] animate-reveal stagger-2">
            Your operations shouldn't feel like <span className="text-gradient">firefighting</span>
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
      </section>

      {/* Qualifications Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <div className="glass p-10 rounded-3xl animate-reveal">
              <h2 className="text-3xl font-bold mb-8 text-[#4a90e2]">This is for you if...</h2>
              <div className="space-y-6">
                {[
                  'Your team spends hours on repetitive manual tasks',
                  'You have multiple tools that don\'t talk to each other',
                  'You\'re curious about AI but want clarity before investing',
                  'You run a business with real operations and processes',
                  'You value systematic improvements over quick fixes'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group stagger-1">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#4a90e2]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#4a90e2]" />
                    </div>
                    <p className="text-lg text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-10 rounded-3xl animate-reveal stagger-2">
              <h2 className="text-3xl font-bold mb-8 text-white/40">This isn't for you if...</h2>
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
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
            <div className="h-1.5 w-24 bg-[#4a90e2] mx-auto rounded-full" />
          </div>

          <div className="grid gap-8">
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
                description: 'You get clear recommendations and decide what to implement, when, and how.',
                icon: Zap,
                tag: 'Action'
              }
            ].map((step, index) => (
              <div key={index} className="glass glass-hover p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start group animate-reveal stagger-1">
                <div className="w-14 h-14 rounded-xl bg-[#4a90e2]/10 flex items-center justify-center flex-shrink-0 border border-[#4a90e2]/20 group-hover:scale-110 transition-transform duration-500">
                  <step.icon className="w-7 h-7 text-[#4a90e2]" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] uppercase tracking-widest text-[#4a90e2] font-bold px-2 py-0.5 rounded bg-[#4a90e2]/5 border border-[#4a90e2]/10">
                      Step 0{index + 1}
                    </span>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-lg text-white/50 leading-relaxed max-w-2xl">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6">
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
                  <div className="text-5xl font-bold text-gradient">{stat.value}</div>
                  <p className="text-lg text-white/50 leading-relaxed px-4">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audit Section */}
      <section id="audit" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
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
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 text-center">
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
