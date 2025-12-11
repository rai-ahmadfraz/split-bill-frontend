"use server";
import React from "react";
import Link from "next/link";

const LandingPage: React.FC = async () => {
  const stats = {
    totalUsers: "50K+",
    expensesTracked: "$5M+",
    totalGroups: "10K+",
    countries: "100+"
  };

  const features = [
    {
      icon: "💰",
      title: "Free Expense Tracking",
      description: "Add and split expenses completely free. No hidden fees, no premium plans."
    },
    {
      icon: "📊",
      title: "Visual Analytics",
      description: "Interactive dashboards and reports to understand your spending patterns"
    },
    {
      icon: "👥",
      title: "Unlimited Groups",
      description: "Create as many groups as you need - roommates, trips, events, family, and more."
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description: "Bank-level security with end-to-end encryption. Your data stays private."
    },
    {
      icon: "🌍",
      title: "Multi-Currency",
      description: "Split expenses in different currencies with automatic conversion rates."
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Download our free iOS and Android apps for on-the-go expense tracking."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Digital Nomad",
      content: "As someone who travels constantly with different groups, Expense Hub has been a lifesaver. It's completely free!",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "Mike R.",
      role: "Student",
      content: "Perfect for managing expenses with roommates. Being 100% free makes it accessible for students like me.",
      avatar: "👨‍💻",
      rating: 5
    },
    {
      name: "Jessica L.",
      role: "Event Organizer",
      content: "I use it for all my event planning. The unlimited groups feature is amazing and completely free.",
      avatar: "👩‍🎨",
      rating: 5
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Create Free Account",
      description: "Sign up in 30 seconds. No credit card required, ever.",
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "2",
      title: "Add Expenses",
      description: "Quickly add expenses with photos, receipts, and custom split percentages",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "3",
      title: "Auto-Split",
      description: "Our smart algorithm calculates splits automatically in real-time",
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "4",
      title: "Settle Up Free",
      description: "Track settlements with our free tools and payment tracking",
      color: "from-orange-500 to-amber-500"
    }
  ];

  const freeFeatures = [
    "Unlimited expenses",
    "Unlimited groups & friends",
    "Multi-currency support",
    "Expense categories",
    "Mobile apps (iOS & Android)",
    "Real-time notifications",
    "Dark mode and many other themes",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation - Mobile Responsive */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">$</span>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  Expense Hub
                </div>
                <div className="text-xs text-gray-500 -mt-1">Free Forever</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                href="#features" 
                className="text-gray-600 hover:text-green-600 transition-colors font-medium"
              >
                Features
              </Link>
              <Link 
                href="#free" 
                className="text-gray-600 hover:text-green-600 transition-colors font-medium"
              >
                It's Free!
              </Link>
              <Link 
                href="#testimonials" 
                className="text-gray-600 hover:text-green-600 transition-colors font-medium"
              >
                Testimonials
              </Link>
              <div className="flex items-center space-x-4">
                <Link 
                  href="/login" 
                  className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                >
                  Sign In
                </Link>
                <Link 
                  href="/register" 
                  className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-100 transition-all duration-300"
                >
                  Start Free
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600 hover:text-green-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              id="mobile-menu-button"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu - Hidden by default, shown when toggled */}
          <div className="md:hidden bg-white border-t border-gray-100 py-4 space-y-4 hidden" id="mobile-menu">
            <Link href="#features" className="block text-gray-600 hover:text-green-600 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors font-medium">
              Features
            </Link>
            <Link href="#free" className="block text-gray-600 hover:text-green-600 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors font-medium">
              It's Free!
            </Link>
            <Link href="#testimonials" className="block text-gray-600 hover:text-green-600 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors font-medium">
              Testimonials
            </Link>
            <Link href="/login" className="block text-gray-600 hover:text-green-600 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors font-medium">
              Sign In
            </Link>
            <Link href="/register" className="block bg-gradient-to-r from-green-600 to-emerald-500 text-white text-center font-semibold py-3 px-4 mx-4 rounded-xl hover:shadow-lg transition-all duration-300">
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mobile Responsive */}
      <section className="relative overflow-hidden pt-8 md:pt-16 pb-16 md:pb-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6 md:mb-8">
              <span>🎯</span>
              <span className="text-xs sm:text-sm">100% Free • No Credit Card Required</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              Split expenses
              <span className="block bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                for free, forever
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto px-4 leading-relaxed">
              Expense Hub makes sharing costs effortless. Track, split, and settle expenses 
              in real-time - all completely free, forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link 
                href="/register" 
                className="w-full sm:w-auto group bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-green-200 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="flex items-center justify-center sm:justify-start space-x-2">
                  <span>Start Free Forever</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              <Link 
                href="#features" 
                className="w-full sm:w-auto bg-white text-gray-700 border-2 border-gray-200 px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:border-green-300 hover:shadow-lg transition-all duration-300"
              >
                <span className="flex items-center justify-center sm:justify-start space-x-2">
                  <span>✨</span>
                  <span>See Features</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Stats - Mobile Responsive */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 md:mt-16 max-w-5xl mx-auto px-4">
            {Object.entries(stats).map(([key, value], index) => (
              <div 
                key={key}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  {value}
                </div>
                <div className="text-gray-600 mt-2 text-xs sm:text-sm font-medium">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Forever Section - Mobile Responsive */}
      <section id="free" className="py-12 md:py-20 bg-gradient-to-b from-green-50/50 to-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-bold text-sm sm:text-lg mb-4 shadow-lg">
              🎁 100% FREE FOREVER
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              No hidden fees.
              <span className="block text-transparent bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text">
                No premium plans.
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike other apps, we believe expense sharing should be free for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Everything You Get For Free</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {freeFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 hover:bg-green-50 rounded-lg transition-colors">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl">
                    💰
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">Truly Free</h4>
                    <p className="text-gray-600 text-sm sm:text-base">No hidden costs, ever</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm sm:text-base">No subscription fees</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm sm:text-base">No transaction fees</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm sm:text-base">No user limits</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm sm:text-base">No ads in the app</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-xl">
                <h4 className="text-xl sm:text-2xl font-bold mb-4">Why We're Free</h4>
                <p className="text-green-100 mb-4 text-sm sm:text-base">
                  We believe that managing shared expenses is a basic need that shouldn't cost money. 
                  Our mission is to make financial harmony accessible to everyone.
                </p>
                <div className="text-3xl sm:text-4xl font-bold">$0<span className="text-sm sm:text-lg font-normal ml-2">/month forever</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Mobile Responsive */}
      <section id="features" className="py-12 md:py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-medium mb-4 text-sm sm:text-base">
              ✨ Powerful Features
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything you need
              <span className="block text-transparent bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text">
                to manage shared expenses
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From simple splits to complex group expenses, we&apos;ve got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Mobile Responsive */}
      <section id="how-it-works" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full font-medium mb-4 text-sm sm:text-base">
              🚀 Simple Process
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Expense Hub Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Four simple steps to financial clarity
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 rounded-2xl sm:rounded-3xl blur-xl`}></div>
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${step.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 mx-auto shadow-lg`}>
                    {step.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Mobile Responsive */}
      <section id="testimonials" className="py-12 md:py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full font-medium mb-4 text-sm sm:text-base">
              ❤️ Loved By 50,000+ Users
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Users Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of happy users who simplified their expense sharing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-3xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic text-base sm:text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Responsive */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full font-medium mb-6 text-sm sm:text-base">
            <span>🎉</span>
            <span>No Credit Card • No Trial Period • Just Free</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8">
            Ready to Split Expenses the Easy Way?
          </h2>
          <p className="text-lg sm:text-xl text-green-100 mb-8 md:mb-10 max-w-2xl mx-auto">
            Join 50,000+ users who save time and avoid money conflicts every day
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/register" 
              className="w-full sm:w-auto bg-white text-green-600 px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center sm:justify-start space-x-2">
                <span>Get Started Free</span>
                <span className="text-xl">🚀</span>
              </span>
            </Link>
            <Link 
              href="#features" 
              className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 transition-all duration-300"
            >
              <span className="flex items-center justify-center sm:justify-start space-x-2">
                <span>✨</span>
                <span>See Features</span>
              </span>
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-green-100">
            <div className="flex items-center justify-center space-x-2 text-sm sm:text-base">
              <span>✅</span>
              <span>100% Free Forever</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm sm:text-base">
              <span>✅</span>
              <span>Unlimited Groups</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm sm:text-base">
              <span>✅</span>
              <span>Mobile Apps</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Mobile Responsive */}
      <footer className="bg-gray-900 text-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl sm:text-2xl">$</span>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold">Expense Hub</div>
                  <div className="text-xs sm:text-sm text-gray-400">Free Forever</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 text-sm sm:text-base">
                Making expense sharing simple, fair, and completely free for everyone.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  🐦
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  📘
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  💼
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 sm:mb-6">Product</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="#features" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Features</Link></li>
                <li><Link href="#free" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Free Forever</Link></li>
                <li><Link href="/apps" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Mobile Apps</Link></li>
                <li><Link href="/api" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">API</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 sm:mb-6">Company</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About Us</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Blog</Link></li>
                <li><Link href="/press" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Press</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 sm:mb-6">Help</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Help Center</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Terms of Service</Link></li>
                <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Support</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 md:mt-12 pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>© {new Date().getFullYear()} Expense Hub. All rights reserved.</p>
            <p className="mt-2 text-xs sm:text-sm">Made with ❤️ for stress-free expense sharing • 100% Free Forever</p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Toggle Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const mobileMenuButton = document.getElementById('mobile-menu-button');
              const mobileMenu = document.getElementById('mobile-menu');
              
              if (mobileMenuButton && mobileMenu) {
                mobileMenuButton.addEventListener('click', function() {
                  mobileMenu.classList.toggle('hidden');
                });
                
                // Close menu when clicking on a link
                const mobileLinks = mobileMenu.querySelectorAll('a');
                mobileLinks.forEach(link => {
                  link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                  });
                });
                
                // Close menu when clicking outside
                document.addEventListener('click', function(event) {
                  if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
                    mobileMenu.classList.add('hidden');
                  }
                });
              }
            });
          `
        }}
      />
    </div>
  );
};

export default LandingPage;