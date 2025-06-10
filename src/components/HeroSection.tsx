
import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Battery, Maximize2, Minimize2, X } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-bounce-gentle"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left column - Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in-up">
                Your Entire{" "}
                <span className="gradient-text ">Academic Life</span>,{" "}
                Unified.
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up-delay-1">
                Stop juggling scattered notes, clunky portals, and missed deadlines. 
                T.S Helper brings your courses, tasks, and tools into one simple, 
                fast, and free hub.
              </p>
            </div>
            
            <div className="animate-fade-in-up-delay-2">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl hover-lift group shadow-2xl animate-pulse-glow"
              >
                Get Started for Free
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right column - Enhanced Desktop Browser Mockup */}
          <div className="relative animate-slide-in-right">
            <div className="glass-card p-2 sm:p-4 lg:p-6 hover-lift animate-float">
              {/* Browser Window Frame */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg sm:rounded-xl lg:rounded-2xl p-1 shadow-2xl">
                <div className="bg-background rounded-md sm:rounded-lg lg:rounded-xl overflow-hidden">
                  {/* Browser Header */}
                  <div className="bg-muted/80 backdrop-blur-sm px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 flex items-center justify-between border-b animate-slide-in-bottom">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="flex space-x-1 sm:space-x-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer animate-fade-in-scale"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer animate-fade-in-scale-delay-1"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors cursor-pointer animate-fade-in-scale-delay-2"></div>
                      </div>
                      <div className="hidden sm:flex items-center space-x-1 text-muted-foreground">
                        <Minimize2 className="w-3 h-3 hover:text-foreground cursor-pointer transition-colors" />
                      </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-md sm:rounded-lg px-2 sm:px-3 lg:px-4 py-1 sm:py-2 text-xs sm:text-sm text-muted-foreground flex-1 ml-2 sm:ml-4 max-w-xs lg:max-w-sm animate-slide-in-bottom-delay-1">
                      🔒 tshelper.app/dashboard
                    </div>
                    <div className="hidden sm:flex items-center space-x-2 text-muted-foreground animate-slide-in-bottom-delay-2">
                      <Wifi className="w-3 h-3 sm:w-4 sm:h-4" />
                      <Battery className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                  
                  {/* Enhanced Dashboard Content */}
                  <div className="p-3 sm:p-4 lg:p-6 xl:p-8 space-y-3 sm:space-y-4 lg:space-y-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 animate-fade-in-up">
                      <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">Dashboard</h2>
                      <div className="bg-primary/20 text-primary px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium animate-bounce-gentle">
                        Spring 2024
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                      <div className="glass-card p-3 sm:p-4 lg:p-5 space-y-3 sm:space-y-4 hover-lift animate-fade-in-scale">
                        <h3 className="font-semibold text-primary text-sm sm:text-base flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                          My Courses
                        </h3>
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex items-center space-x-2 sm:space-x-3 p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 hover:scale-[1.02] animate-slide-in-bottom">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-pulse"></div>
                            <span className="text-xs sm:text-sm font-medium">Computer Science 101</span>
                          </div>
                          <div className="flex items-center space-x-2 sm:space-x-3 p-2 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-all duration-300 hover:scale-[1.02] animate-slide-in-bottom-delay-1">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary rounded-full animate-pulse delay-300"></div>
                            <span className="text-xs sm:text-sm font-medium">Mathematics 201</span>
                          </div>
                          <div className="flex items-center space-x-2 sm:space-x-3 p-2 rounded-lg bg-green-500/5 hover:bg-green-500/10 transition-all duration-300 hover:scale-[1.02] animate-slide-in-bottom-delay-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse delay-500"></div>
                            <span className="text-xs sm:text-sm font-medium">Physics 150</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="glass-card p-3 sm:p-4 lg:p-5 space-y-3 sm:space-y-4 hover-lift animate-fade-in-scale-delay-1">
                        <h3 className="font-semibold text-sm sm:text-base flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                          Upcoming Exams
                        </h3>
                        <div className="space-y-2 sm:space-y-3">
                          <div className="p-2 sm:p-3 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 hover:scale-[1.02] transition-all duration-300 animate-slide-in-bottom">
                            <div className="font-medium text-xs sm:text-sm">CS 101 Midterm</div>
                            <div className="text-xs text-red-600 dark:text-red-400">March 15, 2:00 PM</div>
                          </div>
                          <div className="p-2 sm:p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 hover:scale-[1.02] transition-all duration-300 animate-slide-in-bottom-delay-1">
                            <div className="font-medium text-xs sm:text-sm">Math Quiz</div>
                            <div className="text-xs text-yellow-600 dark:text-yellow-400">March 18, 10:00 AM</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Section */}
                    <div className="glass-card p-3 sm:p-4 lg:p-5 hover-lift animate-fade-in-scale-delay-2">
                      <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                        Course Progress
                      </h3>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="animate-slide-in-bottom">
                          <div className="flex justify-between text-xs sm:text-sm mb-1 sm:mb-2">
                            <span>Computer Science 101</span>
                            <span className="text-primary font-semibold">75%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2 sm:h-2.5 overflow-hidden">
                            <div className="bg-gradient-to-r from-primary to-primary/80 h-full rounded-full transition-all duration-1000 ease-out hover:scale-105" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                        <div className="animate-slide-in-bottom-delay-1">
                          <div className="flex justify-between text-xs sm:text-sm mb-1 sm:mb-2">
                            <span>Mathematics 201</span>
                            <span className="text-primary font-semibold">60%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2 sm:h-2.5 overflow-hidden">
                            <div className="bg-gradient-to-r from-primary to-primary/80 h-full rounded-full transition-all duration-1000 ease-out hover:scale-105" style={{ width: '60%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
