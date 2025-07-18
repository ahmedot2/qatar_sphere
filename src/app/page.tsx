
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
  Target,
  RefreshCw,
  AreaChart,
  Orbit,
  Wrench,
  Activity,
  Replace,
  Globe2,
  Recycle,
} from 'lucide-react';
import { InvestmentChart } from '@/components/investment-chart';
import { cn } from '@/lib/utils';
import DecryptedText from '@/components/decrypted-text';
import AnimatedCounter from '@/components/animated-counter';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ExecutiveSummaryCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      'group relative rounded-2xl bg-white/50 dark:bg-black/20 p-6 shadow-soft-light dark:shadow-soft-dark',
      'transition-all duration-300 ease-in-out',
      'hover:shadow-soft-light-hover dark:hover:shadow-soft-dark-hover hover:scale-[1.02]'
    )}
  >
    <div className="flex items-center gap-4">
      <div
        className={cn(
          'flex h-11 w-11 items-center justify-center rounded-lg bg-gray-200/70 dark:bg-gray-800/60',
          'transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary'
        )}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
    </div>
    <div className="mt-4 text-gray-600 dark:text-gray-400">
      <p>{children}</p>
    </div>
    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
         style={{
           background:
             'radial-gradient(400px circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 80%)',
         }}
    />
  </div>
);

const SolutionCard = ({
  icon,
  title,
  children,
  imageSrc,
  imageAlt,
  imageHint,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageHint: string;
}) => (
  <div
    className={cn(
      'group relative overflow-hidden rounded-2xl bg-white/50 dark:bg-black/20 shadow-soft-light dark:shadow-soft-dark',
      'transition-all duration-300 ease-in-out',
      'hover:shadow-soft-light-hover dark:hover:shadow-soft-dark-hover hover:scale-[1.02]'
    )}
  >
    <Image
      src={imageSrc}
      width={600}
      height={400}
      alt={imageAlt}
      className="w-full object-cover"
      data-ai-hint={imageHint}
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold">{title}</h3>
      <ul className="mt-4 space-y-4 text-muted-foreground">{children}</ul>
    </div>
    <div
      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background: 'radial-gradient(600px circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 80%)',
      }}
    />
  </div>
);


const ImpactCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      'group relative rounded-2xl bg-white/50 dark:bg-black/20 p-6 shadow-soft-light dark:shadow-soft-dark',
      'transition-all duration-300 ease-in-out h-full',
      'hover:shadow-soft-light-hover dark:hover:shadow-soft-dark-hover hover:scale-[1.02]'
    )}
  >
    <div className="flex items-start gap-6">
      <div
        className={cn(
          'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gray-200/70 dark:bg-gray-800/60',
          'transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary'
        )}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="mt-2 text-gray-600 dark:text-gray-400">{children}</p>
      </div>
    </div>
    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
         style={{
           background:
             'radial-gradient(400px circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 80%)',
         }}
    />
  </div>
);

const PartnerCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      'group relative rounded-2xl bg-white/50 dark:bg-black/20 p-6 shadow-soft-light dark:shadow-soft-dark h-full',
      'transition-all duration-300 ease-in-out',
      'hover:shadow-soft-light-hover dark:hover:shadow-soft-dark-hover hover:-translate-y-1'
    )}
  >
    <div className="flex items-center gap-4">
      <div
        className={cn(
          'flex h-11 w-11 items-center justify-center rounded-lg bg-gray-200/70 dark:bg-gray-800/60',
          'transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary'
        )}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
    </div>
    <p className="mt-4 text-gray-600 dark:text-gray-400">{children}</p>
    <div
      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background: 'radial-gradient(400px circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 80%)',
      }}
    />
  </div>
);

