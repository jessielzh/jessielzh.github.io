import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, MapPin, FileText, Video, Newspaper } from "lucide-react";

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
          <div className="md:col-span-4 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-primary font-mono">Experience</h3>
              <ul className="space-y-6">
                <li className="group">
                  <div className="font-bold group-hover:text-primary transition-colors">Professor (Tenured)</div>
                  <div className="text-muted-foreground text-sm">Pennsylvania State University</div>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-primary font-mono">Education</h3>
              <ul className="space-y-6">
                <li className="group">
                  <div className="font-bold group-hover:text-primary transition-colors">PhD in Computer Science</div>
                  <div className="text-muted-foreground text-sm">University of Illinois at Urbana-Champaign</div>
                </li>
                <li className="group">
                  <div className="font-bold group-hover:text-primary transition-colors">Bachelor Degree</div>
                  <div className="text-muted-foreground text-sm">Shanghai Jiao Tong University</div>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-primary font-mono">Connect</h3>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="outline" className="rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all font-bold w-full justify-between">
                  <a href="https://scholar.google.com/citations?user=r0nnyGYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                    Google Scholar <ArrowUpRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </section>

            <section className="p-6 bg-secondary/50 border border-border">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-primary font-mono">Research Interests</h3>
              <div className="font-bold text-lg mb-2">AI for Science</div>
              <div className="flex flex-wrap gap-2 text-sm font-mono text-muted-foreground">
                <span>City</span> • <span>Environment</span> • <span>Traffic</span>
              </div>
            </section>
          </div>

          {/* Right Column: Research & Projects */}
          <div className="md:col-span-8 space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-primary font-mono border-b border-border pb-2">Research</h3>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl font-medium text-foreground mb-6">
                  Cross-Disciplinary Data-Driven Research
                </p>
                <p className="mb-4">
                  Data revolutionizes all research fields. I am curious how data make new discoveries across a variety of fields and how data make changes in the real world.
                </p>
                <p className="mb-12">
                  I develop computational techniques to release the power of data.
                </p>

                <div className="grid gap-12">
                  <div className="group">
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Traffic Signal Control</h4>
                    <p className="text-sm mb-3">Pioneer in the research topic on reinforcement learning for traffic signal control</p>
                    <div className="text-sm font-mono bg-secondary/50 p-4 border-l-2 border-primary">
                      <div className="font-bold mb-2 text-xs uppercase text-muted-foreground">Selected Publications</div>
                      <ul className="space-y-2">
                        <li>Intellilight: A reinforcement learning approach for intelligent traffic light control (KDD 2018)</li>
                        <li>Presslight: Learning max pressure control to coordinate traffic signals in arterial network (KDD 2019)</li>
                        <li>CityFlow: A Multi-Agent Reinforcement Learning Environment for Large Scale City Traffic Scenario (WWW 2019)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="group">
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Environment</h4>
                    <p className="text-sm mb-3">Big data analysis for water quality in the area of shale gas development</p>
                    <div className="text-sm font-mono bg-secondary/50 p-4 border-l-2 border-primary">
                      <div className="font-bold mb-2 text-xs uppercase text-muted-foreground">Selected Publications</div>
                      <ul className="space-y-2">
                        <li>Searching for Anomalous Methane in Shallow Groundwater near Shale Gas Wells (Journal of Contaminant Hydrology 2016)</li>
                        <li>Contextual Spatial Outlier Detection with Metric Learning (KDD 2017)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="group">
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Crime</h4>
                    <p className="text-sm mb-3">Using open city data to better understand crime rates</p>
                    <div className="text-sm font-mono bg-secondary/50 p-4 border-l-2 border-primary">
                      <div className="font-bold mb-2 text-xs uppercase text-muted-foreground">Selected Publications</div>
                      <ul className="space-y-2">
                        <li>Crime Rate Inference with Big Data (KDD 2016)</li>
                        <li>Non-Stationary Model for Crime Rate Inference Using Modern Urban Data (Transaction of Big Data 2017)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="group">
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Traffic Prediction</h4>
                    <p className="text-sm mb-3">We are among the first to study deep learning for traffic prediction</p>
                    <div className="text-sm font-mono bg-secondary/50 p-4 border-l-2 border-primary">
                      <div className="font-bold mb-2 text-xs uppercase text-muted-foreground">Selected Publications</div>
                      <ul className="space-y-2">
                        <li>Deep multi-view spatial-temporal network for taxi demand prediction (AAAI 2018)</li>
                        <li>Revisiting spatial-temporal similarity: A deep learning framework for traffic prediction (AAAI 2019)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="group">
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Ecology</h4>
                    <p className="text-sm mb-3">Discover animal behaviors and relationships through their movement traces</p>
                    <div className="text-sm font-mono bg-secondary/50 p-4 border-l-2 border-primary">
                      <div className="font-bold mb-2 text-xs uppercase text-muted-foreground">Selected Publications</div>
                      <ul className="space-y-2">
                        <li>Mining Periodic Behaviors for Moving Objects (KDD 2010)</li>
                        <li>Swarm: Mining Relaxed Temporal Moving Object Clusters (VLDB 2010)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-primary font-mono border-b border-border pb-2">Media & Talks</h3>
              
              <div className="grid gap-8">
                <div className="space-y-6">
                  <h4 className="font-bold flex items-center gap-2"><Video className="w-4 h-4" /> On Youtube</h4>
                  
                  <div className="grid gap-6 pl-6 border-l border-border">
                    <div>
                      <div className="font-bold text-sm uppercase text-muted-foreground mb-1">Tutorial</div>
                      <a href="https://www.youtube.com/watch?v=..." className="text-lg font-bold hover:text-primary transition-colors">Learning with Small Data</a>
                      <p className="text-sm text-muted-foreground mt-1">A tutorial at KDD 2020 conference.</p>
                    </div>

                    <div>
                      <div className="font-bold text-sm uppercase text-muted-foreground mb-1">Documentary</div>
                      <a href="https://www.youtube.com/watch?v=..." className="text-lg font-bold hover:text-primary transition-colors">City Brain</a>
                      <p className="text-sm text-muted-foreground mt-1">Documentary of my sabbatical leave in Hangzhou working on city brain open research in 2019.</p>
                    </div>

                    <div>
                      <div className="font-bold text-sm uppercase text-muted-foreground mb-1">Talk</div>
                      <a href="https://www.youtube.com/watch?v=..." className="text-lg font-bold hover:text-primary transition-colors">Mining Human Mobility Data</a>
                      <p className="text-sm text-muted-foreground mt-1">Talk at the Institute of Transportation Studies (ITS) in University of California – Berkeley.</p>
                    </div>

                    <div>
                      <div className="font-bold text-sm uppercase text-muted-foreground mb-1">Interview</div>
                      <a href="https://www.youtube.com/watch?v=..." className="text-lg font-bold hover:text-primary transition-colors">My Experience as a Female in Tech</a>
                      <p className="text-sm text-muted-foreground mt-1">A short interview by Women Data Leaders in Russia project during KDD 2019 conference.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mt-8">
                  <h4 className="font-bold flex items-center gap-2"><Newspaper className="w-4 h-4" /> In the News</h4>
                  
                  <div className="grid gap-4 pl-6 border-l border-border">
                    <a href="https://news.psu.edu/story/656684/2021/04/28/academics/after-change-course-ist-alumnus-lands-career-academics" className="group block">
                      <div className="text-xs font-mono text-muted-foreground mb-1">NEWS.PSU.EDU • APRIL 28, 2021</div>
                      <div className="font-bold group-hover:text-primary transition-colors">After change of course, IST alumnus lands career in academics</div>
                    </a>

                    <a href="https://news.psu.edu/story/604719/2020/01/17/research/using-machine-learning-reduce-traffic-congestion" className="group block">
                      <div className="text-xs font-mono text-muted-foreground mb-1">NEWS.PSU.EDU • JANUARY 17, 2020</div>
                      <div className="font-bold group-hover:text-primary transition-colors">Using machine learning to reduce traffic congestion</div>
                    </a>

                    <a href="https://news.psu.edu/story/421474/2016/08/16/research/data-taxi-routes-and-points-interest-may-improve-crime" className="group block">
                      <div className="text-xs font-mono text-muted-foreground mb-1">NEWS.PSU.EDU • AUGUST 16, 2016</div>
                      <div className="font-bold group-hover:text-primary transition-colors">Data on taxi routes and points of interest may improve crime predictions</div>
                    </a>
                  </div>
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
