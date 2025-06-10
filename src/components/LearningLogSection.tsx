
import { Calendar, Clock, MapPin, AlertCircle, CheckSquare, Wifi, Battery, Signal } from "lucide-react";
import { useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export const LearningLogSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { elementRef, isVisible, hasBeenVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-50px",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <section ref={elementRef} className="py-8 sm:py-12 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left column - Realistic iOS Mockup */}
          <div className={`relative flex justify-center transition-all duration-1000 ${
            hasBeenVisible 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 -translate-x-12 scale-95'
          }`}>
            <div className="relative">
              {/* iPhone Frame with ultra-realistic design */}
              <div className={`relative bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[3.5rem] p-[2px] sm:p-[3px] shadow-[0_15px_40px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.1)] transition-all duration-700 ${
                hasBeenVisible ? 'animate-float hover-lift' : ''
              }`} 
              style={{ 
                width: 'clamp(250px, 80vw, 300px)', 
                height: 'clamp(500px, 160vw, 600px)',
                maxWidth: '300px'
              }}>
                {/* Enhanced metallic border reflection with animation */}
                <div className={`absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[3.5rem] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-opacity duration-1000 ${
                  hasBeenVisible ? 'opacity-60 animate-shimmer' : 'opacity-0'
                }`}></div>
                
                {/* Camera notch with improved responsiveness */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 lg:w-32 h-4 sm:h-5 lg:h-6 bg-black rounded-b-xl lg:rounded-b-2xl z-10 shadow-inner">
                  <div className="absolute top-0.5 sm:top-1 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 lg:w-12 h-2 sm:h-2.5 lg:h-3 bg-slate-800 rounded-full flex items-center justify-center">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
                
                {/* Screen bezel */}
                <div className="bg-black rounded-[2.2rem] sm:rounded-[2.7rem] lg:rounded-[3.2rem] overflow-hidden w-full h-full relative">
                  {/* Screen Content */}
                  <div className="bg-white dark:bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden w-full h-full relative">
                    {/* iOS Status Bar - Enhanced and Responsive */}
                    <div className={`bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 flex items-center justify-between text-xs sm:text-sm font-medium relative z-20 transition-all duration-700 ${
                      hasBeenVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                    }`} 
                    style={{ paddingTop: 'clamp(20px, 6vw, 30px)' }}>
                      <div className="flex items-center space-x-1">
                        <Signal className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
                        <Wifi className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
                      </div>
                      <span className="font-semibold text-black dark:text-white text-xs sm:text-sm">{formatTime(currentTime)}</span>
                      <div className="flex items-center space-x-1">
                        <div className="flex space-x-0.5">
                          <div className="w-0.5 sm:w-1 h-1.5 sm:h-2 bg-black dark:bg-white rounded-full"></div>
                          <div className="w-0.5 sm:w-1 h-1.5 sm:h-2 bg-black dark:bg-white rounded-full"></div>
                          <div className="w-0.5 sm:w-1 h-1.5 sm:h-2 bg-black dark:bg-white rounded-full"></div>
                          <div className="w-0.5 sm:w-1 h-1.5 sm:h-2 bg-gray-400 rounded-full"></div>
                        </div>
                        <div className="relative">
                          <Battery className="w-4 sm:w-5 lg:w-6 h-2.5 sm:h-3 text-green-500" />
                          <div className="absolute inset-0 bg-green-500 rounded-sm" style={{ width: '99%' }}></div>
                        </div>
                        <span className="text-xs font-medium hidden sm:inline">99%</span>
                      </div>
                    </div>
                    
                    {/* App Header with iOS style */}
                    <div className={`px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-700 delay-100 ${
                      hasBeenVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white">Learning Log</h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Your academic timeline</p>
                    </div>
                    
                    {/* Timeline Content with iOS scrolling behavior */}
                    <div className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 space-y-2 sm:space-y-3 lg:space-y-4 overflow-y-auto bg-gray-50/50 dark:bg-slate-800/50 custom-scrollbar" 
                         style={{ 
                           height: 'calc(100% - 100px)', 
                           paddingBottom: 'clamp(40px, 12vw, 60px)' 
                         }}>
                      {/* Upcoming Exams Section */}
                      <div className={`transition-all duration-700 delay-200 ${
                        hasBeenVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                      }`}>
                        <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2 sm:mb-2 lg:mb-3 flex items-center text-sm sm:text-base lg:text-lg">
                          <AlertCircle className="h-3 sm:h-4 lg:h-5 w-3 sm:w-4 lg:w-5 mr-2" />
                          Upcoming Exams
                        </h4>
                        
                        <div className="space-y-2">
                          <div className={`bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-2.5 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform ${
                            hasBeenVisible ? 'hover:scale-[1.02] hover:-translate-y-1' : ''
                          }`}>
                            <div className="flex items-start justify-between mb-2 sm:mb-2 lg:mb-3">{/* ...existing code... */}
                              <div className="flex-1">
                                <div className="font-semibold text-sm sm:text-base lg:text-lg text-black dark:text-white">CS 101 Midterm</div>
                                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Computer Science 101</div>
                              </div>
                              <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium border border-red-200 dark:border-red-800">
                                Critical
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                                <Calendar className="h-3 sm:h-4 w-3 sm:w-4 mr-2 sm:mr-3 text-blue-600 dark:text-blue-400" />
                                March 15, 2024
                              </div>
                              <div className="flex items-center text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                                <Clock className="h-3 sm:h-4 w-3 sm:w-4 mr-2 sm:mr-3 text-orange-600 dark:text-orange-400" />
                                2:00 PM - 4:00 PM
                              </div>
                              <div className="flex items-center text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                                <MapPin className="h-3 sm:h-4 w-3 sm:w-4 mr-2 sm:mr-3 text-green-600 dark:text-green-400" />
                                <span className="truncate">Room 203, Science Building</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className={`bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-2.5 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform delay-75 ${
                            hasBeenVisible ? 'hover:scale-[1.02] hover:-translate-y-1' : ''
                          }`}>
                            <div className="flex items-start justify-between mb-2 sm:mb-2 lg:mb-3">{/* ...existing code... */}
                              <div className="flex-1">
                                <div className="font-semibold text-sm sm:text-base text-black dark:text-white">Math Quiz</div>
                                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Mathematics 201</div>
                              </div>
                              <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium border border-yellow-200 dark:border-yellow-800">
                                Medium
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                                <Calendar className="h-3 sm:h-4 w-3 sm:w-4 mr-2 sm:mr-3 text-blue-600 dark:text-blue-400" />
                                March 18, 2024
                              </div>
                              <div className="flex items-center text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                                <Clock className="h-3 sm:h-4 w-3 sm:w-4 mr-2 sm:mr-3 text-orange-600 dark:text-orange-400" />
                                10:00 AM - 11:00 AM
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Assignments Due Section */}
                      <div className={`transition-all duration-700 delay-300 ${
                        hasBeenVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                      }`}>
                        <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2 sm:mb-2 lg:mb-3 flex items-center text-sm sm:text-base lg:text-lg">
                          <CheckSquare className="h-3 sm:h-4 lg:h-5 w-3 sm:w-4 lg:w-5 mr-2" />
                          Assignments Due
                        </h4>
                        
                        <div className="space-y-2">
                          <div className={`bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-2.5 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform ${
                            hasBeenVisible ? 'hover:scale-[1.02] hover:-translate-y-1' : ''
                          }`}>
                            <div className="flex items-start justify-between mb-2 sm:mb-2 lg:mb-3">{/* ...existing code... */}
                              <div className="flex-1">
                                <div className="font-semibold text-sm sm:text-base text-black dark:text-white">Essay: Modern Literature</div>
                                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">English 301</div>
                              </div>
                              <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-800">
                                In Progress
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                                <Calendar className="h-3 sm:h-4 w-3 sm:w-4 mr-2 sm:mr-3 text-blue-600 dark:text-blue-400" />
                                Due March 20, 2024
                              </div>
                              <div className="mt-2 text-xs text-blue-600 dark:text-blue-400 font-medium">
                                ✓ Research completed • Outline ready
                              </div>
                            </div>
                          </div>
                          
                          <div className={`bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-2.5 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform delay-75 ${
                            hasBeenVisible ? 'hover:scale-[1.02] hover:-translate-y-1' : ''
                          }`}>
                            <div className="flex items-start justify-between mb-2 sm:mb-2 lg:mb-3">{/* ...existing code... */}
                              <div className="flex-1">
                                <div className="font-semibold text-sm sm:text-base text-black dark:text-white">Lab Report #3</div>
                                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Physics 150</div>
                              </div>
                              <div className="bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-600">
                                To-Do
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                                <Calendar className="h-3 sm:h-4 w-3 sm:w-4 mr-2 sm:mr-3 text-blue-600 dark:text-blue-400" />
                                Due March 22, 2024
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* iOS Home Indicator */}
                    <div className={`absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-700 delay-500 ${
                      hasBeenVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                    }`}>
                      <div className="w-20 sm:w-28 lg:w-36 h-1 sm:h-1.5 bg-black/30 dark:bg-white/40 rounded-full shadow-inner"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced shadow effects and reflections with stagger animation */}
              <div className={`absolute -bottom-8 sm:-bottom-10 lg:-bottom-12 left-1/2 transform -translate-x-1/2 w-60 sm:w-70 lg:w-80 h-12 sm:h-14 lg:h-16 bg-black/30 blur-3xl rounded-full transition-all duration-1000 delay-400 ${
                hasBeenVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}></div>
              <div className={`absolute -bottom-4 sm:-bottom-5 lg:-bottom-6 left-1/2 transform -translate-x-1/2 w-40 sm:w-50 lg:w-60 h-6 sm:h-7 lg:h-8 bg-blue-500/20 blur-2xl rounded-full transition-all duration-1000 delay-500 ${
                hasBeenVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}></div>
              <div className={`absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 lg:w-40 h-3 sm:h-4 bg-white/10 blur-xl rounded-full transition-all duration-1000 delay-600 ${
                hasBeenVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}></div>
            </div>
          </div>

          {/* Right column - Text with enhanced animations */}
          <div className={`space-y-4 sm:space-y-6 lg:space-y-8 transition-all duration-1000 delay-300 ${
            hasBeenVisible 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 translate-x-12 scale-95'
          }`}>
            <div className="space-y-3 sm:space-y-4">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold transition-all duration-700 delay-400 ${
                hasBeenVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                Never Miss a{" "}
                <span className="gradient-text">Deadline</span>{" "}
                Again
              </h2>
              <p className={`text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed transition-all duration-700 delay-500 ${
                hasBeenVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                Your personalized learning timeline keeps track of everything important, 
                giving you clarity and peace of mind about what's coming up.
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className={`flex items-start space-x-3 sm:space-x-4 hover-lift p-3 sm:p-4 rounded-lg bg-primary/5 transition-all duration-700 delay-600 ${
                hasBeenVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}>
                <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                  <Calendar className="h-4 sm:h-5 w-4 sm:w-5 text-primary animate-icon-float" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">Smart Timeline View</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">See all your exams and assignments in chronological order with priority indicators.</p>
                </div>
              </div>
              
              <div className={`flex items-start space-x-3 sm:space-x-4 hover-lift p-3 sm:p-4 rounded-lg bg-secondary/5 transition-all duration-700 delay-700 ${
                hasBeenVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}>
                <div className="bg-secondary/60 p-2 rounded-lg flex-shrink-0">
                  <AlertCircle className="h-4 sm:h-5 w-4 sm:w-5 text-white animate-icon-float" style={{ animationDelay: '0.5s' }} />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">Priority Alerts</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Automatic notifications ensure you're always prepared for what matters most.</p>
                </div>
              </div>
              
              <div className={`flex items-start space-x-3 sm:space-x-4 hover-lift p-3 sm:p-4 rounded-lg bg-green-500/5 transition-all duration-700 delay-800 ${
                hasBeenVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}>
                <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
                  <Clock className="h-4 sm:h-5 w-4 sm:w-5 text-green-600 animate-icon-float" style={{ animationDelay: '1s' }} />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">Time Management</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Built-in time tracking helps you allocate study time effectively across all subjects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
