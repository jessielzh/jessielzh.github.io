import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Video, Newspaper, Users, Youtube, Mic, BookOpen, Trophy, GraduationCap, Moon, Sun, Sparkles, UserPlus } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { TokenUsageHeatmap } from "@/components/TokenUsageHeatmap";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

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
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-none mb-2 font-display">
                  Zhenhui Jessie Li
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
              <button 
                onClick={toggleTheme}
                className="flex items-center gap-2 hover:text-primary transition-colors mt-2"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? (
                  <>Light Mode <Sun className="w-4 h-4" /></>
                ) : (
                  <>Dark Mode <Moon className="w-4 h-4" /></>
                )}
              </button>
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

              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-primary font-mono">Current Position</h3>
              <ul className="space-y-6 mb-10">
                <li className="group">
                  <div className="font-bold group-hover:text-primary transition-colors">Professor</div>
                  <div className="text-muted-foreground text-sm">The Hong Kong Polytechnic University (PolyU)</div>
                </li>
              </ul>

              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-primary font-mono">Experience</h3>
              <ul className="space-y-6">
                <li className="group">
                  <div className="font-bold group-hover:text-primary transition-colors">Tenured Professor (2012-2021)</div>
                  <div className="text-muted-foreground text-sm">Pennsylvania State University</div>
                </li>
                <li className="group">
                  <div className="font-bold group-hover:text-primary transition-colors">Chief Scientist (2021-2026)</div>
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
              <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-primary font-mono border-b border-border pb-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> What's New
              </h3>

              <div className="border-l-4 border-primary pl-6">
                <div className="text-xs font-bold uppercase text-primary mb-1 font-mono">New Paper · KDD 2026</div>
                <h4 className="text-lg font-bold text-foreground mb-1">
                  <a href="https://jessielzh.com/GLC-road-coordination/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Local Rules, Global Efficiency: Emergent Coordination on Large-Scale Road Networks
                  </a>
                </h4>
                <div className="text-xs text-muted-foreground italic mb-4 font-mono">Zhenhui Jessie Li</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Imagine a city full of autonomous vehicles — how could they coordinate to achieve peak efficiency, with no central controller in charge? This paper proposes GLC (Guided Local Coordination), the first algorithm of its kind for large-scale road networks, where vehicles follow simple local rules to collectively minimize delay. Strikingly, left-turning vehicles spontaneously self-organize into circular flows resembling roundabouts — an emergent behavior never explicitly programmed. Validated on Manhattan's road network with 10,000 agents.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-mono">
                  <a href="/papers/2026-kdd-GLC-final.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                    <ArrowUpRight className="w-3 h-3" /> Paper
                  </a>
                  <a href="https://jessielzh.com/GLC-road-coordination/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                    <ArrowUpRight className="w-3 h-3" /> Project Page
                  </a>
                  <a href="https://github.com/jessielzh/GLC-road-coordination" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                    <ArrowUpRight className="w-3 h-3" /> Code
                  </a>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-primary font-mono border-b border-border pb-2 flex items-center gap-2">
                <UserPlus className="w-3.5 h-3.5" /> Openings
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm looking for Research Assistants — could turn into a PhD, could be an internship, could just be a short project. You don't need to be from a top school, have a perfect GPA, or already have a publication. What I actually care about is whether you're good at getting AI to do creative things. So along with your CV, tell me: how many tokens have you used recently, and what's the most interesting thing you built with them? Surprise me.
              </p>
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-primary font-mono border-b border-border pb-2">Token Usage</h3>
              <TokenUsageHeatmap />
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-primary font-mono border-b border-border pb-2">Research</h3>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl font-medium text-foreground mb-6">
                  AI for Science and Engineering
                </p>



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
              <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-primary font-mono border-b border-border pb-2">Advising</h3>
              
              <div className="grid gap-8">
                <div className="space-y-6">
                  <h4 className="font-bold flex items-center gap-2 text-lg"><GraduationCap className="w-5 h-5" /> PhD at Penn State</h4>
                  
                  <div className="grid gap-4 pl-6 border-l border-border">
                    <div className="group">
                      <a href="https://huaxiuyao.io/" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary transition-colors">Huaxiu Yao (2017-2021)</a>
                      <div className="text-sm text-muted-foreground">Assistant Professor at University of North Carolina Chapel Hill</div>
                    </div>

                    <div className="group">
                      <a href="https://science.byu.edu/directory/porter-jenkins" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary transition-colors">Porter Jenkins (2017-2020)</a>
                      <div className="text-sm text-muted-foreground">Assistant Professor at Brigham Young University</div>
                    </div>

                    <div className="group">
                      <a href="https://labs.engineering.asu.edu/hw/" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary transition-colors">Hua Wei (2017-2020)</a>
                      <div className="text-sm text-muted-foreground">Assistant Professor at Arizona State University</div>
                    </div>

                    <div className="group">
                      <a href="https://jhc.sjtu.edu.cn/~gjzheng/" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary transition-colors">Guanjie Zheng (2015-2020)</a>
                      <div className="text-sm text-muted-foreground">Associate Professor at Shanghai Jiao Tong University</div>
                    </div>

                    <div className="group">
                      <a href="https://www.linkedin.com/in/yuhsuankuo/" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary transition-colors">Yu-Hsuan Kuo (2013-2018)</a>
                      <div className="text-sm text-muted-foreground">Applied Scientist at Amazon</div>
                    </div>

                    <div className="group">
                      <a href="https://www.linkedin.com/in/hongjian-wang-54003968/" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary transition-colors">Hongjian Wang (2013-2018)</a>
                      <div className="text-sm text-muted-foreground">Staff Software Engineer at Meta</div>
                    </div>

                    <div className="group">
                      <a href="https://www.linkedin.com/in/fei-wu-3b1b1b1b/" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary transition-colors">Fei Wu (2013-2018)</a>
                      <div className="text-sm text-muted-foreground">Staff Software Engineer at Meta</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="font-bold flex items-center gap-2 text-lg"><Users className="w-5 h-5" /> Post Doc at Penn State</h4>
                  
                  <div className="grid gap-4 pl-6 border-l border-border">
                    <div className="group">
                      <a href="https://jaywen.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary transition-colors">Tao Wen (2017-2020)</a>
                      <div className="text-sm text-muted-foreground">Associate Professor at Syracuse University</div>
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
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        A tutorial at KDD 2020 conference. Introducing the methods how to build machine learning models when you only have a small amount of data.
                      </p>
                      <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden border border-border">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src="https://www.youtube.com/embed/Vjrnst2X1ms" 
                          title="Learning with Small Data" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="text-xs font-bold uppercase text-primary mb-1">Documentary</div>
                      <h5 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">City Brain</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Documentary of my sabbatical leave in Hangzhou working on city brain open research in 2019 (in Chinese).
                      </p>
                      <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden border border-border">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src="https://www.youtube.com/embed/RCXiswPeHn4" 
                          title="City Brain Documentary" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>

                    <div className="group">
                      <div className="text-xs font-bold uppercase text-primary mb-1">Talk</div>
                      <h5 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Mining Human Mobility Data</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Talk at the Institute of Transportation Studies (ITS) in University of California – Berkeley on April 13, 2018.
                      </p>
                      <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden border border-border">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src="https://www.youtube.com/embed/KABMWgEUwlA" 
                          title="Mining Human Mobility Data" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>

                    <div className="group">
                      <div className="text-xs font-bold uppercase text-primary mb-1">Interview</div>
                      <h5 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">My Experience as a Female in Tech</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        A short interview by Women Data Leaders in Russia project during KDD 2019 conference.
                      </p>
                      <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden border border-border">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src="https://www.youtube.com/embed/Ag4tx0AzafI" 
                          title="My Experience as a Female in Tech" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>

                    <div className="group">
                      <div className="text-xs font-bold uppercase text-primary mb-1">Tutorial</div>
                      <h5 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Mining Animal Relationships from Movement Traces</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Tutorial presented at Symposium on Animal Movement, held at the North Carolina Museum of Natural Sciences in Raleigh on May 7, 2014.
                      </p>
                      <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden border border-border">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src="https://www.youtube.com/embed/uL8ygSjiTe0" 
                          title="Mining Animal Relationships from Movement Traces" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <h4 className="font-bold flex items-center gap-2 text-lg"><Newspaper className="w-5 h-5" /> In the News</h4>
                  
                  <div className="grid gap-6 pl-6 border-l border-border">
                    <div className="group">
                      <div className="text-xs font-mono text-muted-foreground mb-1">HZYL.HANGZHOU.COM.CN on OCTOBER 14, 2022</div>
                      <a href="https://hzyl.hangzhou.com.cn/content/content_8375093.html" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:text-primary transition-colors block">
                        Hangzhou Outstanding Young Talents
                      </a>
                    </div>

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
