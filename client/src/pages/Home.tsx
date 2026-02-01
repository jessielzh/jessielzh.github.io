import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, MapPin, GraduationCap, Building2, FileText, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Grid Background Pattern - Subtle */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <main className="relative z-10 container max-w-5xl mx-auto px-6 py-12 md:py-24">
        
        {/* Header / Hero Section */}
        <header className="mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-4 border-foreground pb-8">
            <div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-4">
                JESSIE LI
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground tracking-wide">
                黎珍辉
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2 font-mono text-sm">
              <a href="mailto:jessielzh@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2 group">
                jessielzh@gmail.com <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                Hangzhou, China <MapPin className="w-4 h-4" />
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          
          {/* Left Column: Bio & Info */}
          <div className="md:col-span-5 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-primary font-mono">Current Role</h3>
              <div className="text-lg font-medium leading-relaxed">
                Director at <span className="font-bold">Yunqi Academy of Engineering</span>
                <br />
                <span className="text-muted-foreground text-base">Hangzhou, China</span>
              </div>
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-primary font-mono">Education & Past</h3>
              <ul className="space-y-6">
                <li className="group">
                  <div className="font-bold group-hover:text-primary transition-colors">PhD in Computer Science</div>
                  <div className="text-muted-foreground text-sm">University of Illinois at Urbana-Champaign</div>
                </li>
                <li className="group">
                  <div className="font-bold group-hover:text-primary transition-colors">Professor (Tenured)</div>
                  <div className="text-muted-foreground text-sm">Pennsylvania State University</div>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-primary font-mono">Connect</h3>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="outline" className="rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all font-bold">
                  <a href="https://scholar.google.com/citations?user=r0nnyGYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                    Google Scholar <ArrowUpRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" className="rounded-none hover:bg-secondary font-medium">
                  <a href="http://jessielzh.com/" target="_blank" rel="noopener noreferrer">
                    Old Homepage <ArrowUpRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </section>

            <section className="p-6 bg-secondary/50 border border-border">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-primary font-mono">Impact</h3>
              <div className="grid grid-cols-3 gap-4 font-mono">
                <div>
                  <div className="text-2xl font-bold">16k+</div>
                  <div className="text-[10px] text-muted-foreground uppercase">Citations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">47</div>
                  <div className="text-[10px] text-muted-foreground uppercase">h-index</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">92</div>
                  <div className="text-[10px] text-muted-foreground uppercase">i10-index</div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Research & Projects */}
          <div className="md:col-span-7 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-primary font-mono border-b border-border pb-2">Research Focus</h3>
              <p className="text-2xl md:text-3xl font-light leading-tight">
                Developing computational techniques to release the power of <span className="font-medium text-primary">data</span> for city intelligence.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-prose">
                My work revolutionizes research fields by collaborating with data-driven researchers in transportation, environment, crime, ecology, and social science.
              </p>
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-primary font-mono border-b border-border pb-2">Key Initiatives</h3>
              
              <div className="space-y-12">
                <div className="group cursor-pointer">
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">City Brain</h4>
                    <span className="font-mono text-xs text-muted-foreground">01</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Can we use 10% of the public resources today to support city development in the future? Conducting and organizing city brain open research to solve real-world urban problems.
                  </p>
                  <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-500 ease-out"></div>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">Open Research Platform</h4>
                    <span className="font-mono text-xs text-muted-foreground">02</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Building a foundation for data-driven research on a powerful cloud computing infrastructure at Yunqi Academy of Engineering.
                  </p>
                  <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-500 ease-out"></div>
                </div>
              </div>
            </section>

            <section className="bg-primary text-primary-foreground p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FileText className="w-32 h-32" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 font-mono">News & Updates</h3>
              <div className="space-y-4 relative z-10">
                <div>
                  <div className="font-bold text-lg">CIKM Program Co-chair</div>
                  <p className="text-primary-foreground/80 text-sm mt-1">Excited to serve this year. Submission deadline: May 23, 2025.</p>
                </div>
                <div className="w-12 h-0.5 bg-primary-foreground/30"></div>
                <div>
                  <div className="font-bold text-lg">Looking for Interns</div>
                  <p className="text-primary-foreground/80 text-sm mt-1">Start dates are flexible. Email resume if interested.</p>
                </div>
              </div>
            </section>

          </div>
        </div>

        <footer className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground font-mono">
          <div>© 2026 Jessie Li. All rights reserved.</div>
          <div className="mt-2 md:mt-0">Minimalist Design • Swiss Style</div>
        </footer>
      </main>
    </div>
  );
}