const ValuePropCard = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className={cn(
    'group relative rounded-2xl bg-white/50 dark:bg-black/20 p-6 shadow-soft-light dark:shadow-soft-dark text-center',
    'transition-all duration-300 ease-in-out',
    'hover:shadow-soft-light-hover dark:hover:shadow-soft-dark-hover hover:-translate-y-1'
  )}>
    <div className="flex flex-col items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200/70 dark:bg-gray-800/60 transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
    </div>
     <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
         style={{
           background:
             'radial-gradient(400px circle at 50% 0%, hsl(var(--primary) / 0.1), transparent 80%)',
         }}
    />
  </div>
);

const FinancialMetricCard = ({
  icon,
  label,
  value,
  prefix,
  postfix,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  prefix?: string;
  postfix?: string;
  className?: string;
}) => (
  <GlassCard
    className={cn(
      'group relative transition-all duration-300 ease-in-out',
      'hover:scale-[1.02]',
      'flex flex-col p-6',
      className
    )}
  >
    <div className="flex items-center justify-between text-muted-foreground">
      <span>{label}</span>
      {icon}
    </div>
    <div className="text-3xl font-bold md:text-4xl">
      {typeof value === 'number' ? (
        <AnimatedCounter value={value} prefix={prefix} postfix={postfix} />
      ) : (
        <span>{value}</span>
      )}
    </div>
    <div
      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background: 'radial-gradient(600px circle at 50% 100%, hsl(var(--primary) / 0.1), transparent 80%)',
      }}
    />
  </GlassCard>
);

const RoadmapTimelineItem = ({
  side,
  phase,
  title,
  description,
  isTarget = false,
}: {
  side: 'left' | 'right';
  phase?: number;
  title: string;
  description?: string;
  isTarget?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const desktopVariants = {
    hidden: { opacity: 0, x: side === 'left' ? -50 : 50 },
    visible: { opacity: 1, x: 0 },
  };


  return (
    <div ref={ref} className="relative mt-8 flex w-full justify-center md:justify-normal">
      {side === 'right' && <div className="hidden w-1/2 md:block md:w-1/2"></div>}
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={desktopVariants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn('w-full md:max-w-md group', 
          'transition-all duration-300 ease-in-out hover:scale-[1.02]',
          side === 'left' ? 'md:w-1/2 md:pr-8 md:text-right' : 'md:w-1/2 md:pl-8')}
      >
         <GlassCard className={cn(
            isTarget && 'border-green-500/50',
            "text-left"
          )}>
          <CardHeader>
            <CardTitle className={cn(isTarget && 'text-green-500')}>{title}</CardTitle>
          </CardHeader>
          {description && (
          <CardContent>
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
          )}
          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(400px circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 80%)',
            }}
          />
        </GlassCard>
      </motion.div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div className={cn(
            "z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-background shadow-lg",
            isTarget
              ? "border-green-500 bg-green-500/20 text-green-500 animate-pulse"
              : "border-primary text-primary"
          )}
        >
          {isTarget ? <CircleCheckBig /> : <span className="font-bold">{phase}</span>}
        </div>
      </div>
      {side === 'left' && <div className="hidden w-1/2 md:block md:w-1/2"></div>}
    </div>
  );
};

const RiskCard = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <div
    className={cn(
      'group relative rounded-2xl bg-white/50 dark:bg-black/20 p-6 shadow-soft-light dark:shadow-soft-dark',
      'transition-all duration-300 ease-in-out',
      'hover:shadow-soft-light-hover dark:hover:shadow-soft-dark-hover hover:-translate-y-1'
    )}
  >
    <div className="flex items-start gap-4">
      <div
        className={cn(
          'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-200/70 dark:bg-gray-800/60 transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary'
        )}
      >
        {icon}
      </div>
      <p className="text-gray-600 dark:text-gray-400">{children}</p>
    </div>
    <div
      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background:
          'radial-gradient(400px circle at 20% 50%, hsl(var(--primary) / 0.1), transparent 80%)',
      }}
    />
  </div>
);


