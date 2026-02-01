import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Video, Newspaper, Users, Youtube, Mic, BookOpen, Trophy } from "lucide-react";

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
            <div className="flex items-center gap-6">
              <img src="/logo.png" alt="Jessie Li Logo" className="h-24 w-auto object-contain" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-none mb-2 font-display">
                  Zhenhui (Jessie) Li
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-muted-foreground tracking-wide">
                  黎珍辉
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2 font-mono text-sm">
              <a href="mailto:jessielzh@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2 group">
                jessielzh@gmail.com <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          
          {/* Left Column: Bio & Info */}
          <div className="md:col-span-4 space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            
            <section>
              <div className="mb-8">
                <img 
                  src="/profile-jessieli.jpeg" 
                  alt="Jessie Li" 
                  className="w-full aspect-[3/4] object-cover transition-all duration-500"
                />
              </div>

              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-primary font-mono">Experience</h3>
              <ul className="space-y-6">
                <li className="group">
                  <div className="font-bold group-hover:text-primary transition-colors">Tenured Professor</div>
                  <div className="text-muted-foreground text-sm">Pennsylvania State University</div>
                </li>
                <li className="group">
                  <div className="font-bold group-hover:text-primary transition-colors">Chief Scientist</div>
                  <div className="text-muted-foreground text-sm">Hangzhou City Brain</div>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-primary font-mono">Education</h3>
              <ul className="space-y-6">
                <li className="group">
                  <div className="font-bold group-hover:text-primary transition-colors">PhD in Computer Science (2012)</div>
                  <div className="text-muted-foreground text-sm">University of Illinois at Urbana-Champaign</div>
                </li>
                <li className="group">
                  <div className="font-bold group-hover:text-primary transition-colors">BEng in Computer Science (2007)</div>
                  <div className="text-muted-foreground text-sm">ACM Class, Shanghai Jiao Tong University</div>
                </li>
              </ul>
            </section>

            <section>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="outline" className="rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all font-bold w-full justify-between">
                  <a href="https://scholar.google.com/citations?user=r0nnyGYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                    Google Scholar <ArrowUpRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </section>
          </div>

          {/* Right Column: Research & Projects */}
          <div className="md:col-span-8 space-y-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-primary font-mono border-b border-border pb-2">Research</h3>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl font-medium text-foreground mb-6">
                  AI for Science and Engineering
                </p>

                {/* Top 5 Cited Work Section */}
                <div className="mb-16 bg-secondary/30 p-6 border border-border">
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2 text-primary">
                    <Trophy className="w-4 h-4" /> Top 5 Cited Work
                  </h4>
                  <div className="space-y-6">
                    <div className="group">
                      <div className="flex justify-between items-start gap-4">
                        <a href="https://scholar.google.com/scholar?q=Deep+multi-view+spatial-temporal+network+for+taxi+demand+prediction" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary transition-colors leading-tight">
                          Deep multi-view spatial-temporal network for taxi demand prediction
                        </a>
                        <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded whitespace-nowrap">1549 citations</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 font-mono">AAAI 2018</div>
                    </div>

                    <div className="group">
                      <div className="flex justify-between items-start gap-4">
                        <a href="https://scholar.google.com/scholar?q=Revisiting+spatial-temporal+similarity%3A+A+deep+learning+framework+for+traffic+prediction" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary transition-colors leading-tight">
                          Revisiting spatial-temporal similarity: A deep learning framework for traffic prediction
                        </a>
                        <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded whitespace-nowrap">1235 citations</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 font-mono">AAAI 2019</div>
                    </div>

                    <div className="group">
                      <div className="flex justify-between items-start gap-4">
                        <a href="https://scholar.google.com/scholar?q=Generalized+fisher+score+for+feature+selection" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary transition-colors leading-tight">
                          Generalized fisher score for feature selection
                        </a>
                        <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded whitespace-nowrap">1203 citations</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 font-mono">arXiv 2012</div>
                    </div>

                    <div className="group">
                      <div className="flex justify-between items-start gap-4">
                        <a href="https://scholar.google.com/scholar?q=DRN%3A+A+deep+reinforcement+learning+framework+for+news+recommendation" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary transition-colors leading-tight">
                          DRN: A deep reinforcement learning framework for news recommendation
                        </a>
                        <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded whitespace-nowrap">1005 citations</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 font-mono">WWW 2018</div>
                    </div>

                    <div className="group">
                      <div className="flex justify-between items-start gap-4">
                        <a href="https://scholar.google.com/scholar?q=Intellilight%3A+A+reinforcement+learning+approach+for+intelligent+traffic+light+control" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary transition-colors leading-tight">
                          Intellilight: A reinforcement learning approach for intelligent traffic light control
                        </a>
                        <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded whitespace-nowrap">923 citations</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 font-mono">KDD 2018</div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-12">
                  <div className="group">
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Traffic Signal Control</h4>
                    <p className="text-sm mb-3">Pioneer in the research topic on reinforcement learning for traffic signal control</p>
                    
                    <div className="text-sm font-mono bg-secondary/50 p-4 border-l-2 border-primary mb-4">
                      <div className="font-bold mb-2 text-xs uppercase text-muted-foreground">Selected Publications</div>
                      <ul className="space-y-2 text-xs">
                        <li><a href="https://scholar.google.com/scholar?q=Intellilight%3A+A+reinforcement+learning+approach+for+intelligent+traffic+light+control+KDD+2018" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Intellilight: A reinforcement learning approach for intelligent traffic light control (KDD 2018)</a></li>
                        <li><a href="https://scholar.google.com/scholar?q=Presslight%3A+Learning+max+pressure+control+to+coordinate+traffic+signals+in+arterial+network+KDD+2019" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Presslight: Learning max pressure control to coordinate traffic signals in arterial network (KDD 2019)</a></li>
                        <li><a href="https://scholar.google.com/scholar?q=CityFlow%3A+A+Multi-Agent+Reinforcement+Learning+Environment+for+Large+Scale+City+Traffic+Scenario+WWW+2019" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">CityFlow: A Multi-Agent Reinforcement Learning Environment for Large Scale City Traffic Scenario (WWW 2019)</a></li>
                        <li><a href="https://scholar.google.com/scholar?q=Toward+a+thousand+lights%3A+Decentralized+deep+reinforcement+learning+for+large-scale+traffic+signal+control+AAAI+2020" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Toward a thousand lights: Decentralized deep reinforcement learning for large-scale traffic signal control (AAAI 2020)</a></li>
                        <li><a href="https://scholar.google.com/scholar?q=Recent+Advances+in+Reinforcement+Learning+for+Traffic+Signal+Control%3A+A+Survey+of+Models+and+Evaluation+SIGKDD+Explorations+2020" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Recent Advances in Reinforcement Learning for Traffic Signal Control: A Survey of Models and Evaluation (SIGKDD Explorations 2020)</a></li>
                      </ul>
                    </div>

                    <div className="text-sm flex items-start gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-xs uppercase mr-2">Collaborations:</span>
                        Vikash Gayah (Civil Engineering, Penn State), Traffic policy makers in Hangzhou, Nanchang, Wuxi
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Environment</h4>
                    <p className="text-sm mb-3">Big data analysis for water quality in the area of shale gas development</p>
                    
                    <div className="text-sm font-mono bg-secondary/50 p-4 border-l-2 border-primary mb-4">
                      <div className="font-bold mb-2 text-xs uppercase text-muted-foreground">Selected Publications</div>
                      <ul className="space-y-2 text-xs">
                        <li><a href="https://scholar.google.com/scholar?q=Searching+for+Anomalous+Methane+in+Shallow+Groundwater+near+Shale+Gas+Wells+Journal+of+Contaminant+Hydrology+2016" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Searching for Anomalous Methane in Shallow Groundwater near Shale Gas Wells (Journal of Contaminant Hydrology 2016)</a></li>
                        <li><a href="https://scholar.google.com/scholar?q=Contextual+Spatial+Outlier+Detection+with+Metric+Learning+KDD+2017" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Contextual Spatial Outlier Detection with Metric Learning (KDD 2017)</a></li>
                        <li><a href="https://scholar.google.com/scholar?q=Big+groundwater+data+sets+reveal+possible+rare+contamination+amid+otherwise+improved+water+quality+for+some+analytes+in+a+region+of+Marcellus+Shale+development+Environmental+Science+%26+Technology+2018" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Big groundwater data sets reveal possible rare contamination amid otherwise improved water quality for some analytes in a region of Marcellus Shale development (Environmental Science & Technology 2018)</a></li>
                        <li><a href="https://scholar.google.com/scholar?q=Knowledge-based+Residual+Learning+IJCAI+2021" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Knowledge-based Residual Learning (IJCAI 2021)</a></li>
                      </ul>
                    </div>

                    <div className="text-sm flex items-start gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-xs uppercase mr-2">Collaborations:</span>
                        Susan Brantley (Geosciences, Penn State), Tao Wen (Earth and Environmental Sciences, Syracuse University)
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Crime</h4>
                    <p className="text-sm mb-3">Using open city data to better understand crime rates</p>
                    
                    <div className="text-sm font-mono bg-secondary/50 p-4 border-l-2 border-primary mb-4">
                      <div className="font-bold mb-2 text-xs uppercase text-muted-foreground">Selected Publications</div>
                      <ul className="space-y-2 text-xs">
                        <li><a href="https://scholar.google.com/scholar?q=Crime+Rate+Inference+with+Big+Data+KDD+2016" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Crime Rate Inference with Big Data (KDD 2016)</a></li>
                        <li><a href="https://scholar.google.com/scholar?q=Non-Stationary+Model+for+Crime+Rate+Inference+Using+Modern+Urban+Data+Transaction+of+Big+Data+2017" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Non-Stationary Model for Crime Rate Inference Using Modern Urban Data (Transaction of Big Data 2017)</a></li>
                        <li><a href="https://scholar.google.com/scholar?q=Region+Representation+Learning+via+Mobility+Flow+CIKM+2017" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Region Representation Learning via Mobility Flow (CIKM 2017)</a></li>
                        <li><a href="https://scholar.google.com/scholar?q=Network+spillovers+and+neighborhood+crime%3A+A+computational+statistics+analysis+of+employment-based+networks+of+neighborhoods+Justice+Quarterly+2021" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Network spillovers and neighborhood crime: A computational statistics analysis of employment-based networks of neighborhoods (Justice Quarterly 2021)</a></li>
                      </ul>
                    </div>

                    <div className="text-sm flex items-start gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-xs uppercase mr-2">Collaborations:</span>
                        Corina Graif (Sociology and Criminology, Penn State), Daniel Kifer (Computer Science and Engineering, Penn State)
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Traffic Prediction</h4>
                    <p className="text-sm mb-3">We are among the first to study deep learning for traffic prediction</p>
                    
                    <div className="text-sm font-mono bg-secondary/50 p-4 border-l-2 border-primary mb-4">
                      <div className="font-bold mb-2 text-xs uppercase text-muted-foreground">Selected Publications</div>
                      <ul className="space-y-2 text-xs">
                        <li><a href="https://scholar.google.com/scholar?q=Deep+multi-view+spatial-temporal+network+for+taxi+demand+prediction+AAAI+2018" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Deep multi-view spatial-temporal network for taxi demand prediction (AAAI 2018)</a></li>
                        <li><a href="https://scholar.google.com/scholar?q=Revisiting+spatial-temporal+similarity%3A+A+deep+learning+framework+for+traffic+prediction+AAAI+2019" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Revisiting spatial-temporal similarity: A deep learning framework for traffic prediction (AAAI 2019)</a></li>
                        <li><a href="https://scholar.google.com/scholar?q=Learning+from+multiple+cities%3A+A+meta-learning+approach+for+spatial-temporal+prediction+WWW+2019" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Learning from multiple cities: A meta-learning approach for spatial-temporal prediction (WWW 2019)</a></li>
                        <li><a href="https://scholar.google.com/scholar?q=Hierarchically+Structured+Meta-Learning+ICML+2019" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Hierarchically Structured Meta-Learning (ICML 2019)</a></li>
                      </ul>
                    </div>

                    <div className="text-sm flex items-start gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-xs uppercase mr-2">Collaborations:</span>
                        DiDi Chuxing
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Ecology</h4>
                    <p className="text-sm mb-3">Discover animal behaviors and relationships through their movement traces</p>
                    
                    <div className="text-sm font-mono bg-secondary/50 p-4 border-l-2 border-primary mb-4">
                      <div className="font-bold mb-2 text-xs uppercase text-muted-foreground">Selected Publications</div>
                      <ul className="space-y-2 text-xs">
                        <li><a href="https://scholar.google.com/scholar?q=Mining+Periodic+Behaviors+for+Moving+Objects+KDD+2010" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Mining Periodic Behaviors for Moving Objects (KDD 2010)</a></li>
                        <li><a href="https://scholar.google.com/scholar?q=Swarm%3A+Mining+Relaxed+Temporal+Moving+Object+Clusters+VLDB+2010" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Swarm: Mining Relaxed Temporal Moving Object Clusters (VLDB 2010)</a></li>
                        <li><a href="https://scholar.google.com/scholar?q=Mining+Following+Relationships+in+Movement+Data+ICDM+2013" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Mining Following Relationships in Movement Data (ICDM 2013)</a></li>
                        <li><a href="https://scholar.google.com/scholar?q=Attraction+and+Avoidance+Detection+from+Movements+VLDB+2014" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all">Attraction and Avoidance Detection from Movements (VLDB 2014)</a></li>
                      </ul>
                    </div>

                    <div className="text-sm flex items-start gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-xs uppercase mr-2">Collaborations:</span>
                        Roland Kays (NC Museum of Natural Sciences), Meg Crofoot (Max Planck Institute of Animal Behavior)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-primary font-mono border-b border-border pb-2">Media</h3>
              
              <div className="grid gap-12">
                <div className="space-y-8">
                  <h4 className="font-bold flex items-center gap-2 text-lg"><Youtube className="w-5 h-5" /> On Youtube</h4>
                  
                  <div className="grid gap-8 pl-6 border-l border-border">
                    <div className="group">
                      <div className="text-xs font-bold uppercase text-primary mb-1">Tutorial</div>
                      <h5 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Learning with Small Data</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A tutorial at KDD 2020 conference. Introducing the methods how to build machine learning models when you only have a small amount of data.
                      </p>
                    </div>
                    
                    <div className="group">
                      <div className="text-xs font-bold uppercase text-primary mb-1">Documentary</div>
                      <h5 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">City Brain</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Documentary of my sabbatical leave in Hangzhou working on city brain open research in 2019 (in Chinese).
                      </p>
                    </div>

                    <div className="group">
                      <div className="text-xs font-bold uppercase text-primary mb-1">Talk</div>
                      <h5 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Mining Human Mobility Data</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Talk at the Institute of Transportation Studies (ITS) in University of California – Berkeley on April 13, 2018.
                      </p>
                    </div>

                    <div className="group">
                      <div className="text-xs font-bold uppercase text-primary mb-1">Interview</div>
                      <h5 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">My Experience as a Female in Tech</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A short interview by Women Data Leaders in Russia project during KDD 2019 conference.
                      </p>
                    </div>

                    <div className="group">
                      <div className="text-xs font-bold uppercase text-primary mb-1">Tutorial</div>
                      <h5 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Mining Animal Relationships from Movement Traces</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Tutorial presented at Symposium on Animal Movement, held at the North Carolina Museum of Natural Sciences in Raleigh on May 7, 2014.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <h4 className="font-bold flex items-center gap-2 text-lg"><Newspaper className="w-5 h-5" /> In the News</h4>
                  
                  <div className="grid gap-6 pl-6 border-l border-border">
                    <div className="group">
                      <div className="text-xs font-mono text-muted-foreground mb-1">NEWS.PSU.EDU on APRIL 28, 2021</div>
                      <a href="#" className="font-bold text-lg hover:text-primary transition-colors block">
                        After change of course, IST alumnus lands career in academics
                      </a>
                    </div>

                    <div className="group">
                      <div className="text-xs font-mono text-muted-foreground mb-1">NEWS.PSU.EDU on JANUARY 17, 2020</div>
                      <a href="#" className="font-bold text-lg hover:text-primary transition-colors block">
                        Using machine learning to reduce traffic congestion
                      </a>
                    </div>

                    <div className="group">
                      <div className="text-xs font-mono text-muted-foreground mb-1">NEWS.PSU.EDU on AUGUST 16, 2016</div>
                      <a href="#" className="font-bold text-lg hover:text-primary transition-colors block">
                        Data on taxi routes and points of interest may improve crime predictions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
