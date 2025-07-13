import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  ArrowRight,
  BrainCircuit,
  Building,
  CheckCircle,
  ChevronRight,
  ClipboardCheck,
  Cpu,
  Database,
  DollarSign,
  GanttChartSquare,
  Globe,
  Handshake,
  HeartHandshake,
  Landmark,
  Lightbulb,
  LineChart,
  Map,
  Package,
  ShieldCheck,
  TrendingUp,
  Users,
  Award,
  BarChart,
  PieChart,
  Wallet,
  Calendar,
  Layers,
  Bot,
  FlaskConical,
  Building2,
  Hotel,
  ShoppingBag,
  Server,
  Group,
} from 'lucide-react';
import { InvestmentChart } from '@/components/investment-chart';

const FeatureCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <Card className="h-full">
    <CardHeader className="flex-row items-center gap-4">
      {icon}
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-muted-foreground">{children}</div>
    </CardContent>
  </Card>
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Landmark className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                QatarSphere
              </span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center">
              <Button>QIA Portal</Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container relative py-6">
          <div className="space-y-4">
            {/* Slide 1: Title */}
            <section id="title" className="w-full">
              <Card className="w-full">
                <CardHeader>
                    <p className="text-sm font-semibold text-primary">Slide 1</p>
                    <CardTitle className="font-headline text-3xl">The QatarSphere District: A Landmark Investment in Qatar&apos;s Future</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-headline text-lg text-muted-foreground">Building the World&apos;s First Cognitive City: A Hub for Technology, Tourism, and Talent</p>
                  <div className="relative">
                     <Image
                        src="https://placehold.co/1200x600.png"
                        alt="QatarSphere Hero Image"
                        width={1200}
                        height={600}
                        className="w-full rounded-lg object-cover"
                        data-ai-hint="futuristic city dusk"
                    />
                    <div className="absolute bottom-4 right-4 rounded-lg bg-background/80 p-4 text-sm backdrop-blur-sm">
                        <p className="font-bold">Presented by:</p>
                        <p>His Excellency Sheikh Jabr bin Thani Al Thani</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center items-center gap-8 text-muted-foreground">
                    <p className="text-xs">Qatar Investment Authority</p>
                    <p className="text-xs">Qatar National Vision 2030</p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Slide 2: Executive Summary */}
            <section id="executive-summary" className="w-full">
                <Card className="w-full">
                    <CardHeader>
                        <p className="text-sm font-semibold text-primary">Slide 2</p>
                        <CardTitle className="font-headline text-3xl">Executive Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="max-w-3xl text-muted-foreground">A Vision for National Prosperity &amp; Technological Sovereignty. We present the QatarSphere District—a strategic national project designed not just to lead in entertainment, but to become a global epicenter for the next industrial revolution.</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                           <Card><CardHeader><Cpu className="h-8 w-8 mb-2 text-primary" /><CardTitle>The Proposal</CardTitle></CardHeader><CardContent><span className="font-bold">$4.2B investment</span> to develop the world&apos;s first &quot;cognitive city&quot; district, including the QatarSphere venue and an integrated R&D campus.</CardContent></Card>
                            <Card><CardHeader><TrendingUp className="h-8 w-8 mb-2 text-primary" /><CardTitle>The Dual Engine</CardTitle></CardHeader><CardContent>Adds <span className="font-bold">QAR 20-30B</span> ($5.5-8.2B USD) annually to GDP, creating a powerful new economic driver.</CardContent></Card>
                            <Card><CardHeader><BrainCircuit className="h-8 w-8 mb-2 text-primary" /><CardTitle>The Strategic Imperative</CardTitle></CardHeader><CardContent>A living laboratory for AI, Quantum Computing, and Robotics, aligning with QNV 2030&apos;s goal of a diversified, knowledge-based economy.</CardContent></Card>
                            <Card><CardHeader><Handshake className="h-8 w-8 mb-2 text-primary" /><CardTitle>The Ask</CardTitle></CardHeader><CardContent>Seeking QIA&apos;s backing to anchor this nation-building project and secure Qatar&apos;s position as a global technology and tourism leader.</CardContent></Card>
                        </div>
                    </CardContent>
                </Card>
            </section>
            
            {/* Slide 3: A New Paradigm */}
            <section id="new-paradigm" className="w-full">
              <Card className="w-full">
                  <CardHeader>
                      <p className="text-sm font-semibold text-primary">Slide 3</p>
                      <CardTitle className="font-headline text-3xl">A New Paradigm: Beyond Entertainment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                      <p className="max-w-3xl text-muted-foreground">While competitors focus on building bigger screens, we will build a smarter city. The QatarSphere District&apos;s vision transcends entertainment to become a globally significant hub for technological innovation.</p>
                      <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        <div className="space-y-4">
                           <FeatureCard icon={<Globe className="w-8 h-8 text-primary" />} title="The Entertainment Layer">
                                <p>A world-class destination attracting 3.2 million visitors annually, serving as the public face and a key revenue driver for the entire ecosystem.</p>
                           </FeatureCard>
                           <FeatureCard icon={<Cpu className="w-8 h-8 text-primary" />} title="The Technology Core">
                                <>
                                <p>A Special Economic and Technology Zone (SET-Zone) to attract leaders in:</p>
                                <ul className="mt-4 space-y-2 list-disc pl-5">
                                    <li>Artificial Intelligence (AI), LLMs, and AGI Research</li>
                                    <li>Quantum Computing & Secure Communications</li>
                                    <li>Advanced Robotics & Automation</li>
                                    <li>Blockchain & Decentralized Systems</li>
                                </ul>
                                </>
                            </FeatureCard>
                        </div>
                         <Image src="https://placehold.co/600x600.png" width={600} height={600} alt="Futuristic Laboratory" className="rounded-lg object-cover w-full h-full" data-ai-hint="futuristic laboratory" />

                      </div>
                       <CardDescription>The Sphere itself will serve as the ultimate showcase—the world&apos;s most advanced public demonstration of these integrated technologies, creating an unmatched competitive moat.</CardDescription>
                  </CardContent>
              </Card>
            </section>

            {/* Slide 4: Proposed Solution */}
            <section id="solution" className="w-full">
                <Card className="w-full">
                    <CardHeader>
                        <p className="text-sm font-semibold text-primary">Slide 4</p>
                        <CardTitle className="font-headline text-3xl">Proposed Solution: A Dual-Purpose Ecosystem</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="max-w-3xl text-muted-foreground">Our 850,000-square-meter district is designed with two synergistic purposes, creating a virtuous cycle of innovation and experience.</p>
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                             <Card>
                                <CardContent className="p-4">
                                <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Public Experience" className="rounded-lg mb-6" data-ai-hint="modern entertainment venue" />
                                <div className="px-2 pb-2">
                                    <h3 className="text-2xl font-bold">Zone 1: The Public Experience</h3>
                                    <ul className="mt-4 space-y-4 text-muted-foreground">
                                    <li className="flex items-start gap-4"><Building2 className="h-5 w-5 text-primary shrink-0 mt-1" /><span>The QatarSphere venue, with dynamic, submersible stages.</span></li>
                                    <li className="flex items-start gap-4"><Hotel className="h-5 w-5 text-primary shrink-0 mt-1" /><span>Luxury hotels with 2,500 rooms.</span></li>
                                    <li className="flex items-start gap-4"><ShoppingBag className="h-5 w-5 text-primary shrink-0 mt-1" /><span>200+ retail spaces and a 2-mile entertainment promenade.</span></li>
                                    </ul>
                                </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4">
                                <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Innovation Campus" className="rounded-lg mb-6" data-ai-hint="futuristic research lab" />
                                <div className="px-2 pb-2">
                                    <h3 className="text-2xl font-bold">Zone 2: The Qatar Innovation Campus</h3>
                                    <ul className="mt-4 space-y-4 text-muted-foreground">
                                    <li className="flex items-start gap-4"><FlaskConical className="h-5 w-5 text-primary shrink-0 mt-1" /><span>State-of-the-art R&D facilities and secure data centers.</span></li>
                                    <li className="flex items-start gap-4"><Bot className="h-5 w-5 text-primary shrink-0 mt-1" /><span>&quot;Sandbox&quot; environments for testing autonomous robots and AI systems.</span></li>
                                    <li className="flex items-start gap-4"><Server className="h-5 w-5 text-primary shrink-0 mt-1" /><span>Corporate headquarters and startup incubators for global tech firms.</span></li>
                                    </ul>
                                </div>
                                </CardContent>
                            </Card>
                        </div>
                         <CardDescription>This dual-purpose design creates a virtuous cycle: the entertainment district funds and showcases the innovation, while the technology campus continuously enhances the visitor experience, keeping it years ahead of any competitor.</CardDescription>
                    </CardContent>
                </Card>
            </section>
            
            {/* Slide 5: National & Cultural Impact */}
            <section id="impact" className="w-full">
                <Card className="w-full">
                    <CardHeader>
                        <p className="text-sm font-semibold text-primary">Slide 5</p>
                        <CardTitle className="font-headline text-3xl">National & Cultural Impact</CardTitle>
                    </CardHeader>
                     <CardContent className="space-y-6">
                        <p className="max-w-3xl text-muted-foreground">Fulfilling an Accelerated Vision for 2030, this project is a powerful catalyst for our national vision, creating parallel streams of human and economic development.</p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <FeatureCard icon={<Landmark size={28} className="text-primary"/>} title="Celebrate Heritage, Power the Future"><p>A unique brand of &apos;Culture & Code&apos; to define Qatar&apos;s global identity, featuring a Qatar Heritage Pavilion.</p></FeatureCard>
                            <FeatureCard icon={<Users size={28} className="text-primary"/>} title="Build a Knowledge Workforce"><p>A National Technology Fellowship to develop elite Qatari talent in AI, quantum mechanics, and robotics.</p></FeatureCard>
                            <FeatureCard icon={<HeartHandshake size={28} className="text-primary"/>} title="Enhance Community Well-being"><p>World-class public spaces, family-friendly programming, and a new source of national pride.</p></FeatureCard>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Slide 6: A Redefined Value Proposition */}
            <section id="value-proposition" className="w-full">
              <Card>
                <CardHeader>
                  <p className="text-sm font-semibold text-primary">Slide 6</p>
                  <CardTitle className="font-headline text-3xl">A Redefined Value Proposition</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p className="max-w-3xl text-muted-foreground">A multiplier effect on national value. The QatarSphere District delivers a strategic return far greater than a standalone tourism project.</p>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card><CardHeader><TrendingUp className="h-8 w-8 text-primary mb-2" /><CardTitle>Economic Diversification</CardTitle></CardHeader><CardContent>$1.8B+ in annual revenue from tourism, tech licensing, and corporate tenancies.</CardContent></Card>
                        <Card><CardHeader><ShieldCheck className="h-8 w-8 text-primary mb-2" /><CardTitle>Technological Sovereignty</CardTitle></CardHeader><CardContent>Fostering homegrown innovation and valuable IP, reducing reliance on foreign tech.</CardContent></Card>
                        <Card><CardHeader><Globe className="h-8 w-8 text-primary mb-2" /><CardTitle>Global Influence</CardTitle></CardHeader><CardContent>The &quot;Davos&quot; of the next tech revolution, a hub for &quot;Tech-Diplomacy&quot;.</CardContent></Card>
                        <Card><CardHeader><BrainCircuit className="h-8 w-8 text-primary mb-2" /><CardTitle>Human Capital</CardTitle></CardHeader><CardContent>A magnet for world-class scientific talent and upskilling Qataris.</CardContent></Card>
                    </div>
                </CardContent>
              </Card>
            </section>

            {/* Slide 7: Financial Overview */}
            <section id="financials" className="w-full">
                <Card className="w-full">
                    <CardHeader>
                        <p className="text-sm font-semibold text-primary">Slide 7</p>
                        <CardTitle className="font-headline text-3xl">Financial Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                         <p className="max-w-3xl text-muted-foreground">A sound and highly profitable national investment built on rigorous analysis and a resilient, diversified revenue strategy.</p>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                                <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4"><Wallet className="h-10 w-10 text-primary" /><p className="font-bold text-lg">$2.8B</p><p className="text-xs text-muted-foreground">Sphere Venue Investment</p></div>
                                <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4"><Building className="h-10 w-10 text-primary" /><p className="font-bold text-lg">$1.4B</p><p className="text-xs text-muted-foreground">District Infra. Investment</p></div>
                                <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4"><DollarSign className="h-10 w-10 text-primary" /><p className="font-bold text-lg">$4.2B</p><p className="text-xs text-muted-foreground">Total Investment</p></div>
                                <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4"><LineChart className="h-10 w-10 text-primary" /><p className="font-bold text-lg">$1.8B</p><p className="text-xs text-muted-foreground">Projected Annual Revenue</p></div>
                                <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4"><Calendar className="h-10 w-10 text-primary" /><p className="font-bold text-lg">~2.3 Yrs</p><p className="text-xs text-muted-foreground">Payback Period</p></div>
                                <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4"><Award className="h-10 w-10 text-primary" /><p className="font-bold text-lg">QAR 20-30B</p><p className="text-xs text-muted-foreground">Annual GDP Contribution</p></div>
                            </div>
                            <div className="min-h-[300px]">
                                <InvestmentChart />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>
            
            {/* Slide 8: Implementation Roadmap */}
            <section id="roadmap" className="w-full">
                <Card className="w-full">
                    <CardHeader>
                        <p className="text-sm font-semibold text-primary">Slide 8</p>
                        <CardTitle className="font-headline text-3xl">Implementation Roadmap: 2025-2028</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="max-w-3xl text-muted-foreground">An aggressive yet achievable 36-month construction and development plan, ensuring a grand opening in 2028.</p>
                         <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:md:mx-auto before:md:w-0.5">
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-primary/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="font-bold text-primary">1</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]"><div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm"> <h3 className="font-semibold">Phase 1: Foundation (Year 1)</h3> <p className="text-sm text-muted-foreground">Finalize master plan, secure permits, formalize partnerships, and begin site preparation.</p></div></div>
                            </div>
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-primary/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="font-bold text-primary">2</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]"><div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm"> <h3 className="font-semibold">Phase 2: Vertical Construction (Year 2-3)</h3> <p className="text-sm text-muted-foreground">Sphere structural completion, facade & tech integration. Develop Innovation Campus.</p></div></div>
                            </div>
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-primary/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="font-bold text-primary">3</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]"><div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm"> <h3 className="font-semibold">Phase 3: Launch Readiness (Year 3-4)</h3> <p className="text-sm text-muted-foreground">Systems integration, testing, commissioning, and global marketing launch.</p></div></div>
                            </div>
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                               <div className="flex items-center justify-center w-10 h-10 rounded-full border border-green-500 bg-green-500/20 text-green-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <CheckCircle />
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]"><div className="p-4 rounded-lg border border-green-500/50 bg-card text-card-foreground shadow-sm"> <h3 className="font-semibold text-green-600">TARGET: GRAND OPENING Q4 2028</h3></div></div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Slide 9: Strategic Partnerships */}
            <section id="partnerships" className="w-full">
                <Card>
                    <CardHeader>
                        <p className="text-sm font-semibold text-primary">Slide 9</p>
                        <CardTitle className="font-headline text-3xl">Strategic Partnerships</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="max-w-3xl text-muted-foreground">De-risking execution with a consortium of world-class leaders in their respective fields.</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <FeatureCard icon={<Building className="w-8 h-8 text-primary" />} title="CSCEC">Construction partner, the world&apos;s largest contractor, ensuring on-time delivery.</FeatureCard>
                            <FeatureCard icon={<Cpu className="w-8 h-8 text-primary" />} title="Tencent">Technology & AI partner to power immersive content and personalization engines.</FeatureCard>
                            <FeatureCard icon={<Database className="w-8 h-8 text-primary" />} title="Alibaba">Cloud & Data partner for robust, real-time smart city management.</FeatureCard>
                            <FeatureCard icon={<Layers className="w-8 h-8 text-primary" />} title="Wanda Group">Entertainment content partner for co-developing world-class shows.</FeatureCard>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Slide 10: Expanded Risk Assessment & Mitigation */}
            <section id="risk" className="w-full">
                <Card>
                    <CardHeader>
                        <p className="text-sm font-semibold text-primary">Slide 10</p>
                        <CardTitle className="font-headline text-3xl">Expanded Risk Assessment & Mitigation</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                         <p className="max-w-3xl text-muted-foreground">Proactive management for assured success with robust contingency plans.</p>
                         <div className="grid md:grid-cols-2 gap-6">
                            <FeatureCard icon={<DollarSign className="w-8 h-8 text-primary" />} title="Execution Risk">
                                <p><b>Risk:</b> Cost & timeline overruns. <br/><b>Mitigation:</b> Partnering with CSCEC, leveraging prefabrication, and securing a 15% contingency budget.</p>
                            </FeatureCard>
                            <FeatureCard icon={<LineChart className="w-8 h-8 text-primary" />} title="Market Risk">
                                <p><b>Risk:</b> Global economic downturn. <br/><b>Mitigation:</b> Dual-engine model hedges risk, as the R&D/Tech sector is less correlated with consumer travel.</p>
                            </FeatureCard>
                            <FeatureCard icon={<Cpu className="w-8 h-8 text-primary" />} title="Technology Risk">
                                <p><b>Risk:</b> Rapid pace of change. <br/><b>Mitigation:</b> Modular, open-architecture design for easy upgrades. The QIC&apos;s purpose is to drive change.</p>
                            </FeatureCard>
                            <FeatureCard icon={<Map className="w-8 h-8 text-primary" />} title="Geopolitical Risk">
                                <p><b>Risk:</b> Regional instability. <br/><b>Mitigation:</b> Diversified global partnerships. Position QIC as a neutral, &quot;open-source&quot; R&D hub.</p>
                            </FeatureCard>
                             <FeatureCard icon={<Globe className="w-8 h-8 text-primary" />} title="Sustainability Risk">
                                <p><b>Risk:</b> High energy/water use. <br/><b>Mitigation:</b> LEED Platinum design, on-site solar generation, and advanced water recycling.</p>
                            </FeatureCard>
                         </div>
                    </CardContent>
                </Card>
            </section>

            {/* Slide 11: Call to Action */}
            <section id="cta" className="w-full">
                <Card>
                    <CardHeader>
                        <p className="text-sm font-semibold text-primary">Slide 11</p>
                        <CardTitle className="font-headline text-3xl">Call to Action</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                         <p className="max-w-3xl text-muted-foreground">This landmark project is ready for activation. Its success will be a testament to Qatar&apos;s vision and ambition.</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader><CardTitle>Our Request</CardTitle></CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">We formally seek the strategic and financial backing of the Qatar Investment Authority to serve as the anchor investor for the QatarSphere District, committing the initial funding tranche to catalyze development.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle>Immediate Next Steps</CardTitle></CardHeader>
                                <CardContent>
                                    <ul className="space-y-4 text-muted-foreground">
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" /><span><span className="font-bold">Secure Board Approval:</span> Obtain formal approval from the QIA board.</span></li>
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" /><span><span className="font-bold">Formalize Partnerships (90 Days):</span> Execute definitive agreements.</span></li>
                                        <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" /><span><span className="font-bold">Commence Phase 1 (6 Months):</span> Release funding for design and site prep.</span></li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Slide 12: Conclusion */}
            <section id="conclusion" className="w-full">
                <Card className="bg-primary text-primary-foreground">
                    <CardHeader>
                         <p className="text-sm font-semibold text-primary-foreground/80">Slide 12</p>
                         <CardTitle className="font-headline text-3xl">Investing in the Future Sovereign Capability of Qatar</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="max-w-3xl mx-auto text-lg text-primary-foreground/80">
                            More than an investment in infrastructure, this is an investment in our nation&apos;s future. It is a powerful economic engine, a global symbol of innovation, and a profitable venture that accelerates the highest aspirations of the Qatar National Vision 2030.
                        </p>
                        <div className="text-center">
                            <Button size="lg" variant="secondary">
                                We Welcome Your Questions
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                &copy; {new Date().getFullYear()} QatarSphere District. A project presented to the Qatar Investment Authority.
            </p>
        </div>
      </footer>
    </div>
  );
}
