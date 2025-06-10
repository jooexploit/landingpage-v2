
import { useState, useEffect } from "react";
import { StickyNote, CheckSquare, Calculator, Plus, X } from "lucide-react";
import { useIntersectionObserver } from "../hooks/use-intersection-observer";

export const ProductivitySection = () => {
  // Intersection Observer for scroll animations
  const { elementRef: sectionRef, isVisible, hasBeenVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px',
    freezeOnceVisible: true
  });

  // Animation state for staggered effects
  const [animationPhase, setAnimationPhase] = useState(0);
  const [gpaHovered, setGpaHovered] = useState(false);

  // Trigger staggered animations when section becomes visible
  useEffect(() => {
    if (hasBeenVisible && animationPhase === 0) {
      setAnimationPhase(1);
      // Stagger the card animations
      setTimeout(() => setAnimationPhase(2), 200);
      setTimeout(() => setAnimationPhase(3), 400);
    }
  }, [hasBeenVisible, animationPhase]);

  // Sticky Notes State
  const [notes, setNotes] = useState([
    { id: 1, text: "Finish physics problem set", color: "yellow", due: "Due tomorrow!" },
    { id: 2, text: "Brainstorm essay ideas", color: "blue", due: "Literature class" },
    { id: 3, text: "Study group @ 3 PM", color: "green", due: "Library room 204" }
  ]);
  const [newNote, setNewNote] = useState("");

  // Todo List State
  const [todos, setTodos] = useState([
    { id: 1, text: "Submit Math Assignment", completed: true, priority: "high", due: "Mar 15" },
    { id: 2, text: "Review CS Notes", completed: false, priority: "medium", due: "Mar 16" },
    { id: 3, text: "Prepare Presentation", completed: false, priority: "high", due: "Mar 18" },
    { id: 4, text: "Read Chapter 5", completed: false, priority: "low", due: "Mar 20" }
  ]);

  // GPA Calculator State
  const [courses, setCourses] = useState([
    { id: 1, name: "Computer Science 101", credits: 4, grade: "A-" },
    { id: 2, name: "Mathematics 201", credits: 3, grade: "B+" },
    { id: 3, name: "Physics 150", credits: 4, grade: "A" }
  ]);

  const gradePoints = { "A": 4.0, "A-": 3.7, "B+": 3.3, "B": 3.0, "B-": 2.7, "C+": 2.3, "C": 2.0, "C-": 1.7, "D": 1.0, "F": 0.0 };

  const calculateGPA = () => {
    const totalPoints = courses.reduce((sum, course) => sum + (gradePoints[course.grade] * course.credits), 0);
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    return totalCredits ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  const addNote = () => {
    if (newNote.trim()) {
      const colors = ["yellow", "blue", "green", "pink"];
      setNotes([...notes, {
        id: Date.now(),
        text: newNote,
        color: colors[Math.floor(Math.random() * colors.length)],
        due: "Just added"
      }]);
      setNewNote("");
    }
  };

  const removeNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const updateCourse = (id: number, field: string, value: string | number) => {
    setCourses(courses.map(course => 
      course.id === id ? { ...course, [field]: value } : course
    ));
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 transition-all duration-1000 transform ${
          hasBeenVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Your Integrated{" "}
            <span className="gradient-text">Toolkit</span>{" "}
            for Success
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to stay organized, productive, and on top of your academic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {/* Interactive Sticky Notes Card */}
          <div className={`glass-card p-4 sm:p-6 lg:p-8 hover-lift group transition-all duration-1000 transform ${
            animationPhase >= 1 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
          } hover:rotate-0`} style={{ animationDelay: '0ms' }}>
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="bg-yellow-500/20 p-2 sm:p-3 rounded-xl group-hover:bg-yellow-500/30 transition-all duration-300 group-hover:scale-110">
                <StickyNote className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600 group-hover:text-yellow-500 transition-colors duration-300" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold group-hover:text-yellow-600 transition-colors duration-300">
                Sticky Notes
              </h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4 mb-4 min-h-[280px] sm:min-h-[320px]">
              {notes.map((note, index) => (
                <div 
                  key={note.id}
                  className={`p-3 sm:p-4 rounded-lg transform hover:rotate-0 transition-all duration-500 cursor-pointer relative group/note shadow-md hover:shadow-lg ${
                    note.color === 'yellow' ? 'bg-yellow-200 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200 rotate-1 hover:bg-yellow-300 dark:hover:bg-yellow-900/60' :
                    note.color === 'blue' ? 'bg-blue-200 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 -rotate-1 hover:bg-blue-300 dark:hover:bg-blue-900/60' :
                    note.color === 'green' ? 'bg-green-200 dark:bg-green-900/40 text-green-800 dark:text-green-200 rotate-2 hover:bg-green-300 dark:hover:bg-green-900/60' :
                    'bg-pink-200 dark:bg-pink-900/40 text-pink-800 dark:text-pink-200 -rotate-2 hover:bg-pink-300 dark:hover:bg-pink-900/60'
                  } ${animationPhase >= 1 ? 'animate-fade-in-scale' : ''}`}
                  style={{ animationDelay: `${index * 150 + 300}ms` }}
                >
                  <button 
                    onClick={() => removeNote(note.id)}
                    className="absolute top-2 right-2 opacity-0 group-hover/note:opacity-100 transition-all duration-300 hover:scale-125 p-1 rounded-full hover:bg-black/10"
                  >
                    <X className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                  <div className="font-medium text-sm sm:text-base leading-relaxed pr-6">
                    {note.text}
                  </div>
                  <div className={`text-xs sm:text-sm mt-2 font-medium ${
                    note.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                    note.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    note.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    'text-pink-600 dark:text-pink-400'
                  }`}>
                    {note.due}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addNote()}
                placeholder="Add a note..."
                className="flex-1 px-3 py-2 sm:py-3 text-sm sm:text-base border rounded-lg bg-background focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all duration-300 hover:border-yellow-400"
              />
              <button
                onClick={addNote}
                className="p-2 sm:p-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-300 hover-lift hover:shadow-lg transform active:scale-95"
              >
                <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

          {/* Interactive To-Do List Card */}
          <div className={`glass-card p-4 sm:p-6 lg:p-8 hover-lift group transition-all duration-1000 transform ${
            animationPhase >= 2 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
          }`} style={{ animationDelay: '200ms' }}>
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="bg-primary/20 p-2 sm:p-3 rounded-xl group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                <CheckSquare className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:text-primary/80 transition-colors duration-300" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                Smart To-Do List
              </h3>
            </div>
            
            <div className="space-y-3 min-h-[280px] sm:min-h-[320px] overflow-y-auto custom-scrollbar">
              {todos.map((todo, index) => (
                <div 
                  key={todo.id}
                  className={`flex items-center space-x-3 p-3 sm:p-4 rounded-lg cursor-pointer transition-all duration-500 hover-lift transform hover:scale-[1.02] ${
                    todo.completed ? 'bg-green-50 dark:bg-green-950/40 hover:bg-green-100 dark:hover:bg-green-950/60' :
                    todo.priority === 'high' ? 'bg-red-50 dark:bg-red-950/40 hover:bg-red-100 dark:hover:bg-red-950/60' :
                    todo.priority === 'medium' ? 'bg-yellow-50 dark:bg-yellow-950/40 hover:bg-yellow-100 dark:hover:bg-yellow-950/60' :
                    'bg-muted/50 hover:bg-muted/70'
                  } ${animationPhase >= 2 ? 'animate-slide-in-bottom' : ''}`}
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                  onClick={() => toggleTodo(todo.id)}
                >
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    todo.completed ? 'bg-green-500 border-green-500 shadow-lg' :
                    todo.priority === 'high' ? 'border-red-500 hover:border-red-400' :
                    todo.priority === 'medium' ? 'border-yellow-500 hover:border-yellow-400' :
                    'border-muted hover:border-primary'
                  }`}>
                    {todo.completed && (
                      <div className="w-2 h-2 bg-white rounded-full animate-fade-in-scale"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm sm:text-base font-medium truncate ${
                      todo.completed ? 'line-through text-muted-foreground' : ''
                    }`}>
                      {todo.text}
                    </div>
                    <div className={`text-xs sm:text-sm mt-1 flex items-center space-x-2 ${
                      todo.completed ? 'text-green-600' :
                      todo.priority === 'high' ? 'text-red-600' :
                      todo.priority === 'medium' ? 'text-yellow-600' :
                      'text-muted-foreground'
                    }`}>
                      <span>
                        {todo.completed ? 'Completed' : `Due ${todo.due}`}
                      </span>
                      <span>•</span>
                      <span className="capitalize font-medium">
                        {todo.priority} Priority
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive GPA Calculator Card */}
          <div className={`glass-card p-4 sm:p-6 lg:p-8 hover-lift group transition-all duration-1000 transform ${
            animationPhase >= 3 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
          }`} style={{ animationDelay: '400ms' }}>
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="bg-secondary/20 p-2 sm:p-3 rounded-xl group-hover:bg-secondary/30 transition-all duration-300 group-hover:scale-110">
                <Calculator className="h-5 w-5 sm:h-6 sm:w-6 text-secondary group-hover:text-secondary/80 transition-colors duration-300" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold group-hover:text-secondary transition-colors duration-300">
                GPA Calculator
              </h3>
            </div>
            
            <div className="space-y-4 min-h-[280px] sm:min-h-[320px]">
              <div className="space-y-3 max-h-48 overflow-y-auto custom-scrollbar">
                {courses.map((course, index) => (
                  <div key={course.id} className={`bg-muted/50 p-3 sm:p-4 rounded-lg space-y-3 hover:bg-muted/70 transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md ${
                    animationPhase >= 3 ? 'animate-fade-in-scale' : ''
                  }`} style={{ animationDelay: `${index * 150 + 800}ms` }}>
                    <input
                      type="text"
                      value={course.name}
                      onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                      className="w-full text-sm sm:text-base font-medium bg-transparent border-none outline-none focus:ring-2 focus:ring-secondary/20 rounded p-2 hover:bg-background/50 transition-all duration-300"
                      placeholder="Course name..."
                    />
                    <div className="flex justify-between items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          value={course.credits}
                          onChange={(e) => updateCourse(course.id, 'credits', parseInt(e.target.value) || 0)}
                          className="w-14 sm:w-16 text-xs sm:text-sm bg-background border border-muted rounded px-2 py-1.5 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all duration-300 hover:border-secondary/50"
                          min="0"
                          max="6"
                        />
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium">Credits</span>
                      </div>
                      <select
                        value={course.grade}
                        onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                        className="text-xs sm:text-sm font-medium bg-background border border-muted rounded px-2 sm:px-3 py-1.5 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all duration-300 hover:border-secondary/50 min-w-[60px]"
                      >
                        {Object.keys(gradePoints).map(grade => (
                          <option key={grade} value={grade}>{grade}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-muted/30 pt-6 mt-auto">
                <div className="text-center relative">
                  {/* Clean background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02] rounded-xl -m-2"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-4">
                      <div className="text-sm sm:text-base text-muted-foreground font-semibold tracking-wide">
                        Current GPA
                      </div>
                    </div>
                    
                    {/* Clean GPA display */}
                    <div className="relative inline-block mb-6"
                         onMouseEnter={() => setGpaHovered(true)}
                         onMouseLeave={() => setGpaHovered(false)}>
                      
                      {/* Background circle */}
                      <div className="absolute inset-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full mx-auto -top-4 -bottom-4 blur-xl opacity-40"></div>
                      
                      {/* Main GPA container */}
                      <div className={`relative bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/80 dark:to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-primary/20 shadow-xl transition-all duration-500 ${
                        gpaHovered ? 'scale-105 shadow-2xl border-primary/40' : 'scale-100'
                      }`}>
                        
                        {/* GPA Number */}
                        <div className={`text-4xl sm:text-5xl lg:text-6xl font-black gradient-text transition-all duration-500 ${
                          gpaHovered ? 'scale-110' : 'scale-100'
                        } cursor-default select-none`}>
                          {calculateGPA()}
                        </div>
                        
                        {/* GPA out of 4.0 indicator */}
                        <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-2">
                          out of 4.0
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
