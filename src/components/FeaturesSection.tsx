
import { CheckCircle, Bell, User } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export const FeaturesSection = () => {
  const { elementRef: sectionRef, hasBeenVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px",
  });

  const { elementRef: titleRef, hasBeenVisible: titleVisible } = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: "0px",
  });

  const { elementRef: featuresRef, hasBeenVisible: featuresVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "0px",
  });

  const { elementRef: mockupRef, hasBeenVisible: mockupVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "0px",
  });
  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left column - Text */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div 
              ref={titleRef}
              className={`space-y-4 transform transition-all duration-1000 ease-out ${
                titleVisible 
                  ? 'translate-x-0 opacity-100' 
                  : '-translate-x-12 opacity-0'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                The Command Center for Your{" "}
                <span className="gradient-text  bg-gradient-to-r from-primary via-purple-500 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%]">
                  Courses
                </span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Everything you need for each course, beautifully organized and instantly accessible.
              </p>
            </div>
            
            <div 
              ref={featuresRef}
              className="space-y-6 sm:space-y-8"
            >
              {[
                {
                  icon: CheckCircle,
                  title: "All Your Materials in One Place",
                  description: "Lectures, assignments, readings, and resources organized by course.",
                  delay: "delay-0"
                },
                {
                  icon: Bell,
                  title: "Never Miss an Update",
                  description: "Real-time announcements and notifications keep you in the loop.",
                  delay: "delay-200"
                },
                {
                  icon: User,
                  title: "Instant Instructor Access",
                  description: "Contact information and office hours at your fingertips.",
                  delay: "delay-500"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 sm:space-x-6 transform transition-all duration-1000 ease-out ${feature.delay} ${
                    featuresVisible 
                      ? 'translate-x-0 opacity-100 scale-100' 
                      : '-translate-x-8 opacity-0 scale-95'
                  } hover:scale-105 group cursor-pointer`}
                >
                  <div className="flex-shrink-0 p-2 sm:p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg lg:text-xl group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Course Details Mockup */}
          <div 
            ref={mockupRef}
            className={`relative transform transition-all duration-1200 ease-out ${
              mockupVisible 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-12 opacity-0 scale-95'
            }`}
          >
            <div className="glass-card p-4 sm:p-6 lg:p-8 hover-lift relative overflow-hidden group">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-secondary/40 rounded-full animate-float delay-1000"></div>
                <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-float delay-2000"></div>
              </div>
              
              <div className="relative z-10 space-y-4 sm:space-y-6 lg:space-y-8">
                <div 
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 transform transition-all duration-800 ease-out ${
                    mockupVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                    Computer Science 101
                  </h3>
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium animate-pulse group-hover:animate-bounce-gentle">
                    Active
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  {/* Course Content Card */}
                  <div 
                    className={`glass-card p-3 sm:p-4 lg:p-5 group/content hover:scale-[1.02] transition-all duration-500 transform ${
                      mockupVisible ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <h4 className="font-semibold text-primary mb-3 sm:mb-4 text-sm sm:text-base flex items-center group-hover/content:text-primary/80 transition-colors duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse group-hover/content:animate-bounce-gentle"></div>
                      Course Content
                    </h4>
                    <div className="space-y-2 sm:space-y-3">
                      {[
                        { title: "Chapter 1: Introduction to Programming", completed: true },
                        { title: "Chapter 2: Variables and Data Types", completed: true },
                        { title: "Chapter 3: Control Structures", completed: false }
                      ].map((item, index) => (
                        <div 
                          key={index}
                          className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-background/50 transition-all duration-300 transform hover:scale-[1.01] ${
                            mockupVisible ? `opacity-100 delay-${500 + index * 200}` : 'opacity-0'
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            item.completed 
                              ? 'bg-primary animate-pulse hover:animate-bounce-gentle' 
                              : 'bg-muted-foreground hover:bg-muted-foreground/70'
                          }`}></div>
                          <span className={`text-xs sm:text-sm transition-colors duration-300 ${
                            item.completed 
                              ? 'text-foreground hover:text-primary' 
                              : 'text-muted-foreground hover:text-foreground'
                          }`}>
                            {item.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Announcements Card */}
                  <div 
                    className={`glass-card p-3 sm:p-4 lg:p-5 group/announcements hover:scale-[1.02] transition-all duration-500 transform ${
                      mockupVisible ? 'translate-y-0 opacity-100 delay-600' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <h4 className="font-semibold text-secondary mb-3 sm:mb-4 text-sm sm:text-base flex items-center group-hover/announcements:text-secondary/80 transition-colors duration-300">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse group-hover/announcements:animate-bounce-gentle"></div>
                      Recent Announcements
                    </h4>
                    <div className="space-y-3 sm:space-y-4">
                      {[
                        { 
                          title: "Assignment 2 Posted", 
                          description: "Due March 20th - Object-Oriented Programming",
                          color: "primary"
                        },
                        { 
                          title: "Office Hours Update", 
                          description: "Now available on Fridays 2-4 PM",
                          color: "secondary"
                        }
                      ].map((announcement, index) => (
                        <div 
                          key={index}
                          className={`border-l-4 pl-3 sm:pl-4 transition-all duration-500 hover:pl-5 hover:scale-[1.01] transform ${
                            announcement.color === "primary" ? "border-primary hover:border-primary/70" : "border-secondary hover:border-secondary/70"
                          } ${mockupVisible ? `opacity-100 delay-${800 + index * 200}` : 'opacity-0'}`}
                        >
                          <div className="font-medium text-xs sm:text-sm hover:text-primary transition-colors duration-300 cursor-pointer">
                            {announcement.title}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1 hover:text-foreground transition-colors duration-300">
                            {announcement.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Instructor Card */}
                  <div 
                    className={`glass-card p-3 sm:p-4 lg:p-5 group/instructor hover:scale-[1.02] transition-all duration-500 transform ${
                      mockupVisible ? 'translate-y-0 opacity-100 delay-1000' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base group-hover/instructor:text-primary transition-colors duration-300">
                      Instructor
                    </h4>
                    <div className="flex items-center space-x-3 sm:space-x-4 group/avatar cursor-pointer">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg transition-all duration-500 group-hover/avatar:scale-110 group-hover/avatar:rotate-6 group-hover/avatar:shadow-lg">
                        YT
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-xs sm:text-sm lg:text-base group-hover/instructor:text-primary transition-colors duration-300 truncate">
                          Dr. Yousef Tamer
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground group-hover/instructor:text-foreground transition-colors duration-300 truncate">
                          youseftamereg@gmail.com
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
