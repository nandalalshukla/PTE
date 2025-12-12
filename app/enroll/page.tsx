"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronRight,
  ChevronDown,
  Send,
  User,
  Mail,
  Phone,
  BookOpen,
  Calendar,
  MessageSquare,
  Sparkles,
  CreditCard,
  Clock,
  ShieldCheck,
} from "lucide-react";

const courses = [
  {
    id: "A1",
    title: "A1 Blended Intensive",
    price: "रु 4000",
    duration: "4 Weeks",
    schedule: "1 hr/day",
    features: ["Basic Grammar", "Daily Conversation", "Certificate"],
    color: "from-blue-400 to-purple-500",
    bg: "bg-blue-500/10",
    border: "border-blue-200 dark:border-blue-800",
  },
  {
    id: "A2",
    title: "A2 Blended Intensive",
    price: "रु 6000",
    duration: "4 Weeks",
    schedule: "2 hrs/day",
    features: ["Complex Grammar", "Writing Skills", "Exam Prep"],
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-500/10",
    border: "border-purple-200 dark:border-purple-800",
  },
  {
    id: "B1",
    title: "B1 Blended Intensive",
    price: "रु 8000",
    duration: "8 Weeks",
    schedule: "2 hrs/day",
    features: ["Business German", "Advanced Speaking", "Interview Prep"],
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-500/10",
    border: "border-pink-200 dark:border-pink-800",
  },
  {
    id: "Custom",
    title: "Personalized Tutoring",
    price: "Custom",
    duration: "Flexible",
    schedule: "Flexible",
    features: ["1-on-1 Sessions", "Custom Curriculum", "Flexible Timing"],
    color: "from-orange-400 to-red-500",
    bg: "bg-orange-500/10",
    border: "border-orange-200 dark:border-orange-800",
  },
];

export default function Enroll() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    schedule: "morning",
    message: `I want to enroll in ${courses[0].title}. Can I get more details about it?`,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCourseChange = (course: (typeof courses)[0]) => {
    setSelectedCourse(course);

    setFormData((prev) => ({
      ...prev,
      course: course.title,
      message: `I want to enroll in ${course.title}. Can I get more details about it?`,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(formData);
    try {
      console.log("Submitting enrollment with data:", formData);
      const res = await axios.post("/api/enroll", formData);

      console.log("Enrollment submission response:", res.data);
    } catch (err) {
      console.error("Enrollment submission error:", err);
    }

    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      schedule: "",
      message: "",
    });
    // Handle success (e.g., show toast, redirect)
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-gray-50 dark:bg-[#0a0a0a] selection:bg-[#5227FF] selection:text-white">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-400/20 dark:bg-purple-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-blue-400/20 dark:bg-blue-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[45rem] h-[45rem] bg-pink-400/20 dark:bg-pink-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-md text-sm font-medium text-[#5227FF] dark:text-purple-300 shadow-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Start Your Journey
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
            Enroll in{" "}
            <span className="bg-gradient-to-r from-[#5227FF] to-purple-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Take the first step towards mastering German. Select your course and
            fill out the form below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Course Selection & Form */}
          <div className="lg:col-span-7 space-y-8">
            {/* Course Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-2 border border-white/20 shadow-xl"
            >
              <div className="grid grid-cols-4 gap-2">
                {courses.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => handleCourseChange(course)}
                    className={`relative py-3 px-2 rounded-2xl text-sm font-medium transition-all duration-300 ${
                      selectedCourse.id === course.id
                        ? "text-white shadow-lg"
                        : "text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-white/10"
                    }`}
                  >
                    {selectedCourse.id === course.id && (
                      <motion.div
                        layoutId="activeCourse"
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${course.color}`}
                      />
                    )}
                    <span className="relative z-10">{course.id}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Enrollment Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/20 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                    Select Course
                  </label>
                  <div className="relative group">
                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#5227FF] transition-colors" />
                    <select
                      value={selectedCourse.id}
                      name="course"
                      onChange={(e) => {
                        const courseId = e.target.value; // <-- string
                        const course = courses.find((c) => c.id === courseId);
                        if (course) handleCourseChange(course);
                      }}
                      className="w-full pl-12 pr-10 py-4 bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5227FF]/50 transition-all appearance-none cursor-pointer text-gray-700 dark:text-gray-200"
                    >
                      {courses.map((course) => (
                        <option
                          key={course.id}
                          value={course.id}
                          className="bg-white dark:bg-gray-900"
                        >
                          {course.title}
                        </option>
                      ))}
                    </select>

                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                      Full Name
                    </label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#5227FF] transition-colors" />
                      <input
                        type="text"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5227FF]/50 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                      Phone Number
                    </label>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#5227FF] transition-colors" />
                      <input
                        type="tel"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5227FF]/50 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
                        placeholder="+977 9800000000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                    Email Address
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#5227FF] transition-colors" />
                    <input
                      type="email"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5227FF]/50 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                    Preferred Schedule
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Morning", "Day", "Evening"].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            schedule: time.toLowerCase(),
                          })
                        }
                        className={`py-3 px-4 rounded-2xl text-sm font-medium border transition-all duration-300 ${
                          formData.schedule === time.toLowerCase()
                            ? "bg-[#5227FF] text-white border-[#5227FF] shadow-lg shadow-[#5227FF]/20"
                            : "bg-white/50 dark:bg-black/20 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-[#5227FF]/50"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                    Message (Optional)
                  </label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#5227FF] transition-colors" />
                    <textarea
                      className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5227FF]/50 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 min-h-[120px] resize-none"
                      placeholder="Any specific goals or questions?"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#5227FF] to-purple-600 text-white font-bold rounded-2xl shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Complete Enrollment
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Column: Course Summary */}
          <div className="lg:col-span-5">
            <motion.div
              layoutId="courseCard"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky top-32"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl p-8">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${selectedCourse.color} opacity-5`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${selectedCourse.bg} ${selectedCourse.border} border text-gray-900 dark:text-white`}
                    >
                      Selected Course
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/50 dark:bg-white/10 flex items-center justify-center text-2xl">
                      🇩🇪
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedCourse.title}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span
                      className={`text-4xl font-extrabold bg-gradient-to-r ${selectedCourse.color} bg-clip-text text-transparent`}
                    >
                      {selectedCourse.price}
                    </span>
                    {selectedCourse.price !== "Custom" && (
                      <span className="text-gray-500 dark:text-gray-400">
                        / course
                      </span>
                    )}
                  </div>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider">
                          Duration
                        </p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {selectedCourse.duration}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20">
                      <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider">
                          Schedule
                        </p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {selectedCourse.schedule}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Included Features
                    </p>
                    {selectedCourse.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 justify-center">
                      <ShieldCheck className="w-4 h-4" />
                      Secure Enrollment • 30-Day Money Back Guarantee
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
