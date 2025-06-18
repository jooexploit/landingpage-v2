
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Star, 
  Github, 
  Twitter, 
  Instagram, 
  Linkedin,
  TrendingUp,
  CircleDollarSign,
  Clock,
  Users,
  ChevronLeft,
  ChevronRight,
  Quote,
  X,
  Play,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  CreditCard
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useState, useEffect, useRef } from "react";

export const CTASection = () => {
  const { elementRef, isVisible, hasBeenVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  // Testimonials data
// Replace your existing testimonials array with this one.
// The content is directly derived from the survey responses in your image.
const testimonials = [
  {
    id: 1,
    name: "Jooexploit",
    role: "Second Year CS Student",
    avatar: "JE",
    content: "Having more past exams for every subject is a game-changer. This platform provides the study references I actually need to prepare properly. It's an essential tool.",
    rating: 5, // Original rating: 10
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    name: "Mohamed Mostafa",
    role: "Second Year CS Student",
    avatar: "MM",
    content: "The best feature request I have is a schedule builder. The official university site is so unreliable. This platform is already 10x better, and that would make it perfect!",
    rating: 5, // Original rating: 10
    gradient: "from-green-500 to-teal-400"
  },
  {
    id: 3,
    name: "Menna A.",
    role: "First Year CS Student",
    avatar: "MA",
    content: "Honestly, this platform is better and more sufficient than the university's official website. It has everything I need and it actually works. So grateful for this!",
    rating: 5, // Original rating: 10
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    name: "Heba Reda",
    role: "First Year CS Student",
    avatar: "HR",
    content: "First-year courses can be tough to understand. This platform organizes everything so clearly that it genuinely helps me learn better. An indispensable tool for new students.",
    rating: 5, // Original rating: 9
    gradient: "from-orange-500 to-amber-400"
  },
  {
    id: 5,
    name: "Khadija S.",
    role: "First Year CS Student",
    avatar: "KS",
    content: "The interface is so clean! My one suggestion was adding a search bar, and seeing the team consider feedback like this is amazing. It makes finding files so much faster.",
    rating: 5, // Original rating: 10
    gradient: "from-rose-500 to-red-400"
  },
  {
    id: 6,
    name: "Yousef Shamaa",
    role: "Second Year CS Student",
    avatar: "YS",
    content: "As a CS student, I can appreciate the work behind this. The database of materials is solid. It's great to see a platform that's actively being developed and improved for us.",
    rating: 5, // Original rating: 10
    gradient: "from-indigo-500 to-violet-500"
  },
  {
    id: 7,
    name: "Mahmoud Wael",
    role: "First Year CS Student",
    avatar: "MW",
    content: "My biggest frustration with other student portals is slow loading and frequent crashes. This site is refreshingly fast and reliable. It just works, which saves so much stress.",
    rating: 4, // Original rating: 8
    gradient: "from-sky-500 to-blue-500"
  },
  {
    id: 8,
    name: "Ahmed M. Darwish",
    role: "First Year CS Student",
    avatar: "AD",
    content: "All the resources are here, but what I love is how easy it is to access the academic schedules. It solves one of the biggest problems we face as students. Thank you!",
    rating: 5, // Original rating: 10
    gradient: "from-emerald-500 to-lime-500"
  },
  {
    id: 9,
    name: "Abdelrahman Asaad",
    role: "Second Year CS Student",
    avatar: "AA",
    content: "What sets this apart is how quickly the materials from lectures and sections are updated. Getting the required files right away is incredibly helpful for staying on track.",
    rating: 5, // Original rating: 10
    gradient: "from-fuchsia-600 to-purple-600"
  },
  {
    id: 10,
    name: "Mohamed Sobhy",
    role: "First Year CS Student",
    avatar: "MS",
    content: "You guys are 100% on point! As a first-year student, this platform is a lifesaver. It’s better than I could have imagined. Keep up the amazing work!",
    rating: 5, // Original rating: 10
    gradient: "from-cyan-500 to-light-blue-500"
  },
  {
    id: 11,
    name: "Eslam Ashraf",
    role: "Second Year CS Student",
    avatar: "EA",
    content: "I used to struggle with the sheer amount of study materials. This platform makes it easy to find everything, which helps with the difficulty of the curriculum. Great job.",
    rating: 5, // Original rating: 10
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    id: 12,
    name: "Shrouk",
    role: "Second Year Student",
    avatar: "S",
    content: "The pressure from exams and assignments is intense. Having a single, reliable place for all course materials and communication really helps manage the stress. Highly recommend.",
    rating: 5, // Original rating: 10
    gradient: "from-pink-500 to-rose-500"
  },
];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!hasBeenVisible) return;
    
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [hasBeenVisible, testimonials.length]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  // Video modal functions
  const openVideoModal = () => {
    setIsVideoModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setIsVideoPlaying(false);
    setVideoProgress(0);
    document.body.style.overflow = 'unset';
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setVideoProgress(0);
      if (!isVideoPlaying) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setVideoProgress(progress);
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeVideoModal();
      }
    };

    if (isVideoModalOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isVideoModalOpen]);

  return (
    <section 
      ref={elementRef}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-background via-muted to-background text-foreground relative overflow-hidden"
    >
      {/* Enhanced Background decoration with animations */}
      <div className="absolute inset-0">
        <div className={`absolute top-4 sm:top-10 left-4 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 bg-primary/20 rounded-full blur-xl transition-all duration-1000 delay-300 ${
          hasBeenVisible ? 'animate-float opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
        <div className={`absolute bottom-4 sm:bottom-10 right-4 sm:right-10 w-20 sm:w-32 h-20 sm:h-32 bg-secondary/20 rounded-full blur-xl transition-all duration-1000 delay-500 ${
          hasBeenVisible ? 'animate-float-gentle opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
        <div className={`absolute top-1/2 left-1/4 sm:left-1/3 w-10 sm:w-16 h-10 sm:h-16 bg-primary/10 rounded-full blur-lg transition-all duration-1000 delay-700 ${
          hasBeenVisible ? 'animate-bounce-gentle opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
        
        {/* Additional animated background elements */}
        <div className={`absolute top-20 right-1/4 w-8 sm:w-12 h-8 sm:h-12 bg-purple-500/10 rounded-full blur-lg transition-all duration-1000 delay-900 ${
          hasBeenVisible ? 'animate-float opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
        <div className={`absolute bottom-1/3 left-1/5 w-6 sm:w-10 h-6 sm:h-10 bg-blue-500/10 rounded-full blur-lg transition-all duration-1000 delay-1100 ${
          hasBeenVisible ? 'animate-float-gentle opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 sm:space-y-8 max-w-5xl mx-auto">
          {/* Enhanced Social proof with animations */}
          <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6 sm:mb-8 transition-all duration-1000 delay-200 ${
            hasBeenVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 sm:h-5 w-4 sm:w-5 text-yellow-400 fill-current transition-all duration-500 ${
                      hasBeenVisible ? 'animate-pulse' : ''
                    }`}
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
              <span className="text-muted-foreground text-sm sm:text-base">4.9/5 Rating</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm sm:text-base">1000+ Happy Students</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-sm sm:text-base">95% Success Rate</span>
            </div>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight transition-all duration-1000 delay-400 ${
            hasBeenVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Ready to Take Control of Your{" "}
            <span className="text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text font-bold bg-[length:200%_100%]">
              Studies?
            </span>
          </h2>
          
          <p className={`text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto transition-all duration-1000 delay-600 ${
            hasBeenVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Join thousands of students who've transformed their academic experience. 
            Get started in less than 2 minutes - no credit card required.
          </p>
          
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-800 ${
            hasBeenVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button 
                size="lg" 
                className={`w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-semibold rounded-xl hover-lift group shadow-2xl hover:shadow-primary/25 transition-all duration-500 relative overflow-hidden ${
                  hasBeenVisible ? 'animate-cta-pulse' : ''
                }`}
              >
                <span className="relative z-10">Sign Up Now - It's Free!</span>
                <ArrowRight className="ml-3 h-5 sm:h-6 w-5 sm:w-6 transition-transform group-hover:translate-x-1 relative z-10" />
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                onClick={openVideoModal}
                className="w-full sm:w-auto border-border hover:border-primary/50 text-muted-foreground hover:text-foreground px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-semibold rounded-xl hover-lift group shadow-xl hover:shadow-primary/10 transition-all duration-500 bg-background/5 backdrop-blur-sm relative overflow-hidden"
              >
                <span className="relative z-10">Watch Demo</span>
                <Play className="ml-3 h-5 sm:h-6 w-5 sm:w-6 transition-transform group-hover:scale-110 relative z-10" />
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:animate-shimmer transition-opacity duration-500"></div>
              </Button>
            </div>
            
            {/* Enhanced trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              <span className="flex items-center justify-center space-x-2">
                <CircleDollarSign className="w-4 h-4 text-green-500" />
                <span>Free forever</span>
              </span>
              <span className="flex items-center justify-center space-x-2">
                <CreditCard className="w-4 h-4 text-blue-500" />
                <span>No credit card</span>
              </span>
              <span className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4 text-purple-500" />
                <span>Setup in 2 minutes</span>
              </span>
            </div>
            
            {/* Social Media Section */}
            <div className={`pt-6 sm:pt-8 border-t border-border/50 transition-all duration-1000 delay-1000 ${
              hasBeenVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">Follow us for study tips & updates</p>
              <div className="flex items-center justify-center space-x-4 sm:space-x-6">
                <a 
                  href="#" 
                  className="group p-3 bg-background/5 hover:bg-background/10 rounded-full transition-all duration-300 hover-lift hover:shadow-lg hover:animate-social-bounce"
                  aria-label="Follow us on Twitter"
                  onMouseEnter={(e) => e.currentTarget.classList.add('animate-social-bounce')}
                  onAnimationEnd={(e) => e.currentTarget.classList.remove('animate-social-bounce')}
                >
                  <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-blue-400 transition-colors duration-300" />
                </a>
                <a 
                  href="#" 
                  className="group p-3 bg-background/5 hover:bg-background/10 rounded-full transition-all duration-300 hover-lift hover:shadow-lg hover:animate-social-bounce"
                  aria-label="Follow us on Instagram"
                  onMouseEnter={(e) => e.currentTarget.classList.add('animate-social-bounce')}
                  onAnimationEnd={(e) => e.currentTarget.classList.remove('animate-social-bounce')}
                >
                  <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-pink-400 transition-colors duration-300" />
                </a>
                <a 
                  href="#" 
                  className="group p-3 bg-background/5 hover:bg-background/10 rounded-full transition-all duration-300 hover-lift hover:shadow-lg hover:animate-social-bounce"
                  aria-label="Connect on LinkedIn"
                  onMouseEnter={(e) => e.currentTarget.classList.add('animate-social-bounce')}
                  onAnimationEnd={(e) => e.currentTarget.classList.remove('animate-social-bounce')}
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-blue-600 transition-colors duration-300" />
                </a>
                <a 
                  href="#" 
                  className="group p-3 bg-background/5 hover:bg-background/10 rounded-full transition-all duration-300 hover-lift hover:shadow-lg hover:animate-social-bounce"
                  aria-label="Star us on GitHub"
                  onMouseEnter={(e) => e.currentTarget.classList.add('animate-social-bounce')}
                  onAnimationEnd={(e) => e.currentTarget.classList.remove('animate-social-bounce')}
                >
                  <Github className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                </a>
              </div>
            </div>
            
            {/* Enhanced Testimonials Carousel */}
            <div className={`transition-all duration-1000 delay-1200 ${
              hasBeenVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  What Students Are Saying
                </h3>
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 text-yellow-400 fill-current" 
                    />
                  ))}
                  <span className="ml-2 text-muted-foreground text-sm">4.9/5 from 1000+ reviews</span>
                </div>
              </div>

              <div className="relative bg-background/5 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto overflow-hidden">
                {/* Background quote decoration */}
                <div className="absolute top-4 left-4 opacity-10">
                  <Quote className="h-12 w-12 text-primary" />
                </div>
                
                {/* Main testimonial content */}
                <div className={`transition-all duration-500 transform ${
                  isAnimating ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'
                }`}>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${testimonials[currentTestimonial].gradient} rounded-full flex items-center justify-center shadow-lg hover-lift transition-all duration-500`}>
                        <span className="text-white font-bold text-lg sm:text-xl">
                          {testimonials[currentTestimonial].avatar}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-center space-x-1 mb-3">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="h-4 w-4 text-yellow-400 fill-current" 
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg sm:text-xl text-muted-foreground italic leading-relaxed mb-4 max-w-2xl">
                        "{testimonials[currentTestimonial].content}"
                      </blockquote>
                      
                      <div className="text-muted-foreground">
                        <p className="font-semibold text-foreground text-sm sm:text-base">
                          {testimonials[currentTestimonial].name}
                        </p>
                        <p className="text-xs sm:text-sm">
                          {testimonials[currentTestimonial].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation controls */}
                <div className="flex items-center justify-between mt-6">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300 hover-lift"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  
                  {/* Testimonial indicators */}
                  <div className="flex items-center space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (isAnimating) return;
                          setIsAnimating(true);
                          setTimeout(() => {
                            setCurrentTestimonial(index);
                            setIsAnimating(false);
                          }, 300);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentTestimonial 
                            ? 'bg-primary scale-125' 
                            : 'bg-muted-foreground hover:bg-muted-foreground/70'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextTestimonial}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300 hover-lift"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Progress bar */}
                <div className="mt-4 w-full bg-muted/50 rounded-full h-1">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-1 rounded-full transition-all duration-4000 ease-linear"
                    style={{
                      width: hasBeenVisible ? '100%' : '0%',
                      animation: hasBeenVisible ? 'testimonialProgress 4s linear infinite' : 'none'
                    }}
                  />
                </div>
              </div>

              {/* Quick stats */}
              <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 transition-all duration-1000 delay-1400 ${
                hasBeenVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className={`text-center p-4 bg-background/5 rounded-lg hover-lift transition-all duration-300 ${
                  hasBeenVisible ? 'animate-stat-counter' : ''
                }`} style={{ animationDelay: '1.6s' }}>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">98%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Pass Rate</div>
                </div>
                <div className={`text-center p-4 bg-background/5 rounded-lg hover-lift transition-all duration-300 ${
                  hasBeenVisible ? 'animate-stat-counter' : ''
                }`} style={{ animationDelay: '1.7s' }}>
                  <div className="text-2xl sm:text-3xl font-bold text-green-500 mb-1">45%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Grade Boost</div>
                </div>
                <div className={`text-center p-4 bg-background/5 rounded-lg hover-lift transition-all duration-300 ${
                  hasBeenVisible ? 'animate-stat-counter' : ''
                }`} style={{ animationDelay: '1.8s' }}>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-1">3x</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Productivity</div>
                </div>
                <div className={`text-center p-4 bg-background/5 rounded-lg hover-lift transition-all duration-300 ${
                  hasBeenVisible ? 'animate-stat-counter' : ''
                }`} style={{ animationDelay: '1.9s' }}>
                  <div className="text-2xl sm:text-3xl font-bold text-purple-500 mb-1">2min</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Setup Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop with blur effect */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-500 animate-fade-in"
            onClick={closeVideoModal}
          />
          
          {/* Modal Container */}
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4 sm:mx-8 flex items-center justify-center animate-scale-in">
            <div className="relative w-full h-full max-h-[80vh] bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border overflow-hidden">
              
              {/* Modal Header */}
              <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-background/50 to-transparent">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <h3 className="text-foreground font-semibold text-lg sm:text-xl">Platform Demo</h3>
                </div>
                
                <button
                  onClick={closeVideoModal}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300 hover-lift bg-background/20 rounded-lg hover:bg-background/40"
                  aria-label="Close video"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>

              {/* Video Container */}
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  muted={isVideoMuted}
                  onTimeUpdate={handleVideoTimeUpdate}
                  onLoadedMetadata={() => {
                    if (videoRef.current) {
                      videoRef.current.play();
                      setIsVideoPlaying(true);
                    }
                  }}
                  onEnded={() => setIsVideoPlaying(false)}
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23111827'/%3E%3Ctext x='50' y='50' font-family='Arial, sans-serif' font-size='12' fill='%236B7280' text-anchor='middle' dy='.3em'%3EDemo Video%3C/text%3E%3C/svg%3E"
                >
                  {/* You can replace this with your actual video URL */}
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video Overlay Controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="w-full p-4 sm:p-6 space-y-4">
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-foreground/20 rounded-full h-1 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                        style={{ width: `${videoProgress}%` }}
                      />
                    </div>

                    {/* Control Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <button
                          onClick={togglePlayPause}
                          className="p-2 sm:p-3 bg-foreground/10 hover:bg-foreground/20 rounded-lg transition-all duration-300 hover-lift"
                          aria-label={isVideoPlaying ? "Pause" : "Play"}
                        >
                          <Play className={`h-5 w-5 sm:h-6 sm:w-6 text-foreground transition-transform duration-300 ${isVideoPlaying ? 'scale-0' : 'scale-100'}`} />
                          <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isVideoPlaying ? 'scale-100' : 'scale-0'}`}>
                            <div className="w-1 h-4 sm:h-5 bg-foreground rounded-sm mx-0.5"></div>
                            <div className="w-1 h-4 sm:h-5 bg-foreground rounded-sm mx-0.5"></div>
                          </div>
                        </button>
                        
                        <button
                          onClick={restartVideo}
                          className="p-2 sm:p-3 bg-foreground/10 hover:bg-foreground/20 rounded-lg transition-all duration-300 hover-lift"
                          aria-label="Restart video"
                        >
                          <RotateCcw className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
                        </button>
                        
                        <button
                          onClick={toggleMute}
                          className="p-2 sm:p-3 bg-foreground/10 hover:bg-foreground/20 rounded-lg transition-all duration-300 hover-lift"
                          aria-label={isVideoMuted ? "Unmute" : "Mute"}
                        >
                          {isVideoMuted ? (
                            <VolumeX className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
                          ) : (
                            <Volume2 className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
                          )}
                        </button>
                      </div>

                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <span className="text-foreground text-xs sm:text-sm bg-background/40 px-2 py-1 rounded">
                          {Math.floor(videoProgress)}%
                        </span>
                        <button
                          onClick={() => {
                            if (videoRef.current) {
                              if (videoRef.current.requestFullscreen) {
                                videoRef.current.requestFullscreen();
                              }
                            }
                          }}
                          className="p-2 sm:p-3 bg-foreground/10 hover:bg-foreground/20 rounded-lg transition-all duration-300 hover-lift"
                          aria-label="Fullscreen"
                        >
                          <Maximize className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Loading animation */}
                {!isVideoPlaying && videoProgress === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/20">
                    <div className="flex items-center space-x-3 text-foreground">
                      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-lg font-medium">Loading...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating action button when video is paused */}
              {!isVideoPlaying && videoProgress > 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={togglePlayPause}
                    className="p-6 bg-primary/90 hover:bg-primary rounded-full shadow-2xl transition-all duration-300 hover-lift hover:scale-110 animate-pulse-glow"
                    aria-label="Play video"
                  >
                    <Play className="h-12 w-12 text-foreground ml-1" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