export default function Home({}) {
  const { scrollYProgress } = useScroll();
  const videoOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  return (
    <div className="flex min-h-screen flex-col text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a className="flex items-center gap-2" href="/">
            <Orbit className="h-6 w-6" />
            <span className="font-logo">QatarSphere</span>
          </a>
        </div>
      </header>
      
      <motion.div
        className="fixed inset-x-0 top-0 h-screen w-full -z-10 bg-black hidden md:block"
        style={{ opacity: videoOpacity, scale: videoScale }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
          src="/videos/intro-1.mp4"
        />
      </motion.div>

      <main className="flex-1">
        <div className="h-screen" />
        {/* Slide 1: Title */}
        <section
          id="title"
          className="relative flex h-[calc(100vh-4rem)] flex-col items-center justify-center text-center"
        >
          <GlassCard className="w-full max-w-4xl">
            <h1 className="font-display text-3xl font-bold tracking-wider sm:text-4xl md:text-6xl lg:text-7xl md:tracking-widest uppercase text-red-800">
              QatarSphere District
            </h1>
            <DecryptedText
              text="A Landmark Investment in Qatar's Future: Building the World's First Cognitive City, a Hub for Technology, Tourism, and Talent."
              animateOn="view"
              sequential={true}
              revealDirection="start"
              speed={20}
              maxIterations={10}
              parentClassName="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-2xl"
            />
            <div className="mt-6 text-lg">
              <p className="font-semibold">Presented by:</p>
              <p className="text-accent text-lg">
                His Excellency Sheikh Jabr bin Thani Al Thani
              </p>
            </div>
          </GlassCard>
          <div className="absolute inset-0 -z-10 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-700/30"></div>
        </section>

        {/* Video Section 2 */}
        <section id="video-2" className="relative flex h-[calc(100vh-4rem)] flex-col items-center justify-center">
            <div className="w-full max-w-screen-2xl rounded-2xl overflow-hidden mx-auto">
                <div className="aspect-video w-full bg-muted/30">
                    <video className="w-full h-full" controls autoPlay muted loop src="/videos/intro-2.mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>

        {/* Slide 2: Executive Summary */}
        <section id="executive-summary">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-headline font-bold md:text-4xl">Executive Summary</h2>
              <DecryptedText
                parentClassName="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-2xl"
                animateOn="view"
                sequential
                speed={20}
                maxIterations={10}
                text="A Vision for National Prosperity & Technological Sovereignty. We present the QatarSphere District—a strategic national project designed not just to lead in entertainment, but to become a global epicenter for the next industrial revolution."
              />
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ExecutiveSummaryCard icon={<Cpu size={24} />} title="The Proposal">
                A <b>$4.2 billion total investment</b> to develop the world&apos;s first
                &quot;cognitive city&quot; district.
              </ExecutiveSummaryCard>
              <ExecutiveSummaryCard icon={<TrendingUp size={24} />} title="The Dual Engine">
                Adds <b>QAR 20-30B ($5.5-8.2B USD)</b> annually to GDP, creating a powerful new
                economic driver.
              </ExecutiveSummaryCard>
              <ExecutiveSummaryCard icon={<ShieldCheck size={24} />} title="Strategic Imperative">
                Moves beyond tourism to create a living laboratory for AI, Quantum Computing, and
                Robotics, aligning with QNV 2030.
              </ExecutiveSummaryCard>
              <ExecutiveSummaryCard icon={<Handshake size={24} />} title="The Ask">
                Seeking QIA&apos;s backing to anchor this nation-building project and secure
                Qatar&apos;s position as a global leader.
              </ExecutiveSummaryCard>
            </div>
          </div>
        </section>

        {/* Video Section 3 */}
        <section id="video-3" className="relative flex h-[calc(100vh-4rem)] flex-col items-center justify-center">
            <div className="w-full max-w-screen-2xl rounded-2xl overflow-hidden mx-auto">
                <div className="aspect-video w-full bg-muted/30">
                    <video className="w-full h-full" controls autoPlay muted loop src="/videos/intro-3.mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>

        {/* Slide 3: A New Paradigm */}
        <section id="new-paradigm">
          <div className="container flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="space-y-4">
                  <h2 className="text-3xl font-headline font-bold md:text-4xl">
                    A New Paradigm: Beyond Entertainment
                  </h2>
                  <DecryptedText
                    parentClassName="text-lg text-muted-foreground md:text-2xl"
                    animateOn="view"
                    sequential={true}
                    speed={20}
                    maxIterations={10}
                    text="From an Entertainment Venue to a Cognitive Hub. While competitors focus on building bigger screens, we will build a smarter city. The QatarSphere District's vision transcends entertainment to become a globally significant hub for technological innovation."
                  />
              </div>
              <div className="mt-8 space-y-6">
                <div className="group relative transition-all duration-300 ease-in-out hover:scale-[1.02]">
                  <GlassCard>
                    <div className="flex items-start gap-4 p-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Globe size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">The Entertainment Layer</h3>
                        <p className="text-muted-foreground">
                          A world-class destination attracting 3.2 million visitors annually, serving
                          as the public face and a key revenue driver.
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                   <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                       style={{
                         background:
                           'radial-gradient(400px circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 80%)',
                       }}
                  />
                </div>
                <div className="group relative transition-all duration-300 ease-in-out hover:scale-[1.02]">
                  <GlassCard>
                    <div className="flex items-start gap-4 p-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <BrainCircuit size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">The Technology Core</h3>
                        <p className="text-muted-foreground">
                          A Special Economic and Technology Zone (SET-Zone) to attract leaders in AI,
                          Quantum Computing, Advanced Robotics, and Blockchain.
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                     style={{
                       background:
                         'radial-gradient(400px circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 80%)',
                     }}
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
                <Image
                  src="https://placehold.co/600x700.png"
                  width={600}
                  height={700}
                  alt="Futuristic Laboratory"
                  className="rounded-2xl object-cover"
                  data-ai-hint="futuristic laboratory"
                />
            </div>
          </div>
        </section>

        {/* Video Section 4 */}
        <section id="video-4" className="relative flex h-[calc(100vh-4rem)] flex-col items-center justify-center">
            <div className="w-full max-w-screen-2xl rounded-2xl overflow-hidden mx-auto">
                <div className="aspect-video w-full bg-muted/30">
                    <video className="w-full h-full" controls autoPlay muted loop src="/videos/intro-4.mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>

        {/* Slide 4: Proposed Solution */}
        <section id="solution">
          <div className="container space-y-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-headline font-bold md:text-4xl">
                Proposed Solution: A Dual-Purpose Ecosystem
              </h2>
              <DecryptedText
                parentClassName="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-2xl"
                animateOn="view"
                sequential={true}
                speed={20}
                maxIterations={10}
                text="Our 850,000-square-meter district is designed with two synergistic purposes, creating a virtuous cycle of innovation and experience."
              />
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <SolutionCard
                imageSrc="https://placehold.co/600x400.png"
                imageAlt="Public Experience"
                imageHint="modern entertainment venue"
                icon={<Building2 className="mt-1 h-5 w-5 shrink-0 text-primary" />}
                title="Zone 1: The Public Experience"
              >
                <li className="flex items-start gap-3">
                  <Building2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>The QatarSphere venue, with dynamic, submersible stages.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Hotel className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>Luxury hotels with 2,500 rooms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShoppingBag className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>200+ retail spaces and a 2-mile entertainment promenade.</span>
                </li>
              </SolutionCard>
              <SolutionCard
                imageSrc="https://placehold.co/600x400.png"
                imageAlt="Innovation Campus"
                imageHint="futuristic research lab"
                icon={<FlaskConical className="mt-1 h-5 w-5 shrink-0 text-primary" />}
                title="Zone 2: The Qatar Innovation Campus"
              >
                <li className="flex items-start gap-3">
                  <FlaskConical className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>State-of-the-art R&amp;D facilities and secure data centers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Bot className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    &quot;Sandbox&quot; environments for testing autonomous robots and AI systems.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Server className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>Corporate headquarters and startup incubators for global tech firms.</span>
                </li>
              </SolutionCard>
            </div>
          </div>
        </section>

        {/* Video Section 5 */}
        <section id="video-5" className="relative flex h-[calc(100vh-4rem)] flex-col items-center justify-center">
            <div className="w-full max-w-screen-2xl rounded-2xl overflow-hidden mx-auto">
                <div className="aspect-video w-full bg-muted/30">
                    <video className="w-full h-full" controls autoPlay muted loop src="/videos/intro-5.mp4">
                        Your browser does not support the video tag.
                    </video>
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
              <DecryptedText
                parentClassName="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-2xl"
                animateOn="view"
                sequential={true}
                speed={20}
                maxIterations={10}
                text="Fulfilling an Accelerated Vision for 2030, this project is a powerful catalyst for our national vision, creating parallel streams of human and economic development."
              />
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <ImpactCard icon={<Book size={28} />} title="Celebrate Heritage,<br/>Power the Future">
                A unique brand of &apos;Culture &amp; Code&apos; to define Qatar&apos;s global
                identity, featuring a Qatar Heritage Pavilion.
              </ImpactCard>
              <ImpactCard icon={<Users2 size={28} />} title="Build a<br/>Knowledge Workforce">
                A National Technology Fellowship to develop elite Qatari talent in AI, quantum
                mechanics, and robotics.
              </ImpactCard>
              <ImpactCard icon={<HeartHandshake size={28} />} title="Enhance Community<br/>Well-being">
                World-class public spaces, family-friendly programming, and a new source of
                national pride.
              </ImpactCard>
            </div>
          </div>
        </section>

        {/* Video Section 6 */}
        <section id="video-6" className="relative flex h-[calc(100vh-4rem)] flex-col items-center justify-center">
            <div className="w-full max-w-screen-2xl rounded-2xl overflow-hidden mx-auto">
                <div className="aspect-video w-full bg-muted/30">
                    <video className="w-full h-full" controls autoPlay muted loop src="/videos/intro-6.mp4">
                        Your browser does not support the video tag.
                    </video>
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
              <DecryptedText
                parentClassName="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-2xl"
                animateOn="view"
                sequential={true}
                speed={20}
                maxIterations={10}
                text="A multiplier effect on national value. The QatarSphere District delivers a strategic return far greater than a standalone tourism project."
              />
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <ValuePropCard icon={<TrendingUp size={28} />} title="Economic Diversification" />
              <ValuePropCard icon={<ShieldCheck size={28} />} title="Technological Sovereignty" />
              <ValuePropCard icon={<Globe size={28} />} title="Global Influence" />
              <ValuePropCard icon={<BrainCircuit size={28} />} title="Human Capital" />
            </div>
          </div>
        </section>

        {/* Video Section 7 */}
        <section id="video-7" className="relative flex h-[calc(100vh-4rem)] flex-col items-center justify-center">
            <div className="w-full max-w-screen-2xl rounded-2xl overflow-hidden mx-auto">
                <div className="aspect-video w-full bg-muted/30">
                    <video className="w-full h-full" controls autoPlay muted loop src="/videos/intro-7.mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>

        {/* Slide 7: Financial Overview */}
        <section id="financials">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
                <h2 className="text-3xl font-headline font-bold md:text-4xl">Financial Overview</h2>
                <DecryptedText
                    parentClassName="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-2xl"
                    animateOn="view"
                    sequential={true}
                    speed={20}
                    maxIterations={10}
                    text="A sound and highly profitable national investment built on rigorous analysis and a resilient, diversified revenue strategy."
                />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
              <FinancialMetricCard
                label="Total Investment"
                value={4.2}
                prefix="$"
                postfix="B"
                icon={<DollarSign size={24} />}
                className="lg:col-span-2"
              />
              <FinancialMetricCard
                label="Projected Annual Revenue"
                value={1.8}
                prefix="$"
                postfix="B"
                icon={<Target size={24} />}
                className="lg:col-span-2"
              />
              <GlassCard
                className={cn(
                  'group relative transition-all duration-300 ease-in-out',
                  'hover:scale-[1.02]',
                  'md:col-span-3 lg:col-span-2 lg:row-span-2 min-h-[300px] p-6'
                )}
              >
                  <h3 className="mb-4 text-lg font-semibold">Investment Breakdown</h3>
                  <InvestmentChart />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        'radial-gradient(800px circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 80%)',
                    }}
                  />
              </GlassCard>
              <FinancialMetricCard
                label="Payback Period"
                value={2.3}
                prefix="~"
                postfix=" Yrs"
                icon={<RefreshCw size={24} />}
                className="md:col-span-1 lg:col-span-2"
              />
              <FinancialMetricCard
                label="Annual GDP Contribution"
                value="QAR 20-30B"
                icon={<AreaChart size={24} />}
                className="md:col-span-2 lg:col-span-2"
              />
            </div>
          </div>
        </section>

        {/* Video Section 8 */}
        <section id="video-8" className="relative flex h-[calc(100vh-4rem)] flex-col items-center justify-center">
            <div className="w-full max-w-screen-2xl rounded-2xl overflow-hidden mx-auto">
                <div className="aspect-video w-full bg-muted/30">
                    <video className="w-full h-full" controls autoPlay muted loop src="/videos/intro-8.mp4">
                        Your browser does not support the video tag.
                    </video>
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
              <DecryptedText
                parentClassName="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-2xl"
                animateOn="view"
                sequential={true}
                speed={20}
                maxIterations={10}
                text="An aggressive yet achievable 36-month construction and development plan, ensuring a grand opening in 2028."
              />
            </div>
            <div className="relative mt-12 flex flex-col items-center">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border/50"></div>
              
              <RoadmapTimelineItem 
                side="left"
                phase={1}
                title="Phase 1: Foundation (Year 1)"
                description="Finalize master plan, secure permits, formalize partnerships, and begin site preparation."
              />
              
              <RoadmapTimelineItem 
                side="right"
                phase={2}
                title="Phase 2: Vertical Construction (Year 2-3)"
                description="Sphere structural completion, facade &amp; tech integration. Develop Innovation Campus."
              />

              <RoadmapTimelineItem 
                side="left"
                phase={3}
                title="Phase 3: Launch Readiness (Year 3-4)"
                description="Systems integration, testing, commissioning, and global marketing launch."
              />
              
              <RoadmapTimelineItem 
                side="right"
                isTarget={true}
                title="TARGET: GRAND OPENING Q4 2028"
              />

            </div>
          </div>
        </section>

        {/* Video Section 9 */}
        <section id="video-9" className="relative flex h-[calc(100vh-4rem)] flex-col items-center justify-center">
            <div className="w-full max-w-screen-2xl rounded-2xl overflow-hidden mx-auto">
                <div className="aspect-video w-full bg-muted/30">
                    <video className="w-full h-full" controls autoPlay muted loop src="/videos/intro-9.mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
        
        {/* Slide 9: Strategic Partnerships */}
        <section id="partnerships">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-headline font-bold md:text-4xl">Strategic Partnerships</h2>
              <DecryptedText
                parentClassName="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-2xl"
                animateOn="view"
                sequential={true}
                speed={20}
                maxIterations={10}
                text="De-risking execution with a consortium of world-class leaders in their respective fields."
              />
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <PartnerCard icon={<Building size={28} />} title="CSCEC">
                Construction partner, the world&apos;s largest contractor, ensuring on-time
                delivery.
              </PartnerCard>
              <PartnerCard icon={<Cpu size={28} />} title="Tencent">
                Technology &amp; AI partner to power immersive content and personalization engines.
              </PartnerCard>
              <PartnerCard icon={<Database size={28} />} title="Alibaba">
                Cloud &amp; Data partner for robust, real-time smart city management.
              </PartnerCard>
              <PartnerCard icon={<Layers size={28} />} title="Wanda Group">
                Entertainment content partner for co-developing world-class shows.
              </PartnerCard>
            </div>
          </div>
        </section>

        {/* Video Section 10 */}
        <section id="video-10" className="relative flex h-[calc(100vh-4rem)] flex-col items-center justify-center">
            <div className="w-full max-w-screen-2xl rounded-2xl overflow-hidden mx-auto">
                <div className="aspect-video w-full bg-muted/30">
                    <video className="w-full h-full" controls autoPlay muted loop src="/videos/intro-10.mp4">
                        Your browser does not support the video tag.
                    </video>
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
              <DecryptedText
                parentClassName="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-2xl"
                animateOn="view"
                sequential={true}
                speed={20}
                maxIterations={10}
                text="Proactive management for assured success with robust contingency plans."
              />
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <RiskCard icon={<Wrench size={24} />}>
                Partnering with CSCEC, leveraging prefabrication, and securing a 15% contingency
                budget.
              </RiskCard>
              <RiskCard icon={<Activity size={24} />}>
                Dual-engine model hedges risk, as the R&amp;D/Tech sector is less correlated with
                consumer travel.
              </RiskCard>
              <RiskCard icon={<Replace size={24} />}>
                Modular, open-architecture design for easy upgrades. The QIC&apos;s purpose is to
                drive change.
              </RiskCard>
              <RiskCard icon={<Globe2 size={24} />}>
                Diversified global partnerships. Position QIC as a neutral, &quot;open-source&quot;
                R&amp;D hub.
              </RiskCard>
              <RiskCard icon={<Recycle size={24} />}>
                LEED Platinum design, on-site solar generation, and advanced water recycling.
              </RiskCard>
              <RiskCard icon={<ShieldCheck size={24} />}>
                Robust cybersecurity protocols and physical security designed in partnership with
                global experts.
              </RiskCard>
            </div>
          </div>
        </section>

        {/* Slide 11: Call to Action */}
        <section id="cta">
          <div className="container grid items-center gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-headline font-bold md:text-4xl">Call to Action</h2>
              <DecryptedText
                parentClassName="text-lg text-muted-foreground md:text-2xl"
                animateOn="view"
                sequential={true}
                speed={20}
                maxIterations={10}
                text="This landmark project is ready for activation. Its success will be a testament to Qatar's vision and ambition."
              />
            </div>
            <div className="space-y-6">
              <GlassCard className="bg-white/80 dark:bg-black/30 shadow-soft-light dark:shadow-soft-dark">
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-gray-200">Our Request</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We formally seek the strategic and financial backing of the Qatar Investment
                    Authority to serve as the anchor investor for the QatarSphere District.
                  </p>
                </CardContent>
              </GlassCard>
              <GlassCard className="bg-white/80 dark:bg-black/30 shadow-soft-light dark:shadow-soft-dark">
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-gray-200">Immediate Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CircleCheckBig className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <span>
                        <span className="font-bold text-foreground">Secure Board Approval</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CircleCheckBig className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <span>
                        <span className="font-bold text-foreground">Formalize Partnerships (90 Days)</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CircleCheckBig className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <span>
                        <span className="font-bold text-foreground">Commence Phase 1 (6 Months)</span>
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Slide 12: Conclusion */}
        <section id="conclusion">
          <div className="container text-center">
            <div className="group relative transition-all duration-300 ease-in-out hover:scale-[1.02]">
              <GlassCard className="text-center">
                <h2 className="text-3xl font-headline font-bold md:text-4xl text-foreground">
                  Investing in the Future Sovereign Capability of Qatar
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
                  More than an investment in infrastructure, this is an investment in our nation&apos;s
                  future. It is a powerful economic engine, a global symbol of innovation, and a
                  profitable venture that accelerates the highest aspirations of the Qatar National
                  Vision 2030.
                </p>
                <div className="mt-8">
                  <Button size="lg" variant="secondary">
                    We Welcome Your Questions
                  </Button>
                </div>
              </GlassCard>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(800px circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 80%)',
                  }}
              />
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
