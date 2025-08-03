import { ArrowRight, Star, Users, Clock, Shield, Video, MessageCircle, Calendar, Play } from 'lucide-react';
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

  const features = [
    {
      icon: Video,
      title: "1:1 Sessions",
      description: "Mentorship sessions, consultations, discovery calls - do what you do best. We take care of everything else"
    },
    {
      icon: MessageCircle,
      title: "Priority DM",
      description: "Setup Priority DM in seconds"
    },
    {
      icon: Users,
      title: "Host Webinars",
      description: "Host unlimited webinars and workshops"
    },
    {
      icon: Shield,
      title: "Bundle Services",
      description: "Bundle your services and products"
    },
    {
      icon: Calendar,
      title: "Sell Courses",
      description: "Sell courses & digital products"
    },
    {
      icon: Clock,
      title: "Full Stack Scheduling",
      description: "Complete scheduling solution with calendar integrations"
    }
  ];

  const categories = [
    "Career", "Consulting", "Content", "Cybersecurity", "Data & AI", "Design", 
    "Finance", "HR", "Law", "Marketing", "Mental Health", "Product", "Software", 
    "Study Abroad", "Best Selling", "Supply Chain", "Others"
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">LUMINA</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/courses" className="text-white hover:text-red-500 transition-colors">
                Courses
              </Link>
              <Link href="#experts" className="text-white hover:text-red-500 transition-colors">
                Search
              </Link>
              <Link href="#features" className="text-white hover:text-red-500 transition-colors">
                Features
              </Link>
              <Link href="/become-expert" className="text-white hover:text-red-500 transition-colors">
                Join as Expert
              </Link>
              <Link href="/pricing" className="text-white hover:text-red-500 transition-colors">
                Pricing
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-white hover:text-red-500 transition-colors">
                Sign In
              </Link>
              <Link href="/signup" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-6">
              A Professional Storefront for
              <span className="text-red-500"> Your Knowledge</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Everything you offer—consultations, digital products, webinars and services—packaged in one trusted link your clients take seriously.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-red-700 transition-colors">
                Start My Page
              </Link>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white">100k+</span>
                <span className="ml-2">reviews</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white">1mn+</span>
                <span className="ml-2">professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experts Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Experts</h2>
            <p className="text-gray-300">Experts from every niche use Lumina to build trust, grow revenue, and stay booked.</p>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full hover:bg-red-600 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Experts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experts.map((expert) => (
              <div key={expert.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {expert.avatar}
                  </div>
                  {expert.verified && (
                    <div className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Verified
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-1">{expert.name}</h3>
                <p className="text-gray-300 mb-2">{expert.title}</p>
                <p className="text-sm text-gray-400 mb-3">{expert.company}</p>
                
                <p className="text-gray-300 text-sm mb-4">{expert.expertise}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white ml-1">{expert.rating}</span>
                    <span className="text-gray-400 ml-1">({expert.reviews} reviews)</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-white">{expert.price}</div>
                    <div className="text-sm text-gray-400">{expert.duration}</div>
                  </div>
                </div>
                
                <Link href={`/expert/${expert.id}`} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-center block">
                  Book Session
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Create your Lumina page in a flash</h2>
            <p className="text-xl text-gray-300">Start earning $$ by the time you finish reading our website</p>
            <Link href="/signup" className="inline-flex items-center text-red-500 hover:text-red-400 font-semibold mt-4">
              Launch your page <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t Just Take Our Word for It</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Earn & Convert more with Lumina</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-white">
              <h3 className="text-lg font-semibold mb-2">Collect Payments Globally</h3>
              <p className="text-red-100">Accept payments from anywhere in the world</p>
            </div>
            <div className="text-white">
              <h3 className="text-lg font-semibold mb-2">Highlight Unlimited Testimonials</h3>
              <p className="text-red-100">Showcase your success stories</p>
            </div>
            <div className="text-white">
              <h3 className="text-lg font-semibold mb-2">Showcase your social handles</h3>
              <p className="text-red-100">Connect all your social media profiles</p>
            </div>
          </div>
          <Link href="/signup" className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors mt-8">
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">LUMINA</h3>
              <p className="text-gray-400">The go-to platform for experts to monetize their knowledge.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms Of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/experts" className="hover:text-white">⭐ Top Profiles</Link></li>
                <li><Link href="/become-expert" className="hover:text-white">Join as Expert</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">©2025 Lumina. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
