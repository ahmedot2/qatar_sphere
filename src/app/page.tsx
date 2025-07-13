import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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
  ArrowRight,
  ShieldCheck,
  Globe,
  BrainCircuit,
  AreaChart,
} from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-secondary">
      {icon}
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="mt-2 text-muted-foreground">{description}</p>
  </div>
);

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="mx-auto bg-secondary rounded-full p-3 w-fit">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
);

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">QatarSphere</h1>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#vision" className="text-sm font-medium hover:text-primary">Vision</a>
            <a href="#solution" className="text-sm font-medium hover:text-primary">Solution</a>
            <a href="#impact" className="text-sm font-medium hover:text-primary">Impact</a>
            <a href="#financials" className="text-sm font-medium hover:text-primary">Financials</a>
          </nav>
          <Button>QIA Portal</Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen pt-32 pb-20 text-center bg-secondary/50">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              The QatarSphere District
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
              A Landmark Investment in Qatar's Future, designed to become a global epicenter for the next industrial revolution.
            </p>
            <div className="mt-8">
              <Button size="lg">
                Explore the Vision <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="mt-12 relative">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-20 blur-2xl"></div>
              <Card className="shadow-2xl overflow-hidden">
                <Image
                  src="https://placehold.co/1200x600.png"
                  alt="QatarSphere Hero Image"
                  width={1200}
                  height={600}
                  className="object-cover"
                  data-ai-hint="futuristic city dusk"
                />
              </Card>
            </div>
          </div>
        </section>

        {/* Executive Summary Section */}
        <section id="vision">
          <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <FeatureCard icon={<Cpu size={24} className="text-primary"/>} title="The Proposal" description="$4.2B to develop the world's first 'cognitive city' district." />
            <FeatureCard icon={<DollarSign size={24} className="text-primary"/>} title="The Dual Engine" description="Adds QAR 20-30B annually to GDP." />
            <FeatureCard icon={<TrendingUp size={24} className="text-primary"/>} title="The Strategic Imperative" description="A living laboratory for AI, Quantum Computing, and Robotics." />
            <FeatureCard icon={<Gem size={24} className="text-primary"/>} title="The Ask" description="Seeking QIA's backing to anchor this nation-building project." />
          </div>
        </section>

        {/* The Solution Section */}
        <section id="solution" className="bg-secondary/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">A Dual-Purpose Ecosystem</h2>
              <p className="max-w-3xl mx-auto mt-3 text-muted-foreground">
                Our 850,000-square-meter district is designed with two synergistic purposes, creating a virtuous cycle of innovation and experience.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <Card className="p-2">
                <CardContent className="p-0">
                   <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Public Experience" className="rounded-lg mb-6" data-ai-hint="modern entertainment venue" />
                   <div className="px-6 pb-6">
                    <h3 className="text-2xl font-bold text-primary">Zone 1: The Public Experience</h3>
                    <ul className="mt-4 space-y-4 text-muted-foreground">
                      <li className="flex items-start gap-4"><Building2 className="h-5 w-5 text-primary shrink-0 mt-1" /><span>The QatarSphere venue, with dynamic, submersible stages.</span></li>
                      <li className="flex items-start gap-4"><Hotel className="h-5 w-5 text-primary shrink-0 mt-1" /><span>Luxury hotels with 2,500 rooms.</span></li>
                      <li className="flex items-start gap-4"><ShoppingBag className="h-5 w-5 text-primary shrink-0 mt-1" /><span>200+ retail spaces and a 2-mile entertainment promenade.</span></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-2">
                <CardContent className="p-0">
                   <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Innovation Campus" className="rounded-lg mb-6" data-ai-hint="futuristic research lab" />
                   <div className="px-6 pb-6">
                    <h3 className="text-2xl font-bold text-primary">Zone 2: The Qatar Innovation Campus</h3>
                    <ul className="mt-4 space-y-4 text-muted-foreground">
                      <li className="flex items-start gap-4"><FlaskConical className="h-5 w-5 text-primary shrink-0 mt-1" /><span>State-of-the-art R&D facilities and secure data centers.</span></li>
                      <li className="flex items-start gap-4"><Bot className="h-5 w-5 text-primary shrink-0 mt-1" /><span>"Sandbox" environments for testing autonomous robots and AI systems.</span></li>
                      <li className="flex items-start gap-4"><Server className="h-5 w-5 text-primary shrink-0 mt-1" /><span>Corporate headquarters and startup incubators for global tech firms.</span></li>
                    </ul>
                   </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* National Impact Section */}
        <section id="impact">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">National & Cultural Impact</h2>
              <p className="max-w-3xl mx-auto mt-3 text-muted-foreground">
                A powerful catalyst for our national vision, creating parallel streams of human and economic development.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               <BenefitCard icon={<Landmark size={28} className="text-primary"/>} title="Celebrate Heritage" description="A unique brand of 'Culture & Code' to define Qatar's global identity." />
               <BenefitCard icon={<Users size={28} className="text-primary"/>} title="Build a Knowledge Workforce" description="A National Technology Fellowship to develop elite Qatari talent." />
               <BenefitCard icon={<HeartHandshake size={28} className="text-primary"/>} title="Enhance Community" description="World-class public spaces and a new source of national pride." />
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="bg-secondary/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">A Redefined Value Proposition</h2>
              <p className="max-w-3xl mx-auto mt-3 text-muted-foreground">
                A strategic return far greater than a standalone tourism project, delivering a multiplier effect on national value.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card><CardHeader><AreaChart className="h-8 w-8 text-primary mb-2" /><CardTitle>Economic Diversification</CardTitle></CardHeader><CardContent>$1.8B+ in annual revenue.</CardContent></Card>
                <Card><CardHeader><ShieldCheck className="h-8 w-8 text-primary mb-2" /><CardTitle>Technological Sovereignty</CardTitle></CardHeader><CardContent>Fostering homegrown innovation and valuable IP.</CardContent></Card>
                <Card><CardHeader><Globe className="h-8 w-8 text-primary mb-2" /><CardTitle>Global Influence</CardTitle></CardHeader><CardContent>The "Davos" of the next tech revolution.</CardContent></Card>
                <Card><CardHeader><BrainCircuit className="h-8 w-8 text-primary mb-2" /><CardTitle>Human Capital</CardTitle></CardHeader><CardContent>A magnet for world-class scientific talent.</CardContent></Card>
            </div>
          </div>
        </section>

         {/* Financials Section */}
        <section id="financials">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold">Financial Strength</h2>
                <p className="mt-4 text-muted-foreground">A sound and highly profitable national investment built on rigorous analysis and a resilient, diversified revenue strategy. With a simple payback period of ~2.3 years, this project promises substantial returns.</p>
                <div className="mt-8 grid grid-cols-2 gap-6">
                    <div>
                        <p className="text-4xl font-bold text-primary">$4.2B</p>
                        <p className="text-sm text-muted-foreground">Total Investment</p>
                    </div>
                     <div>
                        <p className="text-4xl font-bold text-primary">$1.8B</p>
                        <p className="text-sm text-muted-foreground">Projected Annual Revenue</p>
                    </div>
                </div>
                <Button size="lg" variant="outline" className="mt-8">View Detailed Financials</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-secondary">
                    <CardTitle className="text-lg">Sphere Venue</CardTitle>
                    <CardDescription className="text-3xl font-bold text-primary mt-2">$2.8B</CardDescription>
                </Card>
                 <Card className="p-6">
                    <CardTitle className="text-lg">Infrastructure</CardTitle>
                    <CardDescription className="text-3xl font-bold text-primary mt-2">$1.4B</CardDescription>
                </Card>
                 <Card className="p-6">
                    <CardTitle className="text-lg">Payback Period</CardTitle>
                    <CardDescription className="text-3xl font-bold text-primary mt-2">~2.3 Yrs</CardDescription>
                </Card>
                 <Card className="p-6 bg-secondary">
                    <CardTitle className="text-lg">Annual GDP</CardTitle>
                    <CardDescription className="text-3xl font-bold text-primary mt-2">QAR 20-30B</CardDescription>
                </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-primary text-primary-foreground">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Build the Future of Qatar</h2>
                 <p className="max-w-2xl mx-auto mt-4 text-lg text-primary-foreground/80">
                    This landmark project is ready for activation. Its success will be a testament to Qatar's vision and ambition.
                </p>
                <Button size="lg" variant="secondary" className="mt-8">
                    Partner With Us
                </Button>
            </div>
        </section>

      </main>

      <footer className="py-8 bg-secondary/50">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} QatarSphere District. A project presented to the Qatar Investment Authority.</p>
        </div>
      </footer>
    </div>
  );
}
