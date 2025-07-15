
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { GlassCard } from '@/components/ui/glass-card';
import {
  BrainCircuit,
  Building,
  CheckCircle,
  Cpu,
  Database,
  DollarSign,
  Globe,
  Handshake,
  HeartHandshake,
  Landmark,
  Layers,
  LineChart,
  Map,
  ShieldCheck,
  TrendingUp,
  Book,
  Users2,
  Building2,
  Hotel,
  ShoppingBag,
  FlaskConical,
  Bot,
  Server,
  CircleCheckBig,
} from 'lucide-react';
import { InvestmentChart } from '@/components/investment-chart';
import { cn } from '@/lib/utils';
import DecryptedText from '@/components/decrypted-text';

const FeatureCard = ({
  icon,
  title,
  children,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <Card className={cn('bg-card/30 dark:bg-card/20 h-full', className)}>
    <CardHeader>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{children}</p>
    </CardContent>
  </Card>
);

const ValuePropCard = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <Card className="p-6 text-center bg-card/30 dark:bg-card/20">
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  </Card>
);

export default function Home({}: {}) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a className="flex items-center gap-2" href="/">
            <Landmark className="h-6 w-6" />
            <span className="font-bold">QatarSphere</span>
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Slide 1: Title */}
        <section
          id="title"
          className="relative flex h-[calc(100vh-4rem)] flex-col items-center justify-center text-center"
        >
          <div className="container">
            <h1 className="text-4xl font-headline font-bold md:text-6xl lg:text-7xl">
              The QatarSphere District
            </h1>
            <div className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
              <DecryptedText
                text="A Landmark Investment in Qatar's Future: Building the World's First Cognitive City, a Hub for Technology, Tourism, and Talent."
                animateOn="view"
                sequential
                revealDirection="start"
                speed={20}
                maxIterations={10}
                parentClassName="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl"
              />
            </div>
            <GlassCard className="mt-8 inline-block py-3 px-6 text-sm">
              <p className="font-semibold">Presented by:</p>
              <p className="text-muted-foreground">
                His Excellency Sheikh Jabr bin Thani Al Thani
              </p>
            </GlassCard>
          </div>
          <div className="absolute inset-0 -z-10 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-700/30"></div>
        </section>

        {/* Slide 2: Executive Summary */}
        <section id="executive-summary">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-headline font-bold md:text-4xl">Executive Summary</h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
                A Vision for National Prosperity &amp; Technological Sovereignty. We present the QatarSphere District—a strategic national project designed not just to lead in entertainment, but to become a global epicenter for the next industrial revolution.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <FeatureCard icon={<Cpu size={28} />} title="The Proposal">
                A <b>$4.2 billion total investment</b> to develop the world&apos;s first
                &quot;cognitive city&quot; district.
              </FeatureCard>
              <FeatureCard icon={<TrendingUp size={28} />} title="The Dual Engine">
                Adds <b>QAR 20-30B ($5.5-8.2B USD)</b> annually to GDP, creating a powerful new
                economic driver.
              </FeatureCard>
              <FeatureCard icon={<ShieldCheck size={28} />} title="Strategic Imperative">
                Moves beyond tourism to create a living laboratory for AI, Quantum Computing, and
                Robotics, aligning with QNV 2030.
              </FeatureCard>
              <FeatureCard icon={<Handshake size={28} />} title="The Ask">
                Seeking QIA&apos;s backing to anchor this nation-building project and secure
                Qatar&apos;s position as a global leader.
              </FeatureCard>
            </div>
          </div>
        </section>

        {/* Slide 3: A New Paradigm */}
        <section id="new-paradigm">
          <div className="container grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-headline font-bold">
                A New Paradigm: Beyond Entertainment
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                From an Entertainment Venue to a Cognitive Hub. While competitors focus on building bigger screens, we will build a smarter city. The QatarSphere District's vision transcends entertainment to become a globally significant hub for technological innovation.
              </p>
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">The Entertainment Layer</h3>
                    <p className="text-muted-foreground">
                      A world-class destination attracting 3.2 million visitors annually, serving
                      as the public face and a key revenue driver.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BrainCircuit size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">The Technology Core</h3>
                    <p className="text-muted-foreground">
                      A Special Economic and Technology Zone (SET-Zone) to attract leaders in AI,
                      Quantum Computing, Advanced Robotics, and Blockchain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src="https://placehold.co/600x700.png"
              width={600}
              height={700}
              alt="Futuristic Laboratory"
              className="rounded-2xl object-cover"
              data-ai-hint="futuristic laboratory"
            />
          </div>
        </section>

        {/* Slide 4: Proposed Solution */}
        <section id="solution">
          <div className="container space-y-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-headline font-bold md:text-4xl">
                Proposed Solution: A Dual-Purpose Ecosystem
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
                Our 850,000-square-meter district is designed with two synergistic purposes, creating a virtuous cycle of innovation and experience.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden bg-card/30 dark:bg-card/20">
                <CardContent className="p-0">
                  <Image
                    src="https://placehold.co/600x400.png"
                    width={600}
                    height={400}
                    alt="Public Experience"
                    className="w-full object-cover"
                    data-ai-hint="modern entertainment venue"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">Zone 1: The Public Experience</h3>
                    <ul className="mt-4 space-y-4 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <Building2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span>
                          The QatarSphere venue, with dynamic, submersible stages.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Hotel className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span>Luxury hotels with 2,500 rooms.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ShoppingBag className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span>200+ retail spaces and a 2-mile entertainment promenade.</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden bg-card/30 dark:bg-card/20">
                <CardContent className="p-0">
                  <Image
                    src="https://placehold.co/600x400.png"
                    width={600}
                    height={400}
                    alt="Innovation Campus"
                    className="w-full object-cover"
                    data-ai-hint="futuristic research lab"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">Zone 2: The Qatar Innovation Campus</h3>
                    <ul className="mt-4 space-y-4 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <FlaskConical className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span>State-of-the-art R&amp;D facilities and secure data centers.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Bot className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span>
                          &quot;Sandbox&quot; environments for testing autonomous robots and AI
                          systems.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Server className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span>
                          Corporate headquarters and startup incubators for global tech firms.
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Slide 5: National & Cultural Impact */}
        <section id="impact">
          <div className="container space-y-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-headline font-bold md:text-4xl">
                National &amp; Cultural Impact
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
                Fulfilling an Accelerated Vision for 2030, this project is a powerful catalyst for our national vision, creating parallel streams of human and economic development.
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <FeatureCard icon={<Book size={28} />} title="Celebrate Heritage, Power the Future">
                A unique brand of &apos;Culture &amp; Code&apos; to define Qatar&apos;s global
                identity, featuring a Qatar Heritage Pavilion.
              </FeatureCard>
              <FeatureCard icon={<Users2 size={28} />} title="Build a Knowledge Workforce">
                A National Technology Fellowship to develop elite Qatari talent in AI, quantum
                mechanics, and robotics.
              </FeatureCard>
              <FeatureCard icon={<HeartHandshake size={28} />} title="Enhance Community Well-being">
                World-class public spaces, family-friendly programming, and a new source of
                national pride.
              </FeatureCard>
            </div>
          </div>
        </section>

        {/* Slide 6: Redefined Value Proposition */}
        <section id="value-proposition">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-headline font-bold md:text-4xl">
                A Redefined Value Proposition
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
                A multiplier effect on national value. The QatarSphere District delivers a strategic return far greater than a standalone tourism project.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <ValuePropCard icon={<TrendingUp size={28} />} title="Economic Diversification" />
              <ValuePropCard icon={<ShieldCheck size={28} />} title="Technological Sovereignty" />
              <ValuePropCard icon={<Globe size={28} />} title="Global Influence" />
              <ValuePropCard icon={<BrainCircuit size={28} />} title="Human Capital" />
            </div>
          </div>
        </section>

        {/* Slide 7: Financial Overview */}
        <section id="financials">
          <div className="container grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-headline font-bold">Financial Overview</h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                A sound and highly profitable national investment built on rigorous analysis and a resilient, diversified revenue strategy.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-6 text-center md:text-left">
                <div>
                  <p className="text-3xl font-bold">$4.2B</p>
                  <p className="text-sm text-muted-foreground">Total Investment</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">$1.8B</p>
                  <p className="text-sm text-muted-foreground">Projected Annual Revenue</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">~2.3 Yrs</p>
                  <p className="text-sm text-muted-foreground">Payback Period</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">QAR 20-30B</p>
                  <p className="text-sm text-muted-foreground">Annual GDP Contribution</p>
                </div>
              </div>
            </div>
            <div className="min-h-[300px] rounded-2xl bg-card/30 p-4">
              <InvestmentChart />
            </div>
          </div>
        </section>

        {/* Slide 8: Implementation Roadmap */}
        <section id="roadmap">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-headline font-bold md:text-4xl">
                Implementation Roadmap: 2025-2028
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
                An aggressive yet achievable 36-month construction and development plan, ensuring a grand opening in 2028.
              </p>
            </div>
            <div className="relative mt-12">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
              <div className="relative flex justify-center">
                <div className="flex w-full items-center justify-end md:w-1/2 md:pr-8">
                  <Card className="w-full md:max-w-md bg-card/30">
                    <CardHeader>
                      <CardTitle>Phase 1: Foundation (Year 1)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Finalize master plan, secure permits, formalize partnerships, and begin
                        site preparation.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background text-primary font-bold">
                    1
                  </div>
                </div>
                <div className="hidden w-1/2 md:block"></div>
              </div>
              <div className="relative mt-8 flex justify-center">
                <div className="hidden w-1/2 md:block"></div>
                <div className="flex w-full items-center justify-start md:w-1/2 md:pl-8">
                  <Card className="w-full md:max-w-md bg-card/30">
                    <CardHeader>
                      <CardTitle>Phase 2: Vertical Construction (Year 2-3)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Sphere structural completion, facade &amp; tech integration. Develop
                        Innovation Campus.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background text-primary font-bold">
                    2
                  </div>
                </div>
              </div>
              <div className="relative mt-8 flex justify-center">
                <div className="flex w-full items-center justify-end md:w-1/2 md:pr-8">
                  <Card className="w-full md:max-w-md bg-card/30">
                    <CardHeader>
                      <CardTitle>Phase 3: Launch Readiness (Year 3-4)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Systems integration, testing, commissioning, and global marketing launch.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background text-primary font-bold">
                    3
                  </div>
                </div>
                <div className="hidden w-1/2 md:block"></div>
              </div>
              <div className="relative mt-8 flex justify-center">
                <div className="hidden w-1/2 md:block"></div>
                <div className="flex w-full items-center justify-start md:w-1/2 md:pl-8">
                  <Card className="w-full border-green-500/50 md:max-w-md bg-card/30">
                    <CardHeader>
                      <CardTitle className="text-green-600">
                        TARGET: GRAND OPENING Q4 2028
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-500 bg-green-500/20 text-green-500">
                    <CircleCheckBig />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 9: Strategic Partnerships */}
        <section id="partnerships">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-headline font-bold md:text-4xl">Strategic Partnerships</h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
                De-risking execution with a consortium of world-class leaders in their respective fields.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <FeatureCard icon={<Building size={28} />} title="CSCEC">
                Construction partner, the world&apos;s largest contractor, ensuring on-time
                delivery.
              </FeatureCard>
              <FeatureCard icon={<Cpu size={28} />} title="Tencent">
                Technology &amp; AI partner to power immersive content and personalization engines.
              </FeatureCard>
              <FeatureCard icon={<Database size={28} />} title="Alibaba">
                Cloud &amp; Data partner for robust, real-time smart city management.
              </FeatureCard>
              <FeatureCard icon={<Layers size={28} />} title="Wanda Group">
                Entertainment content partner for co-developing world-class shows.
              </FeatureCard>
            </div>
          </div>
        </section>

        {/* Slide 10: Risk Assessment */}
        <section id="risk">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-headline font-bold md:text-4xl">
                Expanded Risk Assessment &amp; Mitigation
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
                Proactive management for assured success with robust contingency plans.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard icon={<DollarSign size={28} />} title="Execution Risk">
                <b>Mitigation:</b> Partnering with CSCEC, leveraging prefabrication, and securing a
                15% contingency budget.
              </FeatureCard>
              <FeatureCard icon={<LineChart size={28} />} title="Market Risk">
                <b>Mitigation:</b> Dual-engine model hedges risk, as the R&amp;D/Tech sector is less
                correlated with consumer travel.
              </FeatureCard>
              <FeatureCard icon={<Cpu size={28} />} title="Technology Risk">
                <b>Mitigation:</b> Modular, open-architecture design for easy upgrades. The
                QIC&apos;s purpose is to drive change.
              </FeatureCard>
              <FeatureCard icon={<Map size={28} />} title="Geopolitical Risk">
                <b>Mitigation:</b> Diversified global partnerships. Position QIC as a neutral,
                &quot;open-source&quot; R&amp;D hub.
              </FeatureCard>
              <FeatureCard icon={<Globe size={28} />} title="Sustainability Risk">
                <b>Mitigation:</b> LEED Platinum design, on-site solar generation, and advanced
                water recycling.
              </FeatureCard>
            </div>
          </div>
        </section>

        {/* Slide 11: Call to Action */}
        <section id="cta">
          <div className="container grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-headline font-bold">Call to Action</h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                This landmark project is ready for activation. Its success will be a testament to Qatar's vision and ambition.
              </p>
            </div>
            <div className="space-y-6">
              <Card className="bg-card/30">
                <CardHeader>
                  <CardTitle>Our Request</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We formally seek the strategic and financial backing of the Qatar Investment
                    Authority to serve as the anchor investor for the QatarSphere District.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/30">
                <CardHeader>
                  <CardTitle>Immediate Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CircleCheckBig className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <span>
                        <span className="font-bold">Secure Board Approval</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CircleCheckBig className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <span>
                        <span className="font-bold">Formalize Partnerships (90 Days)</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CircleCheckBig className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <span>
                        <span className="font-bold">Commence Phase 1 (6 Months)</span>
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Slide 12: Conclusion */}
        <section id="conclusion" className="bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-headline font-bold md:text-4xl">
              Investing in the Future Sovereign Capability of Qatar
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-primary-foreground/80 md:text-xl">
              More than an investment in infrastructure, this is an investment in our nation's future. It is a powerful economic engine, a global symbol of innovation, and a profitable venture that accelerates the highest aspirations of the Qatar National Vision 2030.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary">
                We Welcome Your Questions
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} QatarSphere District. A project presented to the Qatar
            Investment Authority.
          </p>
        </div>
      </footer>
    </div>
  );
}
