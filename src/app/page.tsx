import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GlassCard } from '@/components/ui/glass-card';
import { InvestmentChart } from '@/components/investment-chart';
import { SphereIcon, PartnerIcon } from '@/components/icons';
import {
  Cpu,
  DollarSign,
  TrendingUp,
  Gem,
  Building2,
  Hotel,
  ShoppingBag,
  FlaskConical,
  Server,
  Bot,
  Landmark,
  Users,
  HeartHandshake,
  AreaChart,
  ShieldCheck,
  Globe,
  BrainCircuit,
  ClipboardCheck,
  Calendar,
  Rocket,
} from 'lucide-react';

export default function Home() {
  const financialMetrics = [
    { label: "Sphere Venue Investment", value: "$2.8 Billion" },
    { label: "District Infrastructure", value: "$1.4 Billion" },
    { label: "Total Project Investment", value: "$4.2 Billion" },
    { label: "Projected Annual Revenue", value: "$1.8 Billion" },
    { label: "Simple Payback Period", value: "~2.3 Years" },
    { label: "Annual GDP Contribution", value: "QAR 20-30 Billion" },
  ];

  const partners = [
    { name: 'CSCEC', description: 'The world\'s largest contractor, ensuring complex mega-projects are delivered on time and on budget.' },
    { name: 'Tencent', description: 'A global leader in AI and interactive entertainment, powering our personalization engine.' },
    { name: 'Alibaba', description: 'Providing robust cloud infrastructure for real-time data processing and smart city management.' },
    { name: 'Wanda Group', description: 'Premier developer of entertainment content, co-developing world-class shows and experiences.' },
  ];

  return (
    <div className="bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-background/50 backdrop-blur-md">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-headline font-bold text-primary">QatarSphere</h1>
          <Button variant="outline">QIA Portal</Button>
        </nav>
      </header>

      <main>
        {/* Slide 1: Title */}
        <section className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }} data-ai-hint="futuristic sphere city dusk">
          <div className="absolute inset-0 bg-primary/70" />
          <GlassCard className="relative z-10 text-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-white">The QatarSphere District</h1>
            <p className="mt-4 text-lg md:text-2xl text-white/90">A Landmark Investment in Qatar's Future</p>
            <p className="mt-2 text-sm md:text-base text-accent">Presented by: His Excellency Sheikh Jabr bin Thani Al Thani</p>
          </GlassCard>
        </section>

        {/* Slide 2: Executive Summary */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline">Executive Summary</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">A Vision for National Prosperity & Technological Sovereignty, designed to become a global epicenter for the next industrial revolution.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <CardHeader>
                <Cpu className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="font-body">The Proposal</CardTitle>
              </CardHeader>
              <CardContent>$4.2B to develop the world's first "cognitive city" district.</CardContent>
            </Card>
            <Card className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500 [animation-delay:100ms]">
              <CardHeader>
                <DollarSign className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="font-body">The Dual Engine</CardTitle>
              </CardHeader>
              <CardContent>Adds QAR 20-30B annually to GDP.</CardContent>
            </Card>
            <Card className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500 [animation-delay:200ms]">
              <CardHeader>
                <TrendingUp className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="font-body">The Strategic Imperative</CardTitle>
              </CardHeader>
              <CardContent>A living laboratory for AI, Quantum Computing, and Robotics.</CardContent>
            </Card>
            <Card className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500 [animation-delay:300ms]">
              <CardHeader>
                <Gem className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="font-body">The Ask</CardTitle>
              </CardHeader>
              <CardContent>Seeking QIA's backing to anchor this nation-building project.</CardContent>
            </Card>
          </div>
        </section>

        {/* Slide 3: A New Paradigm */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline">A New Paradigm: Beyond Entertainment</h2>
            <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">While competitors build bigger screens, we will build a smarter city. A globally significant hub for technological innovation.</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <GlassCard className="w-full lg:w-1/2">
              <h3 className="text-2xl font-headline text-accent">The Entertainment Layer</h3>
              <p className="mt-2">A world-class destination attracting 3.2 million visitors annually, serving as the public face and a key revenue driver for the entire ecosystem.</p>
            </GlassCard>
            <SphereIcon className="h-24 w-24 text-primary shrink-0 animate-pulse" />
            <GlassCard className="w-full lg:w-1/2">
              <h3 className="text-2xl font-headline text-accent">The Technology Core</h3>
              <p className="mt-2">A dedicated Special Economic and Technology Zone (SET-Zone) to attract the brightest minds in AI, Quantum Computing, Advanced Robotics, and Blockchain.</p>
            </GlassCard>
          </div>
        </section>

        {/* Slide 4: Proposed Solution */}
        <section className="bg-secondary/50">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline">A Dual-Purpose Ecosystem</h2>
            <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">Our 850,000-square-meter district is designed with two synergistic purposes, creating a virtuous cycle of innovation and experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
            <Card className="p-6">
              <h3 className="text-2xl font-headline text-primary">Zone 1: The Public Experience</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-4"><Building2 className="h-6 w-6 text-accent shrink-0 mt-1" /><span>The QatarSphere venue, with dynamic, submersible stages.</span></li>
                <li className="flex items-start gap-4"><Hotel className="h-6 w-6 text-accent shrink-0 mt-1" /><span>Luxury hotels with 2,500 rooms.</span></li>
                <li className="flex items-start gap-4"><ShoppingBag className="h-6 w-6 text-accent shrink-0 mt-1" /><span>200+ retail spaces and a 2-mile entertainment promenade.</span></li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-2xl font-headline text-primary">Zone 2: The Qatar Innovation Campus (QIC)</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-4"><FlaskConical className="h-6 w-6 text-accent shrink-0 mt-1" /><span>State-of-the-art R&D facilities and secure data centers.</span></li>
                <li className="flex items-start gap-4"><Bot className="h-6 w-6 text-accent shrink-0 mt-1" /><span>"Sandbox" environments for testing autonomous robots and AI systems.</span></li>
                <li className="flex items-start gap-4"><Server className="h-6 w-6 text-accent shrink-0 mt-1" /><span>Corporate headquarters and startup incubators for global tech firms.</span></li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Slide 5: National & Cultural Impact */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline">National & Cultural Impact</h2>
            <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">A powerful catalyst for our national vision, creating parallel streams of human and economic development.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
            <GlassCard>
              <Landmark className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-headline text-xl">Celebrate Heritage, Power the Future</h3>
              <p className="mt-2 text-foreground/80">A unique brand of "Culture & Code" to define Qatar's global identity, from heritage pavilions to innovation campuses.</p>
            </GlassCard>
            <GlassCard>
              <Users className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-headline text-xl">Build a Knowledge Workforce</h3>
              <p className="mt-2 text-foreground/80">A National Technology Fellowship to develop elite Qatari talent in AI, quantum mechanics, and robotics.</p>
            </GlassCard>
            <GlassCard>
              <HeartHandshake className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-headline text-xl">Enhance Community Well-being</h3>
              <p className="mt-2 text-foreground/80">World-class, family-friendly public spaces and cultural programming for residents and a new source of national pride.</p>
            </GlassCard>
          </div>
        </section>

        {/* Slide 6: Redefined Value Proposition */}
        <section className="bg-secondary/50">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline">A Redefined Value Proposition</h2>
            <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">A strategic return far greater than a standalone tourism project, delivering a multiplier effect on national value.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
            <Card><CardHeader><AreaChart className="h-8 w-8 text-primary mb-2" /><CardTitle className="font-body text-lg">Economic Diversification</CardTitle></CardHeader><CardContent>$1.8B+ in annual revenue from tourism, tech licensing, and corporate tenancies.</CardContent></Card>
            <Card><CardHeader><ShieldCheck className="h-8 w-8 text-primary mb-2" /><CardTitle className="font-body text-lg">Technological Sovereignty</CardTitle></CardHeader><CardContent>Fostering homegrown innovation and valuable Intellectual Property.</CardContent></Card>
            <Card><CardHeader><Globe className="h-8 w-8 text-primary mb-2" /><CardTitle className="font-body text-lg">Global Influence</CardTitle></CardHeader><CardContent>The "Davos" of the next tech revolution for governance, dialogues, and investment.</CardContent></Card>
            <Card><CardHeader><BrainCircuit className="h-8 w-8 text-primary mb-2" /><CardTitle className="font-body text-lg">Human Capital</CardTitle></CardHeader><CardContent>A magnet for attracting and retaining world-class scientific talent.</CardContent></Card>
          </div>
        </section>

        {/* Slide 7: Financial Overview */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline">Financial Overview</h2>
            <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">A sound and highly profitable national investment built on rigorous analysis and a resilient, diversified revenue strategy.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl items-start">
            <div className="grid grid-cols-2 gap-4">
              {financialMetrics.map(metric => (
                <Card key={metric.label}>
                  <CardHeader><CardTitle className="text-base font-body">{metric.label}</CardTitle></CardHeader>
                  <CardContent><p className="text-3xl font-bold text-primary">{metric.value}</p></CardContent>
                </Card>
              ))}
            </div>
            <GlassCard>
                <h3 className="text-2xl font-headline text-accent mb-4">Investment Breakdown</h3>
                <InvestmentChart />
            </GlassCard>
          </div>
        </section>

        {/* Slide 8: Implementation Roadmap */}
        <section className="bg-secondary/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-headline">Implementation Roadmap</h2>
                <p className="text-muted-foreground mt-2">An aggressive yet achievable 36-month plan for a grand opening in Q4 2028.</p>
            </div>
            <div className="w-full max-w-5xl space-y-8">
                <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left-12 duration-700">
                    <div className="bg-primary text-primary-foreground p-4 rounded-full flex items-center justify-center h-16 w-16">
                        <ClipboardCheck className="h-8 w-8" />
                    </div>
                    <div>
                        <h3 className="text-xl font-headline">Phase 1: Foundation (Year 1)</h3>
                        <p className="text-muted-foreground">Finalize master plan, secure permits, formalize partnerships, and begin site preparation.</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left-12 duration-700 [animation-delay:200ms]">
                    <div className="bg-primary text-primary-foreground p-4 rounded-full flex items-center justify-center h-16 w-16">
                        <Calendar className="h-8 w-8" />
                    </div>
                    <div>
                        <h3 className="text-xl font-headline">Phase 2: Vertical Construction (Year 2-3)</h3>
                        <p className="text-muted-foreground">Sphere structural completion, facade & tech integration, and development of Innovation Campus.</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left-12 duration-700 [animation-delay:400ms]">
                    <div className="bg-primary text-primary-foreground p-4 rounded-full flex items-center justify-center h-16 w-16">
                        <Rocket className="h-8 w-8" />
                    </div>
                    <div>
                        <h3 className="text-xl font-headline">Phase 3: Launch Readiness (Year 3-4)</h3>
                        <p className="text-muted-foreground">Systems integration, testing, commissioning, staff training, and global marketing launch.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Slide 9: Strategic Partnerships */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline">Strategic Partnerships</h2>
            <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">De-risking execution with a consortium of global leaders who are best-in-class in their respective fields.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
            {partners.map(partner => (
                <GlassCard key={partner.name} className="text-center">
                    <PartnerIcon className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-headline">{partner.name}</h3>
                    <p className="mt-2 text-foreground/80">{partner.description}</p>
                </GlassCard>
            ))}
          </div>
        </section>

        {/* Slide 10: Risk Assessment */}
        <section className="bg-secondary/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-headline">Expanded Risk Assessment & Mitigation</h2>
                <p className="text-muted-foreground mt-2">Proactive management for assured success with robust contingency plans.</p>
            </div>
            <Accordion type="single" collapsible className="w-full max-w-4xl">
              <AccordionItem value="item-1">
                <AccordionTrigger>Execution: Construction cost & timeline overruns.</AccordionTrigger>
                <AccordionContent>Partnering with CSCEC, leveraging prefabrication, and securing a 15% contingency budget.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Market: Global economic downturn impacting travel.</AccordionTrigger>
                <AccordionContent>Dual-engine model provides a hedge. The R&D/Tech sector is less correlated with consumer travel trends.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Technology: Rapid pace of change making investments obsolete.</AccordionTrigger>
                <AccordionContent>Modular, open-architecture design for easy upgrades. The QIC's purpose is to drive change, not just react to it.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Geopolitical: Regional instability or tech transfer restrictions.</AccordionTrigger>
                <AccordionContent>Diversified global partnerships (Europe, Asia, Americas). Position the QIC as a neutral, global "open-source" R&D hub.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Sustainability: High energy/water use from data centers & labs.</AccordionTrigger>
                <AccordionContent>LEED Platinum design is non-negotiable. On-site solar generation and advanced water recycling to power the entire district.</AccordionContent>
              </AccordionItem>
            </Accordion>
        </section>

        {/* Slide 11: Call to Action */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline">A Call to Build the Future of Qatar</h2>
            <p className="text-muted-foreground mt-2">This landmark project is ready for activation. Its success will be a testament to Qatar's vision and ambition.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <GlassCard>
              <h3 className="text-2xl font-headline text-accent">Our Request</h3>
              <p className="mt-2 text-lg">We formally seek the strategic and financial backing of the Qatar Investment Authority to serve as the anchor investor for the QatarSphere District, committing the initial funding tranche to catalyze development.</p>
            </GlassCard>
            <GlassCard>
              <h3 className="text-2xl font-headline text-accent">Immediate Next Steps</h3>
              <ul className="mt-2 space-y-2 list-disc list-inside">
                <li>Secure Board Approval from the QIA board.</li>
                <li>Formalize Partnerships with strategic partners (90 Days).</li>
                <li>Commence Phase 1: design, permitting, and site prep (6 Months).</li>
              </ul>
            </GlassCard>
          </div>
        </section>

        {/* Slide 12: Conclusion */}
        <section className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }} data-ai-hint="futuristic city night data">
          <div className="absolute inset-0 bg-primary/80" />
          <GlassCard className="relative z-10 text-center max-w-4xl animate-in fade-in zoom-in-95 duration-1000">
            <h2 className="text-3xl md:text-5xl font-headline text-white">Investing in the Future Sovereign Capability of Qatar</h2>
            <p className="mt-6 text-lg text-white/90">The QatarSphere District is more than an investment in infrastructure; it is an investment in the future sovereign capability of our nation. A profitable and strategic venture that accelerates the highest aspirations of the Qatar National Vision 2030.</p>
            <p className="mt-8 text-xl font-bold text-accent">Thank you.</p>
          </GlassCard>
        </section>
      </main>
      
      <footer className="bg-secondary/50 text-secondary-foreground py-6">
        <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} QatarSphere District. A project presented to the Qatar Investment Authority.</p>
        </div>
      </footer>
    </div>
  );
}
