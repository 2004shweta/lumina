import { ArrowRight, Star, Users, Clock, Shield, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const experts = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Product Strategy Consultant",
      company: "Google",
      expertise: "Product Strategy, Go-to-Market",
      rating: 4.9,
      reviews: 127,
      price: "$150",
      duration: "30 min",
      avatar: "SC",
      verified: true
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Tech Startup Advisor",
      company: "Microsoft",
      expertise: "Startup Growth, Fundraising",
      rating: 4.8,
      reviews: 89,
      price: "$200",
      duration: "45 min",
      avatar: "MR",
      verified: true
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      title: "Career Development Coach",
      company: "Self-employed",
      expertise: "Career Transition, Leadership",
      rating: 4.9,
      reviews: 156,
      price: "$120",
      duration: "30 min",
      avatar: "EW",
      verified: true
    },
    {
      id: 4,
      name: "Alex Kumar",
      title: "Digital Marketing Expert",
      company: "Meta",
      expertise: "Growth Marketing, SEO",
      rating: 4.7,
      reviews: 203,
      price: "$100",
      duration: "30 min",
      avatar: "AK",
      verified: true
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "UX Designer",
      company: "Apple",
      expertise: "UI/UX Design, User Research",
      rating: 4.6,
      reviews: 78,
      price: "$180",
      duration: "60 min",
      avatar: "LW",
      verified: true
    },
    {
      id: 6,
      name: "David Kim",
      title: "Financial Advisor",
      company: "Morgan Stanley",
      expertise: "Investment Planning, Retirement",
      rating: 4.9,
      reviews: 203,
      price: "$250",
      duration: "90 min",
      avatar: "DK",
      verified: true
    }
  ];

  const testimonials = [
    {
      name: "Aishwarya Srinivasan",
      title: "LinkedIn Top Voice",
      content: "Love the integrations with Calendar, Zoom and WhatsApp. Makes my life easier!",
      avatar: "AS"
    },
    {
      name: "Joerg Storm",
      title: "300K on LinkedIn",
      content: "The entire experience is just so seamless. My followers love it",
      avatar: "JS"
    },
    {
      name: "Xinran Waibel",
      title: "Founder of Data Engineer Things",
      content: "Topmate is my go-to platform for scheduling 1:1 sessions and hosting webinars!",
      avatar: "XW"
    },
    {
      name: "Payal & Gaurav",
      title: "110K+ on Instagram",
      content: "All my monetisation now happens in one place",
      avatar: "PG"
    },
    {
      name: "Lorraine Lee",
      title: "Speaker, 320K on LinkedIn",
      content: "The team is extremely helpful and cares a lot about feedback. They keep rolling out new features too!",
      avatar: "LL"
    },
    {
      name: "Jessica",
      title: "Global Data Lead in Energy Industry",
      content: "I love Topmate! It has made it seamless to schedule mentoring sessions! Big fan of Topmate's WhatsApp integration.",
      avatar: "J"
    }
  ];

  const categories = [
    "Career", "Consulting", "Content", "Cybersecurity", "Data & AI", "Design", 
    "Finance", "HR", "Law", "Marketing", "Mental Health", "Product", "Software", 
    "Study Abroad", "Best Selling", "Supply Chain", "Others"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">XXXXX</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#mentors" className="text-gray-700 hover:text-blue-600 transition-colors">
                Explore Mentors
              </Link>
              <Link href="#mentors" className="text-gray-700 hover:text-blue-600 transition-colors">
                AI Mentors
              </Link>
              <Link href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                Success Stories
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 px-3 py-2 rounded-lg hover:bg-blue-50">
                Login
              </Link>
              <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl mb-6">
              Supercharge your career with
              <br />
              <span className="text-blue-600">Long Term Mentorship</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Land your dream job, role, and company faster than ever with 1:1 long term mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/signup" className="bg-gray-900 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                Book a Free Trial
              </Link>
              <Link href="/search" className="bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Find your Mentor
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                <span>No Payment Required</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                <span>Verified Mentors Only</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                <span>Reschedule Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies, Domains, Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Companies */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Companies</h3>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">G</span>
                  </div>
                  <span className="text-gray-700 font-medium">Google</span>
                  <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">A</span>
                  </div>
                  <span className="text-gray-700 font-medium">Amazon</span>
                  <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">M</span>
                  </div>
                  <span className="text-gray-700 font-medium">Meta</span>
                  <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
                </div>
              </div>
            </div>

            {/* Domains */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Domains</h3>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">F</span>
                  </div>
                  <span className="text-gray-700 font-medium">Frontend Developer</span>
                  <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">B</span>
                  </div>
                  <span className="text-gray-700 font-medium">Backend Developer</span>
                  <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">D</span>
                  </div>
                  <span className="text-gray-700 font-medium">Data Scientist</span>
                  <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Skills</h3>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">P</span>
                  </div>
                  <span className="text-gray-700 font-medium">Python</span>
                  <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">J</span>
                  </div>
                  <span className="text-gray-700 font-medium">Java</span>
                  <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">S</span>
                  </div>
                  <span className="text-gray-700 font-medium">Software Testing</span>
                  <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started in 3 Easy Steps Section */}
      <section id="mentors" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started in 3 Easy Steps</h2>
            <p className="text-xl text-gray-600">Follow these three simple steps to get started with Long Term Mentorship</p>
          </div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Your Ideal Mentor</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Browse from 600+ vetted mentors and get to choose your ideal mentor according to your preferences and aspiration.
              </p>
              <Link href="/search" className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                Find Your Mentor <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Book a FREE Trial Session</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Connect with mentor and see how mentor will help you achieve your goal faster & avoid asking for referrals, etc.
              </p>
              <Link href="/signup" className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                Book a FREE Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Start 1:1 Long Term Mentorship</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bravo!! Get started with your personalised mentorship in the right direction with a mentor of your choice.
              </p>
              <Link href="/dashboard" className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                Start Preparing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How it works</h2>
            <p className="text-xl text-gray-600">Simple steps to accelerate your career</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Your Mentor</h3>
              <p className="text-gray-600">Browse through verified mentors from top companies and find the perfect match for your career goals.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule Sessions</h3>
              <p className="text-gray-600">Book 1:1 sessions at your convenience. Get personalized guidance and actionable insights.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Accelerate Growth</h3>
              <p className="text-gray-600">Build lasting mentorship relationships and achieve your career milestones faster than ever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600">See how mentorship transformed careers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">&ldquo;{testimonial.content}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to supercharge your career?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of professionals who have accelerated their careers with mentorship</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book a Free Trial
            </Link>
            <Link href="/search" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-500">
              Find Your Mentor
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">XXXXXX</h3>
              <p className="text-gray-400">Connecting ambitious professionals with industry experts for career acceleration.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms Of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">For Mentees</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/search" className="hover:text-white transition-colors">Find Mentors</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">For Mentors</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/become-expert" className="hover:text-white transition-colors">Become a Mentor</Link></li>
                <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">©2025 XXXXX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
