import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, XCircle, Zap, Search, Wrench, Target } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAudit = () => {
    const auditSection = document.getElementById('audit');
    auditSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white overflow-x-hidden">
      <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a] opacity-50"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in">
            Your operations shouldn't feel like constant firefighting
          </h1>

          <p className="text-xl md:text-2xl text-[#e5e5e5] mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-delay">
            AI automation isn't magic—it's systematic problem-solving. We help businesses eliminate operational friction by connecting disconnected tools, reducing manual work, and creating reliable workflows that actually work.
          </p>

          <button
            onClick={scrollToAudit}
            className="bg-[#4a90e2] hover:bg-[#3a7bc8] text-white px-10 py-5 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto animate-fade-in-delay-2"
          >
            Request an Automation Audit
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-8 text-[#4a90e2]">This is for you if...</h2>
              {[
                'Your team spends hours on repetitive manual tasks',
                'You have multiple tools that don\'t talk to each other',
                'You\'re curious about AI but want clarity before investing',
                'You run a business with real operations and processes',
                'You value systematic improvements over quick fixes'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <CheckCircle2 className="w-6 h-6 text-[#4a90e2] flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-lg text-[#e5e5e5] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6 md:border-l md:border-[#333333] md:pl-12 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-8 text-[#e5e5e5]">This isn't for you if...</h2>
              {[
                'You\'re looking for magic button solutions',
                'This is a hobby project or experiment',
                'You expect instant, overnight transformations',
                'You want to automate before understanding your processes',
                'You\'re not ready to examine how your business actually works'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <XCircle className="w-6 h-6 text-[#666666] flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-lg text-[#b5b5b5] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#151515]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">How It Works</h2>

          <div className="space-y-16">
            {[
              {
                number: '1',
                title: 'Understand Your Current System',
                description: 'We map out how work actually flows through your business—not how you think it should work.',
                icon: Search
              },
              {
                number: '2',
                title: 'Identify Bottlenecks and Waste',
                description: 'We pinpoint where time gets lost, where errors happen, and where manual work creates friction.',
                icon: Target
              },
              {
                number: '3',
                title: 'Design Practical Automations',
                description: 'We create solutions that fit your existing operations, not the other way around.',
                icon: Wrench
              },
              {
                number: '4',
                title: 'Decide Together What Makes Sense',
                description: 'You get clear recommendations and decide what to implement, when, and how.',
                icon: Zap
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-8 group animate-on-scroll">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#4a90e2] text-2xl font-bold flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <step.icon className="w-8 h-8 text-[#4a90e2]" />
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-lg text-[#e5e5e5] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Experience You Can Trust</h2>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {[
              { value: '8+', label: 'years building systems and analyzing data flows' },
              { value: '200+', label: 'automations running reliably in production' },
              { value: 'Multiple', label: 'industries from manufacturing to services' }
            ].map((stat, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="text-5xl font-bold text-[#4a90e2] mb-4">{stat.value}</div>
                <p className="text-lg text-[#e5e5e5] leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-8 flex-wrap opacity-40">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-24 h-24 rounded-lg bg-[#252525] border border-[#333333]" />
            ))}
          </div>
        </div>
      </section>

      <section id="audit" className="py-24 px-6 bg-[#151515]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">The Automation Audit</h2>
            <p className="text-2xl text-[#e5e5e5] mb-4">
              A clear picture of your automation opportunities—no strings attached
            </p>
            <p className="text-lg text-[#b5b5b5] leading-relaxed max-w-3xl mx-auto">
              Our audit reviews your current workflows and identifies specific areas where automation can reduce friction and save time. You'll receive actionable recommendations whether you work with us or not.
            </p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#333333] rounded-2xl p-10 mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">What's included:</h3>
            <div className="space-y-5">
              {[
                'Current workflow analysis',
                'Bottleneck identification',
                'Specific automation opportunities',
                'Implementation priority recommendations',
                'Clear next steps (that you control)'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#4a90e2] flex-shrink-0 mt-1" />
                  <p className="text-lg text-[#e5e5e5]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What Happens Next</h2>
          <p className="text-xl text-center text-[#e5e5e5] mb-16">After You Request Your Audit:</p>

          <div className="space-y-12">
            {[
              {
                number: '1',
                title: 'Short Intro Call (15 minutes)',
                description: 'We\'ll discuss your biggest operational challenges and determine if an audit makes sense.'
              },
              {
                number: '2',
                title: 'No Sales Pitch',
                description: 'This is about understanding your business, not selling you something.'
              },
              {
                number: '3',
                title: 'Clear Recommendations',
                description: 'You\'ll receive a detailed report with specific, actionable insights.'
              },
              {
                number: '4',
                title: 'You Decide What\'s Next',
                description: 'No pressure, no follow-up calls. You choose how to proceed.'
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-6 animate-on-scroll">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#252525] border-2 border-[#4a90e2] text-xl font-bold flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-lg text-[#e5e5e5] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to see what's possible?</h2>
          <p className="text-2xl text-[#e5e5e5] mb-12">
            Get a clear picture of your automation opportunities. No commitment required.
          </p>

          <button
            onClick={scrollToAudit}
            className="bg-[#4a90e2] hover:bg-[#3a7bc8] text-white px-12 py-6 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto"
          >
            Request Your Free Automation Audit
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-[#333333]">
        <div className="max-w-6xl mx-auto text-center text-[#666666]">
          <p>Built for businesses ready to work smarter, not harder.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
