import React, { useState } from 'react';
import { TrendingUp, DollarSign, Zap, Users, CheckCircle, ArrowRight, Truck, Mail } from 'lucide-react';

export default function ResellerLanding() {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && company) {
      setSubmitted(true);
      // In real version, this would send to your email/database
      console.log('Reseller signup:', { email, company });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-slate-800/50 backdrop-blur-sm sticky top-0 z-20">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-black text-white">FleetGuard AI</h1>
            </div>
            <div className="text-sm text-slate-400">Reseller Program</div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Headline */}
            <div>
              <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                <p className="text-sm font-bold text-green-400">🚀 Earn Passive Income</p>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Earn <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">₦40k-200k/month</span> in Commission
              </h2>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Join our reseller program. Sell FleetGuard AI to transport companies in your network. Get 40% recurring commission forever. We handle everything else.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-300"><span className="font-bold text-white">No experience needed</span> - We provide all sales materials</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-300"><span className="font-bold text-white">40% commission</span> - Recurring, every month, forever</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-300"><span className="font-bold text-white">Zero support burden</span> - We handle all customer tech & support</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-300"><span className="font-bold text-white">Real product</span> - Customers actually save ₦500k-1M+ monthly</p>
                </div>
              </div>

              <p className="text-sm text-slate-400 mb-6">
                ✅ 1,000+ transport companies in Nigeria need this solution right now
              </p>
            </div>

            {/* Right: Signup Form */}
            {!submitted ? (
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm sticky top-24">
                <h3 className="text-2xl font-black text-white mb-2">Join Now</h3>
                <p className="text-slate-400 text-sm mb-6">It takes 90 seconds. Seriously.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      placeholder="Chioma Okafor"
                      required
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-green-500/50 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="chioma@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-green-500/50 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">Company/Business Name</label>
                    <input
                      type="text"
                      placeholder="E.g., ABC Transport Consultants"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-green-500/50 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-2">What's your network?</label>
                    <select
                      required
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500/50 transition"
                    >
                      <option value="">Select one...</option>
                      <option value="transport">Transport/Logistics Business</option>
                      <option value="consultant">Business Consultant</option>
                      <option value="agency">Tech/Software Agency</option>
                      <option value="association">Industry Association</option>
                      <option value="broker">Business Facilitator/Broker</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-black py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    Get Started Free <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    No credit card required. We'll send you the reseller kit immediately.
                  </p>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-700/50">
                  <p className="text-xs text-slate-400 font-bold mb-3">What you get immediately:</p>
                  <ul className="text-xs text-slate-400 space-y-2">
                    <li>✅ Sales scripts & email templates</li>
                    <li>✅ Demo dashboard access</li>
                    <li>✅ Marketing materials</li>
                    <li>✅ Unique referral code</li>
                    <li>✅ Commission tracking dashboard</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8 backdrop-blur-sm flex items-center justify-center min-h-96">
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-white mb-2">Welcome to the Program! 🎉</h3>
                  <p className="text-slate-300 mb-6">
                    We're sending your reseller kit to <span className="font-bold">{email}</span>
                  </p>
                  <p className="text-sm text-slate-400">
                    Check your email for:<br/>
                    • Sales scripts & templates<br/>
                    • Dashboard access<br/>
                    • Complete getting started guide
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800/50">
          <h2 className="text-3xl font-black text-white text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 border border-green-500/50 rounded-full mb-4">
                  <span className="text-xl font-black text-green-400">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">You Introduce</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Use our scripts and materials to introduce FleetGuard to transport companies in your network. (Takes 10-20 hours/month)
                </p>
                <p className="text-xs text-slate-500">Example: "I found a tool that saves transport companies ₦500k+ monthly..."</p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-4">
                <ArrowRight className="w-6 h-6 text-slate-700" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 border border-green-500/50 rounded-full mb-4">
                  <span className="text-xl font-black text-green-400">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">They Sign Up</h3>
                <p className="text-slate-400 text-sm mb-4">
                  They click your unique link. Sign up takes 2 minutes. We handle all the technical setup.
                </p>
                <p className="text-xs text-slate-500">They see the dashboard immediately. Try the 30-day free trial.</p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-4">
                <ArrowRight className="w-6 h-6 text-slate-700" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 border border-green-500/50 rounded-full mb-4">
                  <span className="text-xl font-black text-green-400">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">You Get Paid</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Every month they stay subscribed, you get 40% commission. Paid automatically on the 5th.
                </p>
                <p className="text-xs text-slate-500">10 customers × ₦10k = ₦40k/month to you. Forever.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Examples */}
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800/50">
          <h2 className="text-3xl font-black text-white text-center mb-12">Real Earnings Examples</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example 1 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl p-6">
              <div className="mb-4">
                <p className="text-sm text-slate-400 font-bold">PART-TIME</p>
                <h3 className="text-xl font-black text-white">10 Customers</h3>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">10 × ₦10,000/month</span>
                  <span className="font-bold text-white">₦100,000</span>
                </div>
                <div className="h-px bg-slate-700/50"></div>
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-green-400">Your commission (40%)</span>
                  <span className="text-green-400">₦40,000</span>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                💡 Typical earnings for someone with a small network. About 10-15 hours/month of work.
              </p>
            </div>

            {/* Example 2 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-green-500/30 rounded-xl p-6 ring-1 ring-green-500/20">
              <div className="mb-4">
                <p className="text-sm text-green-400 font-bold">RECOMMENDED</p>
                <h3 className="text-xl font-black text-white">25 Customers</h3>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">25 × ₦10,000/month</span>
                  <span className="font-bold text-white">₦250,000</span>
                </div>
                <div className="h-px bg-slate-700/50"></div>
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-green-400">Your commission (35%)</span>
                  <span className="text-green-400">₦87,500</span>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                💡 Move to Gold tier. Upgrade commission formula + extra support. 20-25 hours/month.
              </p>
            </div>

            {/* Example 3 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl p-6">
              <div className="mb-4">
                <p className="text-sm text-slate-400 font-bold">FULL-TIME</p>
                <h3 className="text-xl font-black text-white">50 Customers</h3>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">50 × ₦10,000/month</span>
                  <span className="font-bold text-white">₦500,000</span>
                </div>
                <div className="h-px bg-slate-700/50"></div>
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-green-400">Your commission (30%)</span>
                  <span className="text-green-400">₦150,000</span>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                💡 Platinum tier. Dedicated support + co-marketing. 30-40 hours/month. Your own team.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800/50">
          <h2 className="text-3xl font-black text-white text-center mb-12">Questions?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">Do I need sales experience?</h3>
              <p className="text-slate-400 text-sm">
                Nope. We give you exact scripts, templates, and email sequences. Just follow them. The product sells itself - companies actually save serious money.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">How do I get customers?</h3>
              <p className="text-slate-400 text-sm">
                Use your existing network. Transport companies you know, business contacts, colleagues. We provide all the messaging. You just make introductions.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">When do I get paid?</h3>
              <p className="text-slate-400 text-sm">
                Every month on the 5th. Automatic bank transfer. You see your commission in real-time on your dashboard.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">What if a customer cancels?</h3>
              <p className="text-slate-400 text-sm">
                You stop getting their commission. But our churn is <1% because companies save real money. It's sticky.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">Do I handle customer support?</h3>
              <p className="text-slate-400 text-sm">
                No. We handle all tech support, account issues, feature requests. You just make the intro and get paid.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">How much should I charge?</h3>
              <p className="text-slate-400 text-sm">
                Don't mark it up. They pay us direct. You get commission. Focus on volume, not price. 40% of ₦10k = ₦4k per customer per month recurring.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800/50 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Ready to Start?</h2>
          <p className="text-xl text-slate-300 mb-8">Join 50+ resellers already making ₦40k-200k+ monthly</p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-black px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg">
            Sign Up Now <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-slate-500 mt-4">
            Reseller kit sent to your email instantly. Start earning within days.
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800/50 backdrop-blur-sm mt-16">
          <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-slate-500">
            <p>FleetGuard AI © 2025. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
